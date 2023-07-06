/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useQuery } from "@tanstack/react-query";
import { getTodos, Todo } from "../services/api";

export function useTodos() {
  const { data } = useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  console.log(data);

  return { data };
}
