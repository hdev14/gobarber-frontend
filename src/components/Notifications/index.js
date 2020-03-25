import React, { useState, useEffect } from 'react';
import { MdNotifications } from 'react-icons/md';
import PerfectScrollBar from 'react-perfect-scrollbar';
import { parseISO, formatDistanceToNow } from 'date-fns';
import pt from 'date-fns/locale/pt';

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
      const data = response.data.map((notification) => ({
        ...notification,
        timeDistance: formatDistanceToNow(parseISO(notification.createdAt), {
          includeSeconds: true,
          addSuffix: true,
          locale: pt,
        }),
      }));

      setNotifications(data);
    }

    fecthNotifications();
  }, []);

  async function handleMarkAsRead(id) {
    await api.put(`/notifications/${id}`);

    setNotifications(notifications.map((notification) => (
      notification._id === id
        ? { ...notification, read: true }
        : notification
    )));
  }

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
            <Message key={notification._id} unread={!notification.read}>
              <p>{notification.content}</p>
              <div>
                <button
                  type="button"
                  onClick={() => handleMarkAsRead(notification._id)}
                >
                  Marcar como lida
                </button>
                <time>{notification.timeDistance}</time>
              </div>
            </Message>
          ))}
        </PerfectScrollBar>
      </NotificationMessages>
    </Notification>
  );
}
