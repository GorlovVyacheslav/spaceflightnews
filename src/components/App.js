import './App.css';
import { ArticlesList } from './features/ArticlesList/ArticlesList';
import { ArticleComponent } from './features/Article/Article';
import { Link, Route, Routes } from 'react-router-dom';
import {
  useKeywordFilter,
  useSpaceFlightNewsActions,
} from '../state/articles.state';

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
      </main>
    </>
  );
};

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/"><button>sdasd</button></Link>
      </p>
    </div>
  );
}

export default App;
