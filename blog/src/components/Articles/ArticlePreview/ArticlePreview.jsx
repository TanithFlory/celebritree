import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import SArticlePreview from "./ArticlePreview.styles";
import Introduction from "./Introduction";
import Pagebreak from "../../UI/Pagebreak";
import ArticleHighlights from "./ArticleHighlights";
import parse from "html-react-parser";
import DOMPurify from "dompurify";
import scrollTop from "../../Utils/scrollTop";
const ArticlePreview = () => {
  scrollTop();
  const { title, tag } = useParams();
  const [article, setArticle] = useState();
  const [highlights, setHighlights] = useState();
  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_APP_API_BASE_URL}/posts/article-preview`,
        params: {
          title: title?.replace(/[-]+/g, " "),
          tag,
        },
        signal: controller.signal,
      });
      setHighlights(response.data.highlights);
      const sanitizedArticle = DOMPurify.sanitize(response.data.content);
      setArticle(sanitizedArticle);
    })();

    return () => {
      controller.abort();
    };
  }, []);
  return (
    <SArticlePreview
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ ease: "easeIn", duration: 0.6 }}
    >
      <div>
        <img
          src={`/blog/images/${title
            .replace(/\s/g, "-")
            .toLowerCase()}.jpg`}
        />
      </div>
      <div>
        <ArticleHighlights highlights={highlights} />
        <div className="article__content">
          {parse(article === undefined ? " " : article)}
          <Pagebreak margin="0 0 3rem" />
        </div>
        <Introduction />
      </div>
    </SArticlePreview>
  );
};

export default ArticlePreview;
