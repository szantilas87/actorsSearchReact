import React, { useState, useContext } from 'react';
import ActorsContext from '../../context/actors/actorsContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const actorsContext = useContext(ActorsContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'light');
    } else {
      actorsContext.searchActors(text);
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);
  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Actors...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {actorsContext.actors.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={actorsContext.clearActors}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
