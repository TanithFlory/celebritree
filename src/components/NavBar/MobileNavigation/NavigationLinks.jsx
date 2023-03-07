import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import images from "../../../constants/images";
const colors = ["#53C24D", "#534DC2", "#022B3A", "#E39735", "#4400FF","#44009B","#7E3C9B","#009735"];
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const NavigationLinks = (props) => (
  <motion.ul>
    {[
      { title: "home", icon: images.Home },
      { title: "about", icon: images.About },
      { title: "mission", icon: images.Mission },
      { title: "contact", icon: images.Contact },
      { title: "account", icon: images.UserMob },
      { title: "login", icon: images.LoginMob },
      { title: "signup", icon: images.SignupMob },
      { title: "cart", icon: images.ShoppingCartMob },
    ].map((data, index) => {
      const style = { border: `2px solid ${colors[index]}` };
      return (
        <Link to={`/${data.title}`} onClick={()=>props.onClick()}>
        <motion.li
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          key={`link-${data.title}`}
        >
          <div className="app__navbar-phone-icon" style={style}>
            <img src={data.icon} alt={data.title} />
          </div>
          <div className="app__navbar-phone-text" style={style}>
            {data.title}
          </div>
        </motion.li>
        </Link>
      );
    })}
  </motion.ul>
);

export default NavigationLinks;
