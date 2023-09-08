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
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;
