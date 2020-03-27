import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  header {
    margin: 15px 0;
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    strong {
      margin: 0 15px;
    }

    button {
      border: none;
      background: none;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 20px;
    padding: 20px;
    margin-bottom: 10px;
    max-height: 400px;
  }
`;

export const Time = styled.li`
  display: flex;
  flex-direction: column;
  background-color: var(--color1);
  padding: 15px 10px;
  width: 300px;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);

  opacity: ${(props) => (props.past ? 0.5 : 1)};

  strong {
    color: ${(props) => (props.available ? 'gray' : 'var(--color3)')};
    font-size: 20px;
    font-weight: normal;
    line-height: 24px;
  }

  span {
    font-size: 14px;
    color: ${(props) => (props.available ? 'gray' : 'var(--text-color1)')};
  }
`;
