import queryString from 'query-string';

import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { heroes } from '../../data/heroes';
import { GetHeroesByName } from '../../seletores/getHeroesByName';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const [hero, setHero] = useState(q);

  const heroesFiltered = useMemo(() => GetHeroesByName(hero), [q]);
  const handleSubmit = e => {
    e.preventDefault();

    history.push(`?q=${hero}`);
  };
  return (
    <div>
      <h1>Search Screen</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              onChange={e => setHero(e.target.value)}
            />
            <button className="btn btn-block m-1 btn-outline-primary">
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {q === '' && <div className="alert alert-info">Search a hero</div>}
          {q !== '' && heroesFiltered.length === 0 && (
            <div className="alert alert-warning">
              Hero <b>{`${q}`}</b> not found
            </div>
          )}
          {heroesFiltered.map(hero => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
