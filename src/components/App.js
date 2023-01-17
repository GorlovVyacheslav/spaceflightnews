import './App.css';
import { ArticlesList } from './features/ArticlesList/ArticlesList';
import { ArticleComponent } from './features/Article/Article';
import { Link, Route, Routes } from 'react-router-dom';
import {
  useKeywordFilter,
  useSpaceFlightNewsActions,
} from '../state/articles.state';
import { ThemeProvider, createTheme } from '@mui/material';
import ErrorMessage from './errorMessage/ErrorMessage';


const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
  },
});

const App = () => {
  const keyword = useKeywordFilter();
  const { changeKeyword } = useSpaceFlightNewsActions();

  return (
    <>
      <header className="app__header">
        <h1 className="app__title">
          <p>Filter by keywords</p>
        </h1>
      </header>
      <div className="search-box">
        <input
          type="text"
          className="search-txt"
          placeholder="Type to search"
          value={keyword}
          onChange={(e) => changeKeyword(e.target.value)}
        />
      </div>
      <div className="results">
        <p>Results:6</p>
      </div>
      <div className="line"></div>

      <main className="content">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/">
            <Route
              index
              element={<ArticlesList />}
            />
            <Route
              path="articles/:id"
              element={<ArticleComponent />}
            />

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route
              path="*"
              element={<NoMatch />}
            />
          </Route>
          </Routes>
          </ThemeProvider>
      </main>
    </>
  );
};

function NoMatch() {
  return (
    <div>
    <ErrorMessage/>
   <Link to="/"><button>Back to main page</button></Link>
      
    </div>
  );
}

export default App;
