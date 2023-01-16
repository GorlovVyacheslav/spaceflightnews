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
