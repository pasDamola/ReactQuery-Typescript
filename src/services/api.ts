/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from "axios";

export const BASE_URL =
  "https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export async function getTodos(): Promise<Todo[]> {
  const { data: todos } = await axios.get(BASE_URL);

  return todos;
}
