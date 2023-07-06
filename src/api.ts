import axios from "axios";

export const BASE_URL =
  "https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export async function getCabins(): Promise<Todo[]> {
  const todos: Todo[] = await axios.get(BASE_URL);

  return todos;
}
