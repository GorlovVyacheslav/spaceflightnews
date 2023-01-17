import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Article } from '../components/types/Article';
import { getSpaceflightArticles } from '../api/spaceflight.api';

interface SpaceFlightNewsState {
  articles: Article[];
  filteredArticles: Article[];
  keywordFilter: string;
  actions: { getArticles: () => void; changeKeyword: (text: string) => void };
}

const useSpaceFlightNewsState = create<SpaceFlightNewsState>()(
  devtools(
    (set) => ({
      keywordFilter: '',
      articles: [],
      filteredArticles: [],
      actions: {
        getArticles: async () => {
          const articles = await getSpaceflightArticles();

          set({ articles }, false, 'set/articles');
        },
        changeKeyword: (text: string) =>
          set(
            {
              keywordFilter: text,
            },
            false,
            'set/keyword',
          ),
      },
    }),
    {
      name: 'articles-storage',
    },
  ),
);

export const useSpaceFlightNewsActions = () =>
  useSpaceFlightNewsState((state) => state.actions);

export const useArticles = () =>
  useSpaceFlightNewsState((state) => state.articles);

export const useKeywordFilter = () =>
  useSpaceFlightNewsState((state) => state.keywordFilter);

// TODO: add proper separator
const WORD_SEPARATOR = /[\W_'’]+/;
export const useKeywordWords = () => {
  const keywordFilter = useKeywordFilter();
  const splittedKeyword = keywordFilter.split(WORD_SEPARATOR);

  return splittedKeyword.filter(Boolean);
};

export const useFilteredArticles = () => {
  const articles = useArticles();
  const keywordWords = useKeywordWords();

  if (!keywordWords.length) {
    return articles;
  }

  const filteredArticles = articles.filter((article) => {
    const articlesSummaryWords = toLowerCaseInArray(
      article.summary.split(WORD_SEPARATOR),
    );
    const articlesTitleWords = toLowerCaseInArray(
      article.title.split(WORD_SEPARATOR),
    );

    return keywordWords.some((keyword) => {
      return (
        articlesSummaryWords.includes(keyword) ||
        articlesTitleWords.includes(keyword)
      );
    });
  });

  return filteredArticles;
};

export const useNumberOfFilteredArticles = () => {
  const filtered = useFilteredArticles();

  return filtered.length;
};

const toLowerCaseInArray = (array: string[] = []) => {
  return array.map((item) => item.toLowerCase());
};
