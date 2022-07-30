import { PrismaClient, Todo } from "@prisma/client";
import { inject, injectable } from "tsyringe";

@injectable()
export class TodoService {
  constructor(@inject('database') private dao: PrismaClient) { }

  public getTodos(): Promise<Todo[]> {
    return this.dao.todo.findMany();
  }

  public addTodo(todo: Todo): Promise<Todo> {
    return this.dao.todo.create({ data: { ...todo, done: false } });
  }

  public doneTodo(todo: Todo): Promise<Todo> {
    return this.dao.todo.update({ data: { done: true }, where: { id: Number(todo.id) } })
  }

  public updateTodo(todo: Todo): Promise<Todo> {
    return this.dao.todo.update({ data: todo, where: { id: todo.id } })
  }
}