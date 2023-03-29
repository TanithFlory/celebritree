import styled from "styled-components";
const SContact = styled.div`
  margin: 4rem auto;
  color: var(--black-color);
  background-color: var(--white-color);
  display: flex;
  align-items: center;
  flex-direction: column;
  transform: scale(0.8);
  border-radius: 12px;
  border: 3px solid var(--white-color);
  padding: 50px;
  max-width: 950px;
  h1 {
    text-align: center;
    margin: 0 0 10px;
  }
  & > div:first-child {
    width: 100%;
    margin-bottom: 25px;
  }
  .contact__form {
    display: grid;
    align-items: center;
    grid-template-columns: 2fr 1fr;
    margin-top: 1rem;
    width: 100%;
    gap: 1rem;
    & > div {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .about__socials {
      padding: 15px 30px;
      max-width: 320px;
      margin: 0;
      bottom: 20px;
      border-radius: 0 30%;
      box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.2),
        0 20px 20px 0 rgba(0, 0, 0, 0.19);
      background-color: var(--primary-color);
      div {
        h2 {
          color: var(--white-color);
        }
        img {
          margin: 0;
        }
      }
    }
  }
  @media screen and (max-width: 912px) {
    margin: 0;
    .about__socials {
      margin: 0;
    }
    .contact__form {
      grid-template-columns: 1fr;
      align-items: center;
      justify-content: center;
    }
    & > div:first-child {
      margin: 0;
    }
  }
`;

export default SContact;
