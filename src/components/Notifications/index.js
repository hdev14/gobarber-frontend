import React, { useState, useEffect } from 'react';
import { MdNotifications } from 'react-icons/md';
import PerfectScrollBar from 'react-perfect-scrollbar';

import api from '../../services/api';

import {
  Notification, NotificationButton, NotificationMessages, Message,
} from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function fecthNotifications() {
      const response = await api.get('/notifications');
      setNotifications(response.data);
    }

    fecthNotifications();
  }, []);

  return (
    <Notification>
      <NotificationButton onClick={() => setVisible(!visible)} hasUnread>
        <MdNotifications color="#fff" size={20} />
      </NotificationButton>

      <NotificationMessages id="notifications" visible={visible}>
        <PerfectScrollBar style={{
          maxHeight: '300px',
          flexDirection: 'column',
          padding: '5px 15px',
        }}
        >
          {notifications.map((notification) => (
            <Message unread={!notification.read}>
              <p>{notification.content}</p>
              <div>
                <button type="button">Marcar como lida</button>
                <time>há 2 dias</time>
              </div>
            </Message>
          ))}
        </PerfectScrollBar>
      </NotificationMessages>
    </Notification>
  );
}
