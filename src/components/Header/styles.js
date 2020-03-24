import styled from 'styled-components';

export const Navbar = styled.nav`
  background-color: var(--color4);
`;

export const Content = styled.div`
  height: 70px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  div {
    display: flex;
    align-items: center;

    img#logo-header {
      margin-bottom: 20px;
      height: 80px;
      width: 80px;
    }

    a#link-header {
      padding: 10px 0;
      color: var(--color3);
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      padding-left: 10px;
      border-left: 1px solid var(--color3)
    }
  }

  aside {
    display: flex;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  div {

    margin-left: 10px;
    padding-left: 10px;
    border-left: 1px solid var(--color3);

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    margin-right: 10px;

    strong {
      font-size: 14px;
      line-height: 1.5em;
      color: var(--color1);
    }

    a {
      text-transform: capitalize;
      font-size: 12px;
      color: var(--color3);
      font-weight: 600;
    }
  }

  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
`;
