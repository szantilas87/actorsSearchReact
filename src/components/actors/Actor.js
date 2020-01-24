import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import ActorsContext from '../../context/actors/actorsContext';

const Actor = ({ match }) => {
  const actorsContext = useContext(ActorsContext);
  const { actor, loading, getActor } = actorsContext;
  useEffect(() => {
    getActor(match.params.id);
    // eslint-disable-next-line
  }, []);

  const {
    biography,
    birthday,
    deathday,
    name,
    place_of_birth,
    homepage,
    profile_path
  } = actor;

  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

  if (loading) return <Spinner />;
  return (
    <div>
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Back To Search{' '}
        </Link>
        <div className='card grid-2'>
          <div className='all-center'>
            <img src={`${IMAGE_URL}${profile_path}`} alt='' /> <h1> {name} </h1>{' '}
            <p> Place of birth: {place_of_birth} </p>{' '}
            {birthday && (
              <Fragment>
                <p> Birthday:{birthday} </p>
              </Fragment>
            )}{' '}
            {deathday && (
              <Fragment>
                <p> Deathday:{deathday} </p>
              </Fragment>
            )}{' '}
            {homepage && (
              <Fragment>
                <p>
                  Homepage:
                  <a href={homepage} target='_blank' rel='noopener noreferrer'>
                    {homepage}
                  </a>
                </p>
              </Fragment>
            )}
          </div>{' '}
          <div>
            {' '}
            {biography && (
              <Fragment>
                <h3> Bio: </h3> <p> {biography} </p>{' '}
              </Fragment>
            )}{' '}
            {/* <ul>
              <li>
                {' '}
                {login && (
                  <Fragment>
                    <strong> Username: </strong> {login}{' '}
                  </Fragment>
                )}{' '}
              </li>{' '}
              <li>
                {' '}
                {company && (
                  <Fragment>
                    <strong> Company: </strong> {company}{' '}
                  </Fragment>
                )}{' '}
              </li>{' '}
              <li>
                {' '}
                {blog && (
                  <Fragment>
                    <strong> Website: </strong> {blog}{' '}
                  </Fragment>
                )}{' '}
              </li>{' '}
            </ul>{' '} */}
          </div>{' '}
        </div>{' '}
        {/* <div className='card text-center'>
          <div className='badge badge-primary'> Followers: {followers} </div>{' '}
          <div className='badge badge-success'> Following: {following} </div>{' '}
          <div className='badge badge-light'>
            {' '}
            Public Repos: {public_repos}{' '}
          </div>{' '}
          <div className='badge badge-dark'> Public Gists: {public_gists} </div>{' '}
        </div>{' '} */}
      </Fragment>{' '}
    </div>
  );
};

export default Actor;
