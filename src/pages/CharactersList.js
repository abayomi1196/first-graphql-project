import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../graphql/queries";

function CharactersList() {
  const { data, loading, error } = useQuery(GET_CHARACTERS);

  console.log(data, loading, error);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>something went wrong</p>;

  return (
    <div className='characterList'>
      {data.characters.results.map((character) => (
        <div key={character.id}>
          <img src={character.image} alt='' />
          <h2>{character.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default CharactersList;
