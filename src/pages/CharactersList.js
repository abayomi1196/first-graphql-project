import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../graphql/queries";

import CharacterCard from "../components/CharacterCard";
import Loader from "../components/Loader";

function CharactersList() {
  const { data, loading, error } = useQuery(GET_CHARACTERS);

  console.log(data, loading, error);

  if (loading) return <Loader />;

  if (error) return <p>something went wrong</p>;

  return (
    <div className='characterList'>
      {data.characters.results.map((character) => (
        <CharacterCard character={character} key={character.id} />
      ))}
    </div>
  );
}

export default CharactersList;
