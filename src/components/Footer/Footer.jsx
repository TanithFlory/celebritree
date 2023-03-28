import "./Footer.scss";
import images from "../../constants/images";
import NewsLetter from "./NewsLetter";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__heading">
        <h1>
          When we plant trees,
          <br /> we plant the <span>seeds of peace and seeds of hope.</span>
        </h1>
      </div>
      <div className="footer__links">
        <div className="footer__links-wrapper">
          <div id="socials">
            <img src={images.logo} alt="logo" />
            <div>
              <img src={images.Facebook} alt="facebook" />
              <img src={images.Twitter} alt="facebook" />
              <img src={images.Instagram} alt="facebook" />
            </div>
          </div>
          <div id="articles-1">
            {["Deforestation", "Climate Change", "World Environment Day"].map(
              (data, index) => {
                return (
                  <a
                    href={`#article1-${data
                      .replace(/[\s]/g, "-")
                      .toLowerCase()}`}
                    key={`article-1-${index}`}
                  >
                    {data}
                  </a>
                );
              }
            )}
          </div>
          <div id="articles-2">
            {["Celebritree", "Our Mission", "About AQI", "Anti Smog Trees"].map(
              (data, index) => {
                return (
                  <a
                    href={`article2-${data
                      .replace(/[\s]+/g, "-")
                      .toLowerCase()}`}
                    key={`article-2-${index}`}
                  >
                    {data}
                  </a>
                );
              }
            )}
          </div>
          <div id="newsletter">
            <NewsLetter />
          </div>
        </div>
        <div>
          <h1>
            © {new Date().getFullYear()} <span>Celebritree</span> All rights
            reserved.
          </h1>
          <a>Privacy Policy</a>
          <a>Terms and usage</a>
          <a>Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
