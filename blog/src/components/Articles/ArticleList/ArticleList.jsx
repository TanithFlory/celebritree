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
          url: "http://localhost:3001/posts/get-articles",
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
      {articleData?.map((data) => {
        return (
          <Link
            key={data.id}
            to={`/blog/articles/${props.list}/${data.title
              .replace(/[\s]+/g, "-")
              .toLowerCase()}`}
          >
            <div className="article__card">
              <div>
                <img src={data.img} alt="zxc1" />
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
