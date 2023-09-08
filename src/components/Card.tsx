import { Repository } from "../hooks/types";

type CardProps = {
  repository: Repository;
};

function Card({ repository }: CardProps) {
  return (
    <li>
      <h3>{repository.name}</h3>
      <p>{repository.description}</p>
    </li>
  );
}

export default Card;
