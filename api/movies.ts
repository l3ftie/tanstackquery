export const apiKey =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmMxMzUxYmNjOWQyZDA3NDA5YjIyOTliOTg5ODM5NiIsIm5iZiI6MTcxOTM0Mjk5My41MDIzOTcsInN1YiI6IjVmY2ViMWYyNTkwMDg2MDAzZGZjMDhkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SmJqBOZVlfn21L0MfRuMJTmGmP24Nxrogt6YYXCNiBU';

const headers = {
  accept: 'application/json',
  Authorization: 'Bearer ' + apiKey,
};

export const fetchTopRatedMovies = async () => {
  const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
  const options = {
    method: 'GET',
    headers,
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error('Failed to fetch top rated movies');
  }

  const json = await response.json();
  return json.results;
};

export const fetchMovie = async (id: number) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: 'GET',
    headers,
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error('Failed to fetch top rated movies');
  }

  const json = await response.json();
  return json;
};
