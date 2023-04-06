import { useEffect } from "react";
import Socials from "../About/Socials/Socials";
import ContactForm from "./ContactForm";
import SContact from "./Contact.styles";
import { scrollTop } from "../Utils/scrolls";
const Contact = () => {
  useEffect(() => {
    scrollTop();
  }, []);
  return (
    <SContact>
      <div>
        <h1>We're happy to hear from you, feel free to message us!</h1>
      </div>
      <div className="contact__form">
        <div>
          <h1>
            <span>•</span> Contact Us
          </h1>
          <ContactForm />
        </div>
        <div>
          <Socials text="Message us here!" color="white" />
        </div>
      </div>
    </SContact>
  );
};

export default Contact;
