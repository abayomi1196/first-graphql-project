import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CharacterCard({ character }) {
  return (
    <Link to={`/${character.id}`}>
      <img src={character.image} alt='' />
      <h2>{character.name}</h2>
    </Link>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
  }),
};

export default CharacterCard;
