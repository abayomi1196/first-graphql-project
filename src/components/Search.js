import PropTypes from "prop-types";

function Search({ handleSubmit, name, setName }) {
  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        className='form__input'
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button disabled={!name} type='submit' className='form__btn'>
        Search
      </button>
    </form>
  );
}

Search.propTypes = {
  handleSubmit: PropTypes.func,
  setName: PropTypes.func,
  name: PropTypes.string,
};

export default Search;
