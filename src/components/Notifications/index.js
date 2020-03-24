import React, { useState } from 'react';
import { MdNotifications } from 'react-icons/md';
import PerfectScrollBar from 'react-perfect-scrollbar';

import {
  Notification, NotificationButton, NotificationMessages, Message,
} from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);

  return (
    <Notification>
      <NotificationButton onClick={() => setVisible(!visible)} hasUnread>
        <MdNotifications color="#fff" size={20} />
      </NotificationButton>

      <NotificationMessages id="notifications" visible={visible}>
        <PerfectScrollBar style={{
          maxHeight: '300px', flexDirection: 'column', padding: '5px 15px',
        }}
        >
          <Message unread>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div>
              <button type="button">Marcar como lida</button>
              <time>há 2 dias</time>
            </div>
          </Message>
          <Message>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div>
              <button type="button">Marcar como lida</button>
              <time>há 2 dias</time>
            </div>
          </Message>
          <Message>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div>
              <button type="button">Marcar como lida</button>
              <time>há 2 dias</time>
            </div>
          </Message>
          <Message>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div>
              <button type="button">Marcar como lida</button>
              <time>há 2 dias</time>
            </div>
          </Message>
          <Message>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div>
              <button type="button">Marcar como lida</button>
              <time>há 2 dias</time>
            </div>
          </Message>
          <Message>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div>
              <button type="button">Marcar como lida</button>
              <time>há 2 dias</time>
            </div>
          </Message>
          <Message>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div>
              <button type="button">Marcar como lida</button>
              <time>há 2 dias</time>
            </div>
          </Message>
        </PerfectScrollBar>
      </NotificationMessages>
    </Notification>
  );
}
