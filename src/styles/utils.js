import styled from 'styled-components';
import { lighten } from 'polished';
import { Form, Input } from '@rocketseat/unform';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 315px;
  flex-direction: column;
  margin: 0 auto;
`;

export const Logo = styled.img`
  height: 150px;
  width: 150px;
`;

export const UnForm = styled(Form)`
  display: flex;
  flex-direction: column;

  span {
    font-size: 12px;
    color: tomato;
  }
`;

export const UnInput = styled(Input)`
  margin: 5px 0;
  height: 30px;
  padding: 0 15px;
  border-radius: 4px;
  border: none;
  font-weight: 600;
  letter-spacing: 0.8px;
  background-color: rgb(50,19,19, 0.1);

  &:focus {
    background-color: white;
  }
`;

export const PrimaryButton = styled.button`
  height: 30px;
  margin-top: 10px;
  border-radius: 4px;
  border: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
  background-color: var(--color4);
  color: white;
  transition: background-color .2s;

  &:hover {
    background-color: ${lighten(0.08, '#321313')};
  }
`;

export const LinkFooter = styled.small`
  margin-top: 15px;
  color: var(--color4);

  a {
    color: var(--color3);
    font-weight: 600;
  }
`;
