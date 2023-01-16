import { useEffect, useState } from 'react';

import { getSpaceflightArticle } from '../../../api/spaceflight.api';
import { Article } from '../../types/Article';
import { useParams, useNavigate } from 'react-router-dom';
import { useKeywordFilter } from '../../../state/articles.state';

type ArticleProps = {
  id?: number|string;
};

export const ArticleComponent = () => {
  const [article, setArticle] = useState<Article | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const keyword = useKeywordFilter();

  console.log(keyword);

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const initializeArticle = async () => {
      if (!id) {
        return;
      }
      const article = await getSpaceflightArticle(id);

      setArticle(article);
    };

    initializeArticle();
  }, [id]);

  if (!article) {
    return <div>LOADING</div>;
  }

  return (
    <div>
      <div>{article.summary}</div>
      <button onClick={goBack}>back to home page</button>
    </div>
  );
};
