import { useQuery } from "@tanstack/react-query";
import api from "../api/github";
import { Repository } from "./types";

async function fetchRepos(githubUser: string) {
  const { data } = await api.get<Repository[]>(`/users/${githubUser}/repos`);
  return data;
}

export function useFetchRepositories(user: string) {
  return useQuery({
    queryKey: ["repos", user],
    queryFn: () => fetchRepos(user),
  });
}
