import { useState } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_CHARACTERS, GET_SEARCHED_CHARACTERS } from "../graphql/queries";

import CharacterCard from "../components/CharacterCard";
import Loader from "../components/Loader";
import Search from "../components/Search";

function CharactersList() {
  const [name, setName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const { data, loading, error } = useQuery(GET_CHARACTERS);

  const [
    searchCharacters,
    { loading: searchLoading, error: searchError, data: searchData },
  ] = useLazyQuery(GET_SEARCHED_CHARACTERS, {
    variables: { name: searchTerm },
  });

  function handleSubmit(e) {
    e.preventDefault();
    setSearchTerm(name);
    searchCharacters();
  }

  if (loading || searchLoading) return <Loader />;
  if (error || searchError) return <p>something went wrong</p>;

  return (
    <>
      <Search handleSubmit={handleSubmit} name={name} setName={setName} />

      {!searchTerm && (
        <div className='characterList'>
          {data.characters.results.map((character) => (
            <CharacterCard character={character} key={character.id} />
          ))}
        </div>
      )}

      {searchData && (
        <div className='characterList'>
          {searchData.characters.results.map((character) => (
            <CharacterCard character={character} key={character.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default CharactersList;
