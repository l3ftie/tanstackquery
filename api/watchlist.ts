// !! adding to watchlist
export const addMovieToWatchList = async (movieId: number) => {
  const url = 'https://api.themoviedb.org/3/account/9895577/watchlist';
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmMxMzUxYmNjOWQyZDA3NDA5YjIyOTliOTg5ODM5NiIsIm5iZiI6MTcxOTc1OTczMS44NTEzMzQsInN1YiI6IjVmY2ViMWYyNTkwMDg2MDAzZGZjMDhkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._FIbSb4U__MQQCQFj2K21CXkYmLkFBvaRqhokUcdWTQ',
    },
    body: JSON.stringify({ media_type: 'movie', media_id: movieId, watchlist: true }),
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error('Failed to fetch top rated movies');
  }

  const json = await response.json();

  console.log(json);
  return json;
};
