import Pagebreak from "../UI/Pagebreak";
import styled from "styled-components";

const SCredits = styled.div`
  margin: 6rem auto 0;
  p {
    margin: auto;
    max-width: 600px;
    font-size: var(--fs-m);
    text-align: center;
  }
`;

const Credits = () => {
  return (
    <SCredits>
      <Pagebreak margin="0 0 3rem" />
      <p>
        As the web developer behind this project, I would like to credit the
        websites that provided the icons and stock images for this website. I
        used icons from <a href="http://icons8.com/">Icons8</a> and stock images
        from <a href="https://www.pexels.com/">Pexels</a>. I would also like to
        mention that if any of the content goes against copyright or if the
        owner of the content wants it removed from the website, they can contact
        me on my email, tanith@celebritree.org.
      </p>
    </SCredits>
  );
};
export default Credits;
