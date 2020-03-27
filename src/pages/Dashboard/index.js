import React, { useState, useMemo, useEffect } from 'react';
import {
  format,
  subDays,
  addDays,
  setMinutes,
  setSeconds,
  setHours,
  setMilliseconds,
  isBefore,
  isEqual,
  parseISO,
} from 'date-fns';
import pt from 'date-fns/locale/pt';
import { utcToZonedTime } from 'date-fns-tz';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import PerfectScrollBar from 'react-perfect-scrollbar';
import api from '../../services/api';

import { DashboardContainer, Time } from './styles';

const ranges = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
export default function Dashboard() {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    async function fetchSchedule() {
      const response = await api.get('/schedule', {
        params: { date },
      });

      const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

      const data = ranges.map((hour) => {
        const staticDate = setMilliseconds(setSeconds(setMinutes(setHours(date, hour), 0), 0), 0);
        const timeZoneDate = utcToZonedTime(staticDate, timeZone);

        const appointment = response.data.find((a) => isEqual(parseISO(a.date), timeZoneDate));

        return {
          time: `${hour}:00h`,
          past: isBefore(timeZoneDate, new Date()),
          appointment,
        };
      });

      setSchedule(data);
    }

    fetchSchedule();
  }, [date]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  const dateFormatted = useMemo(() => format(date, "d 'de' MMMM", { locale: pt }), [date]);

  return (
    <DashboardContainer>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} color="#f4991a" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="#f4991a" />
        </button>
      </header>
      <PerfectScrollBar style={{ height: '90%' }}>
        <ul>
          {schedule.map((time) => (
            <Time key={time.time} past={time.past} available={!time.appointment}>
              <strong>{time.time}</strong>
              <span>{time.appointment ? time.appointment.user.name : 'Em aberto'}</span>
            </Time>
          ))}
        </ul>
      </PerfectScrollBar>
    </DashboardContainer>
  );
}
