import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { startAsync, makeRedirectUri } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import { auth, firebase } from '../firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Crypto from 'expo-crypto';

const AuthContext = createContext({});

const request = {
  androidClientId: 'Android_OAuth-2.0-Client-IDs.apps.googleusercontent.com',
  iosClientId: 'iOS_OAuth-2.0-Client-IDs.apps.googleusercontent.com',
  webClientId: 'Created_through_Firebase_Sign-In_providers_OAuth-2.0-Client-IDs.googleusercontent.com',
  scopes: ['profile', 'email'],
  permissions: ['public_profile', 'email', 'gender', 'location'],
};

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }

      setLoadingInitial(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    setLoading(true);

    try {
      await auth.signOut();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    setLoading(true);

    try {
      const { type, params } = await startAsync({
        authUrl: `https://accounts.google.com/o/oauth2/v2/auth?client_id=${request.webClientId}&redirect_uri=${encodeURIComponent(
          makeRedirectUri({ useProxy: true })
        )}&response_type=code&scope=${encodeURIComponent(request.scopes.join(' '))}`,
        tokenUrl: 'https://oauth2.googleapis.com/token',
      });

      if (type === 'success') {
        try {
          const { code } = params;

          const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `code=${code}&client_id=${request.webClientId}&redirect_uri=${encodeURIComponent(
              makeRedirectUri({ useProxy: true })
            )}&grant_type=authorization_code`,
          });

          const tokenResult = await tokenResponse.json();

          const nonce = await Crypto.digestStringAsync(
            Crypto.CryptoDigestAlgorithm.SHA256,
            Math.random().toString(36).substring(2)
          );

          const credential = firebase.auth.GoogleAuthProvider.credential(tokenResult.id_token, tokenResult.access_token); // Use firebase.auth.GoogleAuthProvider.credential
          await firebase.auth().signInWithCredential(credential);

          await AsyncStorage.setItem('nonce', nonce);
        } catch (error) {
          setError(error);
        }
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const memoedValue = useMemo(
    () => ({
      user,
      loading,
      error,
      signInWithGoogle,
      logout,
    }),
    [user, loading, error]
  );

  return (
    <AuthContext.Provider value={memoedValue}>{!loadingInitial && children}</AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}