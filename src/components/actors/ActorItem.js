import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import noImage from '../layout/noimage.png';

const ActorItem = ({ actor: { name, profile_path, popularity } }) => {
  console.log(noImage);
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
  return (
    <div className='card text-center'>
      <h3>{name}</h3>
      <br />
      <img
        src={profile_path !== null ? `${IMAGE_URL}${profile_path}` : noImage}
        alt=''
      />

      <div className='badge badge-success'>Popularity: {popularity}</div>
    </div>
  );
};

ActorItem.propTypes = {
  actor: PropTypes.object.isRequired
};

export default ActorItem;
