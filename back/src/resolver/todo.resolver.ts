import { todos } from "../data/mock";

type Todo = {
  id: string,
  title: string,
  done: boolean,
  description: string,
  createdAt: string
}

type Input = {
  input: Todo
}

export const todoResolver = {
  Query: {
    getTodos: () => todos
  },
  Mutation: {
    addTodo: (_: any, { input }: Input) => {
      const todo = { ...input, id: Math.random().toString(), createdAt: Date(), done: false }
      console.log(input)
      todos.push(todo);
      return { todo }
    },
    doneTodo: (_: any, { input }: Input) => {
      const todo = todos.find(item => item.id === input.id)

      if (todo) {
        todo.done = true;
        return { todo }
      }
      throw new Error('Todo don\'t exist')
    },
    updateTodo: (_: any, { input }: Input) => {
      const todo = todos.find(item => item.id === input.id);

      if (todo) {
        todo.title = input.title;
        todo.description = input.description;
        return { todo }
      }

      throw new Error('Todo don\'t exist')
    },
  }
}