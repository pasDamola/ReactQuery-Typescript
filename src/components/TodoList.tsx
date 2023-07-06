/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import { useTodos } from "../hooks/useTodos";
import { Todo } from "../services/api";
function TodoListItems() {
  const { data } = useTodos();

  return (
    <>
      {data
        ? data.map((todo: Todo) => (
            <Flex pt={2} key={todo.id}>
              <Checkbox onClick={() => (todo.done = !todo.done)} />
              <Input mx={2} value={todo.text} />
              <Button>Delete</Button>
            </Flex>
          ))
        : null}
    </>
  );
}

function TodoList() {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems />
    </>
  );
}

export default TodoList;
