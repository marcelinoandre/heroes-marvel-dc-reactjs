import { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroesById } from '../../seletores/getHeroById';

export const HeroScreen = ({ history }) => {
  const { heroeId } = useParams();

  const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);
  // const hero = getHeroesById(heroeId);

  if (!hero) return <Redirect to="/" />;

  const handleReturn = () => {
    if (history.lenth <= 2) return history.push('/');

    history.goBack();
  };

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../assets/img/heroes/${heroeId}.jpg`}
          className="img-thumbnail animate__animated animate__fadeInLeft"
          alt={hero.superhero}        />
      </div>
      <div className="col-8">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Alter ego:</strong> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <strong>Publisher:</strong> {hero.publisher}
          </li>
          <li className="list-group-item">
            <strong>First appearance:</strong> {hero.first_appearance}
          </li>
        </ul>

        <h5>Characters</h5>
        <p>{hero.characters}</p>

        <button className="btn btn-outline-info" onClick={handleReturn}>
          {' '}
          Return{' '}
        </button>
      </div>
    </div>
  );
};
