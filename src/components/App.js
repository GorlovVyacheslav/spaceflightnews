import './App.css';
import { ArticlesList } from './features/ArticlesList/ArticlesList';
import { ArticleComponent } from './features/Article/Article';
import { Link, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import ErrorMessage from './errorMessage/ErrorMessage';

const App = () => {
  return (
    <main className="content">
      <CssBaseline />
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
  );
};

function NoMatch() {
  return (
    <div>
      <ErrorMessage />
      <Link to="/">
        <button>Back to main page</button>
      </Link>
    </div>
  );
}

export default App;
