import {useState, useEffect} from "react";

const useOnScroll = (ref,options) => {
    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setVisible(entry.isIntersecting);
      }, options);
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [ref.current,options.threshold]);
  
    return visible;
  };
  
  export default useOnScroll;