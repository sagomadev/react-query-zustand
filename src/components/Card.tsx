import { Repository } from "../hooks/types";
import { useFavoriteReposStore } from "../store/favoriteRepos";

type CardProps = {
  repository: Repository;
  isFavorite: boolean;
};

function Card({ repository, isFavorite }: CardProps) {
  const addFavoriteRepo = useFavoriteReposStore(
    (state) => state.addFavoriteRepo
  );
  const removeFavoriteRepo = useFavoriteReposStore(
    (state) => state.removeFavoriteRepo
  );

  const handleButtonclick = () => {
    isFavorite
      ? removeFavoriteRepo(repository.id)
      : addFavoriteRepo(repository.id);
  };

  return (
    <li>
      <h3>{repository.name}</h3>
      <p>{repository.description}</p>
      <button onClick={handleButtonclick}>
        {isFavorite ? "dislike" : "like"}
      </button>
    </li>
  );
}

export default Card;
