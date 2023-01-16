const baseURL = 'https://api.spaceflightnewsapi.net/v3';

export const getSpaceflightArticles = (limit?: number) => {
  let url = `${baseURL}/articles`;

  if (limit !== 0 && limit) {
    url = url + `?_limit=${limit}`;
  }

  return fetch(url).then((res) => res.json());
};

export const getSpaceflightArticle = (id: string) => {
  const url = `${baseURL}/articles/${id}`;

  return fetch(url).then((res) => res.json());
};
