import { gql } from "apollo-server";

export const todoSchema = gql`
  type Todo {
    id: ID
    title: String
    done: Boolean
    description: String
    createdAt: String
  }

  input TodoInput {
    id: ID
    title: String
    done: Boolean
    description: String
    createdAt: String
  }

  type TodoPayload {
    todo: Todo
  }

  type Query {
    getTodos: [Todo]
  }

  type Mutation {
    addTodo(input: TodoInput): TodoPayload
    doneTodo(input: TodoInput): TodoPayload
    updateTodo(input: TodoInput): TodoPayload
  }
`;