import { ChangeEvent, useState } from "react";
import Card from "./components/Card";
import { useFetchRepositories } from "./hooks/useRepos";
import { useFavoriteReposStore } from "./store/favoriteRepos";

function App() {
  const [userName, setUserName] = useState("sagoma-dev");
  const { data, isLoading, isError } = useFetchRepositories(userName);
  const { favoriteReposIds } = useFavoriteReposStore();

  const handleUserChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  return (
    <main>
      <h1>
        Repositorios de:
        <input
          type="text"
          onChange={(e) => handleUserChange(e)}
          value={userName}
        />
      </h1>
      {isLoading && <h2>Cargando Repos...</h2>}
      {isError && <h2>{userName} no existe</h2>}
      {data && (
        <ul>
          {data.map((repository) => (
            <Card
              key={repository.id}
              repository={repository}
              isFavorite={favoriteReposIds.includes(repository.id)}
            />
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;
