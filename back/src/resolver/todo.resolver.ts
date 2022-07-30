import { PrismaClient, Todo } from "@prisma/client";
import { container } from "tsyringe";
import { TodoService } from "../service/todo.service";

type Input = {
  input: Todo
}

export const todoResolver = () => {
  const todoService = container.resolve(TodoService)

  return {
    Query: {
      getTodos: () => todoService.getTodos()
    },
    Mutation: {
      addTodo: async (_: any, { input }: Input) => {
        const todo = await todoService.addTodo(input)
        return { todo }
      },
      doneTodo: async (_: any, { input }: Input) => {
        const todo = await todoService.doneTodo(input)
        return { todo }
      },
      updateTodo: async (_: any, { input }: Input) => {
        const todo = await todoService.updateTodo(input)
        return { todo }
      },
    }
  }
}