import styled from "styled-components";
import images from "../../../constants/images";
const SIntroduction = styled.div`
  margin: auto 6rem;
  background-image: var(--gradient-bl-or);
  border-radius: 2px;
  position: relative;
  display: flex;
  align-items: center;
  p {
    padding: 30px 50px;
    font-size: var(--fs-m);
    font-weight: 100;
    text-align: center;
    margin: 1px;
    background: var(--clr-black);
  }
  div {
    background-image: var(--gradient-bl-or);
    width: 100px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    position: absolute;
    left: -50px;
    overflow: hidden;
    img {
      height: 100%;
      aspect-ratio: 1/1;
      object-fit: cover;
      transform: scale(0.95);
      background: black;
      border-radius: 50%;
    }
  }
  @media screen and (max-width: 912px) {
    margin: 3rem 0 0;
    align-items: start;
    justify-content: center;
    p {
      padding: 30px 5px;
      font-size: var(--fs-s);
    }
    div {
      inset: -25px auto;
      width: 50px;
    }
  }
`;

const Introduction = () => {
  return (
    <SIntroduction>
      <div>
        <img src={images.profile}></img>
      </div>
      <p>
        Hi, I'm Tanith Flory, a web developer and the person behind this
        project. I have a passion for creating websites and using technology to
        make a positive impact. With this project, I aim to raise awareness
        about environmental issues and encourage people to take action towards a
        greener world. 
      </p>
    </SIntroduction>
  );
};

export default Introduction;
