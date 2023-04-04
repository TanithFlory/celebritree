import { useEffect, useState } from "react";
import ArticleList from "../ArticleList/ArticleList";
import { MdOutlineFiberNew, MdTrendingUp } from "react-icons/md";
import { motion, useAnimation, useInView } from "framer-motion";
import SNavigation from "./ArticleNavigation.styles";

const ArticleNavigation = () => {
  const controls = useAnimation();
  const [list, setList] = useState("latest");
  const [ref, setRef] = useState();
  const hookRef = {
    current: ref,
  };
  const visible = useInView(hookRef, {
    margin: "-160px",
    once: true,
  });

  useEffect(() => {
    if (ref) {
      controls.set({
        opacity: 0,
      });
      if (visible) {
        controls.start({
          opacity: 1,
          transition: {
            ease: "easeInOut",
            duration: 0.9,
          },
        });
      }
    }
  }, [controls, list, visible, ref]);
  return (
    <SNavigation id="article-list">
      <div>
        <a
          onClick={() => setList("latest")}
          className={`${list === "latest" ? "active" : undefined}`}
        >
          <MdOutlineFiberNew />
          Latest
        </a>
        <div />
        <a
          onClick={() => setList("trending")}
          className={`${list === "trending" ? "active" : undefined}`}
        >
          <MdTrendingUp />
          Trending
        </a>
      </div>
      <motion.div
        id="articleList"
        animate={controls}
        ref={setRef}
        initial={{ opacity: 0 }}
      >
        <ArticleList list={list} />
      </motion.div>
    </SNavigation>
  );
};

export default ArticleNavigation;
