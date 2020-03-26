import styled from 'styled-components';

const InputContainer = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: relative;
    border-radius: 50%;
    border: 3px solid var(--color3);
    transition: border .2s;
    overflow: hidden;

    img {
      background-color: var(--color2);
      height: 100px;
      width: 100px;
      border-radius: 50%;
    }

    svg {
      position: absolute;
      display: none;
      color: var(--color2);
      width: 100%;
      padding: 5px;
      background-color: rgba(0, 0, 0, 0.6);
    }

    &:hover > svg {
      display: block;
    }

    input {
      display: none;
    }
  }
`;

export default InputContainer;
