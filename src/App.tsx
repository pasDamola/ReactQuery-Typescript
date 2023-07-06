/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import TopBar from "./components/TopBar";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";

const queryClient = new QueryClient({});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ChakraProvider theme={theme}>
        <Box maxWidth="8xl" margin="auto" p={5}>
          <TopBar />
          <TodoList />
          <TodoAdd />
        </Box>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
