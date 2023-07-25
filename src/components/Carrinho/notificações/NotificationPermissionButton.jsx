import React, { useState, useEffect } from 'react';

const OneSignalPermissionButton = () => {
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);
  const [playerID, setPlayerID] = useState(null);

  useEffect(() => {
    if (window.OneSignal) {
      window.OneSignal.isPushNotificationsEnabled((isEnabled) => {
        setIsNotificationEnabled(isEnabled);
        if (isEnabled) {
          window.OneSignal.getUserId((userID) => {
            setPlayerID(userID);
          });
        }
      });
    }
  }, []);

  const handlePermissionToggle = () => {
    if (isNotificationEnabled) {
      window.OneSignal.setSubscription(false);
        localStorage.removeItem('playerID');
    } else {
      window.OneSignal.setSubscription(true);
      window.OneSignal.getUserId((userID) => {
        localStorage.setItem('playerID', userID);
        setPlayerID(userID);
      });
    }
    setIsNotificationEnabled(!isNotificationEnabled);
  };

  return (
    <div>
      <button onClick={handlePermissionToggle}>
        {isNotificationEnabled ? 'Desativar Notificações' : 'Ativar Notificações'}
      </button>
    </div>
  );
};

export default OneSignalPermissionButton;
