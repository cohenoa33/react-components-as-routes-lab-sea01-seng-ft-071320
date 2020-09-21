import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(d =>
        <div>
          <h3>Name: {d.name}</h3>
          <p>Movies: <ul>{d.movies.map(movie => <li>{movie}</li>)}</ul></p>
        </div>
      )}
    </div>
  );
}

export default Directors
