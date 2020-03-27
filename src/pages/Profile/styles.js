import styled from 'styled-components';
import { darken } from 'polished';

import { PrimaryButton } from '../../styles/utils';

export const ProfileContainer = styled.div`
  width: 100%;
  margin-top: 30px;

`;

export const Line = styled.hr`
  margin: 10px 0;
  background-color: var(--color3);
`;

export const SecondaryButton = styled(PrimaryButton)`
  background-color: tomato;
  margin: 10px 0;
  width: 100%;

  &:hover {
    background-color: ${darken(0.05, '#ff6347')};
  }
`;
