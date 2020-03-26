import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { DashboardContainer, Time } from './styles';

export default function Dashboard() {
  return (
    <DashboardContainer>
      <header>
        <button type="button">
          <MdChevronLeft size={36} color="#f4991a" />
        </button>
        <strong>26 Março</strong>
        <button type="button">
          <MdChevronRight size={36} color="#f4991a" />
        </button>
      </header>

      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Hermerson Araújo</span>
        </Time>
        <Time available>
          <strong>08:00</strong>
          <span>Hermerson Araújo</span>
        </Time>
        <Time>
          <strong>08:00</strong>
          <span>Hermerson Araújo</span>
        </Time>
        <Time>
          <strong>08:00</strong>
          <span>Hermerson Araújo</span>
        </Time>
      </ul>
    </DashboardContainer>
  );
}
