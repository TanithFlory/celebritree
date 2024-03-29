import axios from "axios";
import SArticle from "./ArticleList.styles";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const ArticleList = (props) => {
  const [articleData, setArticleData] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    try {
      (async () => {
        const response = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_APP_API_BASE_URL}/posts/get-articles`,
          params: {
            list: props.list,
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
  }, [props.list]);
  return (
    <SArticle>
      {articleData?.map((data, index) => {
        return (
          <Link
            key={data.id}
            to={`/blog/articles/${props.list}/${data.id}/${data.title
              .replace(/[\s]+/g, "-")
              .toLowerCase()}`}
          >
            <div className="article__card">
              <div>
                <img
                  src={`/blog/images/${data.title
                    .replace(/\s/g, "-")
                    .toLowerCase()}.jpg`}
                  alt={`${props.list}-${index}`}
                />
              </div>
              <div>
                <h4>{data.title}</h4>
                <p>{data.date}</p>
                <p>{data.description}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </SArticle>
  );
};

export default ArticleList;
