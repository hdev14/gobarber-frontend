import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export const Notification = styled.div`
  position: relative;
`;

export const NotificationButton = styled.button`
  position: relative;
  background: none;
  border: none;

  ${(props) => props.hasUnread && css`
    &::before{
      position: absolute;
      top: 0;
      right: 0;
      height: 8px;
      width: 8px;
      border-radius: 50%;
      background-color: tomato;
      content:'';
      box-shadow: 0 0 3px black;
    }
  `}
`;

export const NotificationMessages = styled.div`
  &#notifications {
    display: ${(props) => (props.visible ? 'flex' : 'none')};
  }

  position: absolute;
  width: 260px;
  left: calc(100% - 80px);
  top: calc(100% + 20px);
  background-color: var(--color1);
  flex-direction: column;
  padding: 15px 5px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .3);

  &::before {
    position: absolute;
    top: -20px;
    left: 50px;
    content: '';
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid var(--color1);
  }
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  line-height: 16px;
  color: var(--text-color2);
  position: relative;
  padding-left: 15px;

  & + div {
    padding-top: 10px;
    margin-top: 10px;
    border-top: 1px solid var(--color2);

    &::before {
      top: 15px;
    }
  }

  &::before {
    position: absolute;
    top: 5px;
    left: 0;
    content: '';
    background-color: ${(props) => (props.unread ? 'var(--color3)' : 'lightgray')};
    height: 10px;
    width: 10px;
    border-radius: 50%;
  }

  div {
    margin: 5px 0;
    width: 100%;
    display: flex;
    justify-content: space-between;

    time {
      font-size: 12px;
      color: ${lighten(0.2, '#100C02')};
      margin-right: 10px;
    }

    button {
      font-size: 12px;
      background: none;
      border: none;
      color: var(--color3);
      font-weight: 600;

      ${(props) => !props.unread && css`
        cursor: not-allowed;
        color: gray;
      `}
    }
  }
`;
