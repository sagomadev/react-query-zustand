import Card from "./components/Card";
import { useFetchRepositories } from "./hooks/useRepos";

function App() {
  const { data, isLoading } = useFetchRepositories();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <main>
      <ul>
        <h2>Repositorios</h2>
        {data?.map((item) => (
          <Card key={item.id} repository={item} />
        ))}
      </ul>
    </main>
  );
}

export default App;
