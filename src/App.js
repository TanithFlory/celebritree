import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { useEffect, useRef, useState } from "react";

const useOnScroll = (ref, options) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if(ref.current)
      {
        observer.unobserve(ref.current);
      }
    }
  }, [ref]);

  return visible;
};

function App() {
  const ref = useRef();
  const options = { rootMargin: '-300px'};
  const visible = useOnScroll(ref, options);
  console.log(visible);
  return (
    <>
      <NavBar onScrollUpdate = {visible}/>
      <Header />
      <div id="scrollCheck" ref={ref}>
        <Body />
      </div>
    </>
  );
}

export default App;
