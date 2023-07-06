import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import { Todo } from "../services/api";
function TodoListItems() {
  return (
    <>
      {[].map((todo: Todo) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox onClick={() => (todo.done = !todo.done)} />
          <Input mx={2} value={todo.text} />
          <Button>Delete</Button>
        </Flex>
      ))}
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
