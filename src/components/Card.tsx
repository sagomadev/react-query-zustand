import { Repository } from "../hooks/types";

type CardProps = {
  repository: Repository;
  isFavorite: boolean;
};

function Card({ repository, isFavorite }: CardProps) {
  return (
    <li>
      <h3>{repository.name}</h3>
      <p>{repository.description}</p>
      <button>{isFavorite ? "Dislike" : "like"}</button>
    </li>
  );
}

export default Card;
