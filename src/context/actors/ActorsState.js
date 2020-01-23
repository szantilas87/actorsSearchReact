import React, { useReducer } from 'react';
import axios from 'axios';
import ActorsContext from './actorsContext';
import ActorsReducer from './actorsReducer';
import { SEARCH_ACTORS, SET_LOADING, CLEAR_ACTORS, GET_ACTOR } from '../types';

// let githubClientId;
// let githubClientSecret;

// if (process.env.NODE_ENV !== 'production') {
//   githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
//   githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
// } else {
//   githubClientId = process.env.GITHUB_CLIENT_ID;
//   githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
// }

const ActorsState = props => {
  const initialState = {
    actors: [],
    actor: {},
    loading: false
  };

  const [state, dispatch] = useReducer(ActorsReducer, initialState);

  //   Search Actors
  const searchActors = async text => {
    setLoading();
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${text}`
    );

    const pages = res.data.total_pages;
    const results = [];
    const actors = [];
    for (let i = 1; i < pages + 1; i++) {
      let urls = await axios.get(
        `https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${text}&page=${i}`
      );
      results.push(urls.data.results);
    }

    for (let i = 0; i < results.length; i++) {
      for (var j = 0; j < results[i].length; j++) {
        actors.push(results[i][j]);
      }
    }

    dispatch({
      type: SEARCH_ACTORS,
      payload: actors
    });
  };

  // Get Actor

  const getActor = async id => {
    setLoading();

    const res = await axios.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_API_KEY}`
    );

    dispatch({
      type: GET_ACTOR,
      payload: res.data
    });
  };

  // Clear actors
  const clearActors = () =>
    dispatch({
      type: CLEAR_ACTORS
    });
  // Set Loading
  const setLoading = () =>
    dispatch({
      type: SET_LOADING
    });
  return (
    <ActorsContext.Provider
      value={{
        actors: state.actors,
        actor: state.actor,
        loading: state.loading,
        searchActors,
        clearActors,
        getActor
      }}
    >
      {' '}
      {props.children}{' '}
    </ActorsContext.Provider>
  );
};

export default ActorsState;
