import { useState, useEffect } from "react";
import data from "./Dummydata";
import CarouselWrapper from "./Carousel";
import axios from "axios";
import SItem from "./HorizontalCarousel.styles";
import { Link } from "react-router-dom";
const HorizontalCarousel = () => {
  const [articleData, setArticleData] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    try {
      (async () => {
        const response = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_APP_API_BASE_URL}/posts/get-articles`,
          params: {
            list: "trending",
          },
          signal: controller.signal,
        });
        setArticleData(response.data?.items);
      })();
    } catch (err) {
      if (err.message === "canceled") {
        console.log("Aborted");
      } else console.log(err);
    }
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <CarouselWrapper>
      {articleData
        ? articleData.map((data) => {
            return (
              <Link
                to={`/blog/articles/trending/${data.id}/${data.title
                  .replace(/[\s]+/g, "-")
                  .toLowerCase()}`}
                key={`trending${data.id}`}
              >
                <SItem>
                  <img
                    src={`/blog/images/${data.title
                      .replace(/\s/g, "-")
                      .toLowerCase()}.jpg`}
                  />
                  <h3>{data.title}</h3>
                  <p>{data.description}</p>
                </SItem>
              </Link>
            );
          })
        : data.map((data) => {
            return (
              <SItem key={data.id}>
                <img
                  src={`/blog/images/${data.title
                    .replace(/\s/g, "-")
                    .toLowerCase()}.jpg`}
                />
                <h3>{data.title}</h3>
                <p>{data.description}</p>
              </SItem>
            );
          })}
    </CarouselWrapper>
  );
};
export default HorizontalCarousel;
