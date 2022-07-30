import { gql } from "@apollo/client";

const GET_TODOS = gql`
  query GetTodos {
    getTodos {
      id
      title
      description
      done
      createdAt
    }
  }
`;

const CREATE_TODO = gql`
  mutation Mutation($input: TodoInput) {
   addTodo(input: $input) {
    todo {
      id
    }
  }
}
`;

const DONE_TODO = gql`
  mutation Mutation($input: TodoInput) {
   doneTodo(input: $input) {
    todo {
      id
      done
    }
  }
}
`;

export { GET_TODOS, CREATE_TODO, DONE_TODO }