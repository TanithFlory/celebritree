export const scrollTop = () => {
  window.scrollTo({
    top: 0,
  });
};

export const scrollAbout = () => {
  const aboutUs = document.getElementsByClassName("about__socials")[0];
  aboutUs.scrollIntoView({
    behavior: "smooth",
    block: "end",
  });
};

