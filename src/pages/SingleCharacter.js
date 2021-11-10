import { useQuery } from "@apollo/client";
import { GET_SINGLE_CHARACTER } from "../graphql/queries";

import Loader from "../components/Loader";
import { Link, useParams } from "react-router-dom";

function SingleCharacter() {
  const { id } = useParams();

  const { data, loading, error } = useQuery(GET_SINGLE_CHARACTER, {
    variables: { id },
  });

  console.log(data, loading, error);

  if (loading) return <Loader />;
  if (error) return <p>something went wrong</p>;

  return (
    <>
      <Link className='appLink' to='/'>
        go back
      </Link>

      <div className='singleCharacter'>
        <img src={data.character.image} width={375} height={375} alt='' />

        <div className='singleCharacter__content'>
          <h1>
            {data.character.name}. <i>{data.character.type}</i>
          </h1>
          <p>
            <b>Status: </b>
            {data.character.status}
          </p>
          <p>
            <b>Species: </b>
            {data.character.species}
          </p>

          <div className='singleCharacter__location'>
            <p>
              <b>Current Location: </b>
              {data.character.location.type} - {data.character.location.name}
            </p>

            <p>
              <b>Origin: </b>
              {data.character.origin.type} - {data.character.origin.name}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleCharacter;
