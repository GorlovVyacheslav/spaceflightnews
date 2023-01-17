import { useEffect, useState } from 'react';

import { getSpaceflightArticle } from '../../../api/spaceflight.api';
import { Article } from '../../types/Article';
import { useParams, useNavigate } from 'react-router-dom';
import { useKeywordFilter } from '../../../state/articles.state';

import { Button, CardActionArea, CardActions } from '@mui/material';
import './Article.css';
import { ArrowIcon } from '../../icons/ArrowIcon';
import Spinner from '../../spinner/Spinner';

type ArticleProps = {
  id?: number | string;
};

export const ArticleComponent = () => {
  const [article, setArticle] = useState<Article | null>(null);
  const { id }:ArticleProps = useParams();
  const navigate = useNavigate();
  const keyword = useKeywordFilter();

  console.log(id);

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
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <div className='wrapper'>
      <div>
        <img className='img'
          src={article.imageUrl}
          alt="123"
        />
      </div>
      <div className='content1'>
        <p>{article.title}</p>
        <p className='summary'>{article.summary}</p>
      
        <Button
        onClick={goBack}
        className="btn1"
        size="small"
        color="primary"
        variant="text"
        startIcon={<ArrowIcon direction="right" />}
      >
        Back to homepage
        </Button>
      
      </div>
     </div>
  );
};
