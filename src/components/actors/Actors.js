import React, { useContext } from 'react';
import ActorItem from './ActorItem';
import Spinner from '../layout/Spinner';
import ActorsContext from '../../context/actors/actorsContext';

const Actors = () => {
  const actorsContext = useContext(ActorsContext);

  const { loading, actors } = actorsContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='grid-3'>
        {actors.map(actor => (
          <ActorItem key={actor.id} actor={actor} />
        ))}
      </div>
    );
  }
};

export default Actors;
