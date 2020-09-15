import { SEARCH_ATTEMPT, SEARCH_SUCCESS, SEARCH_FAIL,TRENDING_SUCCESS,TRENDING_FAIL,TRENDING_ATTEMPT, IS_SERACHED } from './types';

// @@search Movie Api Request
export const searchMovies = movie => async dispatch => {
    dispatch({type:SEARCH_ATTEMPT});
    const url = `https://api.themoviedb.org/3/search/movie?api_key=a0e19466a21dc6b977903ad4c216cad6&language=en-US&query=${movie}&page=1&include_adult=false`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        dispatch({type:SEARCH_SUCCESS,payload:data.results})
      } catch (err) {
          dispatch({type:SEARCH_FAIL})
        console.log(err);
      }
}


// @@get Trending Movies Api Request
export const weekTrendingMovies = () => async dispatch => {
  dispatch({type:TRENDING_ATTEMPT});
  const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=a0e19466a21dc6b977903ad4c216cad6`;
  try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({type:TRENDING_SUCCESS,payload:data.results})
    } catch (err) {
        dispatch({type:TRENDING_FAIL})
      console.log(err);
    }
}

export const setIsSearchedToFalse = () => dispatch => {
  dispatch({type:IS_SERACHED})
}
