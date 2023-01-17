import { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import './ArticlesList.scss';
import { Link } from 'react-router-dom';
import {
  useArticles,
  useSpaceFlightNewsActions,
} from '../../../state/articles.state';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  Button,
  CardActionArea,
  CardActions,
 
} from '@mui/material';
import moment from 'moment';

const ArrowSvg = () => {
  return (
    <svg
      width="12"
      height="10"
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.66829 0.162658C6.45593 0.379657 6.45593 0.730251 6.66975 0.945773L9.09665 3.39845L9.15268 3.448C9.36701 3.61309 9.6729 3.59589 9.86756 3.39698C9.97375 3.28848 10.0268 3.1475 10.0268 3.00653C10.0268 2.86407 9.97375 2.72236 9.86611 2.61386L7.43993 0.161182L7.38388 0.111806C7.16946 -0.0527212 6.86296 -0.0355811 6.66829 0.162658ZM0.477064 4.45064C0.208215 4.48481 0 4.71782 0 4.99989C0 5.30546 0.244364 5.55346 0.545455 5.55346H10.1338L6.66982 9.05423L6.62082 9.11077C6.45747 9.32725 6.4737 9.63843 6.66836 9.83734C6.88073 10.0536 7.22618 10.0543 7.43927 9.83882L11.8393 5.39182L11.8878 5.33613C11.9616 5.23874 12 5.11983 12 4.99989C12 4.92829 11.9862 4.8567 11.9585 4.78879C11.8742 4.58139 11.6756 4.44632 11.4545 4.44632H0.545455L0.477064 4.45064Z"
        fill="#363636"
      />
    </svg>
  );
};


function LinkRouter(props: any) {
  return (
    <Link
      {...props}
      component={RouterLink}
    />
  );
}



type ArticlesListItemProps = {
};
const ArticlesListItem = ({
  imageUrl,
  title,
  summary,
  id,
  publishedAt,
}: any) => {
  const trimmedSummary = summary.slice(0, 136) + '...';
  let Data = publishedAt 
  let newData = moment.utc(Data).format("MMM Do, YYYY")
  

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
        <Button
          className="btn"
          size="small"
           color="primary"
          variant="text"
          endIcon={<ArrowSvg />}
        >
          <LinkRouter to={`/articles/${id}`}>Read more</LinkRouter>
        </Button>
      </CardActions>
    </Card>
  );
};

export const ArticlesList = () => {
  const articles = useArticles();
  const { getArticles } = useSpaceFlightNewsActions();

  useEffect(() => {
    const initializeArticles = async () => {
      await getArticles();
    };

    initializeArticles();
  }, []);
  
  return (
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
  );
};
