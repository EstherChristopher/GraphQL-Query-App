import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        name
        gender
        image
      }
    }
  }
`;

function DisplayCharacters() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return data.characters.results.map(({ name, gender, image }) => (
    <div key={name}>
      <h3>{name}</h3>
      <img width="400" height="300" alt="character" src={`${image}`} />
      <br />
      <b>Gender:</b>
      <p>{gender}</p>
      <br />
    </div>
  ));
}

function App() {
  return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
      <DisplayCharacters />
    </div>
  );
}
export default App;
