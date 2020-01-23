import React, { Fragment } from 'react';
import Search from '../actors/Search';
import Actors from '../actors/Actors';

const Home = () => (
  <Fragment>
    <Search />
    <Actors />
  </Fragment>
);

export default Home;
