import PropTypes from "prop-types";

function CharacterCard({ character }) {
  return (
    <div>
      <img src={character.image} alt='' />
      <h2>{character.name}</h2>
    </div>
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
