import React, { useEffect, useState } from 'react';
import { api } from '../../../../conecções/api';

const StatusAlert = () => {
  const [currentStatus, setCurrentStatus] = useState('');

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await api.get('/status'); 
        const newStatus = response.data.status;
        if (newStatus !== currentStatus) {
          setCurrentStatus(newStatus);
          alert(`Status changed: ${newStatus}`);
        }
      } catch (error) {
        console.error('Error fetching status:', error);
      }
    };

    // Polling interval (every 5 seconds in this example)
    const intervalId = setInterval(fetchStatus, 5000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentStatus]);

  return (
    <div>
      {/* Display the current status in the frontend */}
      <p>Current Status: {currentStatus}</p>
    </div>
  );
};

export default StatusAlert;
