import { useFetchRepositories } from "./hooks/useRepos";

function App() {
  const { data, isLoading } = useFetchRepositories();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  console.log(data);
  return <div>Finish</div>;
}

export default App;
