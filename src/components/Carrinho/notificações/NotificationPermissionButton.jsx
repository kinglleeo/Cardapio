import React, { useState, useEffect } from 'react';
import './notificacao.css'

const OneSignalPermission = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    OneSignal.isPushNotificationsEnabled((isEnabled) => {
      setIsSubscribed(isEnabled);
    });
  }, []);

  const handlePermissionChange = () => {
    if (isSubscribed) {
      OneSignal.setSubscription(false);
      setIsSubscribed(false);
    } else {
      OneSignal.setSubscription(true);
      setIsSubscribed(true);
    }
  };

  return (
    <div className='caixabtnnotificacao'>
      <button className='btnnotificacao' onClick={handlePermissionChange}>
        <div className='btnnotificacaotext'><div className='textbtnnotificacao'>{isSubscribed ? 'Desativar Notificações' : 'Ativar Notificações'}</div></div>
        <div className='btnnotificacaocaixaicone'>
          <div className={isSubscribed ? 'iconeAtivo' : 'iconeDesativado'}></div>
        </div>
      </button>
    </div>
  );
};

export default OneSignalPermission;
