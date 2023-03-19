import styled from "styled-components";
import Socials from "../About/Socials/Socials";
import ContactForm from "./ContactForm";
const StyledDiv = styled.div`
  margin: 4rem 0 0 auto;
  color: var(--white-color);
  display: flex;
  align-items: center;
  flex-direction: column;
  transform: scale(0.8);
  & > div:first-child {
    h1 {
      text-align: center;
      margin: 0;
    }
  }
  .contact__form {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    & > div:first-child {
      transform: scale(0.9);
      padding: 120px 135px;
      border-radius: 50%;
      background: hsla(195, 96%, 9%, 1);

      background: linear-gradient(
        90deg,
        hsla(195, 96%, 9%, 1) 2%,
        hsla(196, 100%, 38%, 1) 100%
      );

      background: -moz-linear-gradient(
        90deg,
        hsla(195, 96%, 9%, 1) 2%,
        hsla(196, 100%, 38%, 1) 100%
      );

      background: -webkit-linear-gradient(
        90deg,
        hsla(195, 96%, 9%, 1) 2%,
        hsla(196, 100%, 38%, 1) 100%
      );

      filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#01212C", endColorstr="#0090C4", GradientType=1 );
    }
    .about__socials {
      bottom: 20px;
    }
  }
  @media screen and (max-width: 912px) {
    margin: 0;
    .about__socials {
      margin: 0;
    }
    .contact__form {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

const Contact = () => {
  return (
    <StyledDiv>
      <div>
        <h1>
          We want to hear from you. <br /> Let us know how we can help.
        </h1>
      </div>
      <div className="contact__form">
        <div>
          <ContactForm />
        </div>
        <Socials text="Message us here!" />
      </div>
    </StyledDiv>
  );
};

export default Contact;
