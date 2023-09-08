import Card from "./components/Card";
import { useFetchRepositories } from "./hooks/useRepos";
import { useFavoriteReposStore } from "./store/favoriteRepos";

function App() {
  const { data, isLoading } = useFetchRepositories();
  const { favoriteReposIds } = useFavoriteReposStore();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <main>
      <ul>
        <h2>Repositorios</h2>
        {data?.map((repository) => (
          <Card
            key={repository.id}
            repository={repository}
            isFavorite={favoriteReposIds.includes(repository.id)}
          />
        ))}
      </ul>
    </main>
  );
}

export default App;
