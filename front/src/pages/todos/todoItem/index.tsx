import { useMutation } from '@apollo/client';
import { DONE_TODO } from '../../../gql/todo';
import { Todo } from '../../../models';

type Props = {
  todo: Todo;
};

function TodoItem({ todo }: Props) {
  const [doneTodo] = useMutation(DONE_TODO);

  const setDone = () => {
    doneTodo({ variables: { input: { id: todo.id } } });
  };

  return (
    <li>
      {todo.title}{' '}
      <input type="checkbox" checked={todo.done} onChange={setDone} />
    </li>
  );
}

export default TodoItem;
