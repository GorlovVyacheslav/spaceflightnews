import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import moment from 'moment';


import './ArticlesList.scss';
import { Link } from 'react-router-dom';
import {
  useFilteredArticles,
  useNumberOfFilteredArticles,
  useSpaceFlightNewsActions,
} from '../../../state/articles.state';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Search } from '../Search/Search';
import { ArrowIcon } from '../../icons/ArrowIcon';

function LinkRouter(props: any) {
  return (
    <Link
      {...props}
      component={RouterLink}
    />
  );
}

// type ArticlesListItemProps = {};
const ArticlesListItem = ({
  imageUrl,
  title,
  summary,
  id,
  publishedAt,
}: any) => {
  const trimmedSummary = summary.slice(0, 136) + '...';
  let newData = moment.utc(publishedAt).format('MMM Do, YYYY');

  return (
    <Card
      className="news__item"
      sx={{ maxWidth: 400 }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="217"
          image={imageUrl}
          alt="abyss"
        />
        <div>{newData}</div>

        <CardContent>
          <Typography
            component="div"
            width={350}
            height={58}
            fontSize={24}
            lineHeight={1.2}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            marginTop={8}
            marginBottom={-1.5}
            fontSize={16}
            width={350}
            height={96}
          >
            {trimmedSummary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <LinkRouter to={`/articles/${id}`}>
          <Button
            className="btn"
            size="small"
            color="primary"
            variant="text"
            endIcon={<ArrowIcon />}
          >
            Read more
          </Button>
        </LinkRouter>
      </CardActions>
    </Card>
  );
};

export const ArticlesList = () => {
  const articles = useFilteredArticles();
  const { getArticles } = useSpaceFlightNewsActions();
  const numberOfFilteredArticles = useNumberOfFilteredArticles();

  useEffect(() =>  {
    const initializeArticles = async () =>{
      await getArticles();
    };

    initializeArticles();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Search />
      <div className="results">
        <p>Results:{numberOfFilteredArticles}</p>
      </div>
      <div className="line"></div>

      <div className="news__list">
        <ul className="news__grid">
          {articles.map(({ imageUrl, summary, id, title, publishedAt }) => (
            <ArticlesListItem
              key={id}
              imageUrl={imageUrl}
              summary={summary}
              id={id}
              title={title}
              publishedAt={publishedAt}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
