import { useRef, useState } from "react";
import api from "../../../ApiService/api";
import { FadeInWrapper } from "../../UI/Wrapper/MotionWrappers";
import images from "../../../constants/images";
import { AnimatePresence, motion } from "framer-motion";
import { PrimaryButton } from "../../UI/Button/StyledButtons";
import { useEffect } from "react";
import SNewsletter from "./NewsLetter.styles";

const Newsletter = () => {
  const emailID = useRef(null);
  const [statusCode, setStatusCode] = useState(null);
  const subscribed = async (e) => {
    e.preventDefault();
    try {
      const data = emailID.current.value;
      emailID.current.value = "";
      if (!data.match(/^[\w-._]+@([\w-]{3,}\.)+[\w-]{2,4}$/)) {
        return setStatusCode(400);
      }
      const res = await api.subscribe(data);
      if (res) {
        const start = Date.now();
        setStatusCode(res.request.status);
        const end = Date.now();
        setTimeout(() => {
          setStatusCode(null);
        }, 5000 + (start - end));
      }
    } catch (err) {
      setStatusCode(400);
      console.log(err);
    }
  };
  useEffect(() => {
    const interval = setTimeout(() => {
      setStatusCode(null);
    }, 5000);

    return () => {
      clearTimeout(interval);
    };
  }, [statusCode]);
  return (
    <>
      <SNewsletter onSubmit={subscribed}>
        <motion.input
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "100%" }}
          transition={{ type: "ease", stiffness: 100, duration: 1 }}
          type="text"
          placeholder="Enter Email-ID"
          ref={emailID}
          required
        />
        <PrimaryButton backgroundColor="black" textColor="blue" type="submit">
          Subscribe
        </PrimaryButton>
      </SNewsletter>
      <AnimatePresence>
        {statusCode === 200 ? (
          <FadeInWrapper>
            <h3>Already a subscriber! </h3>
            <img src={images.CheckMark} alt="Checkmark" />
          </FadeInWrapper>
        ) : statusCode === 201 ? (
          <FadeInWrapper>
            <h3>Subscribed </h3>
            <img src={images.CheckMark} alt="Checkmark" />
          </FadeInWrapper>
        ) : (
          statusCode && (
            <FadeInWrapper>
              <p>Error, enter a valid E-mail ID. </p>
              <img src={images.CheckMark} alt="Crossmark" />
            </FadeInWrapper>
          )
        )}
      </AnimatePresence>
    </>
  );
};

export default Newsletter;
