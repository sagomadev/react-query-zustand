import { useQuery } from "@tanstack/react-query";
import api from "../api/github";

async function fetchRepos() {
  const { data } = await api.get("/users/sagoma-dev/repos");
  return data;
}

export function useFetchRepositories() {
  return useQuery(["repos"], fetchRepos);
}
