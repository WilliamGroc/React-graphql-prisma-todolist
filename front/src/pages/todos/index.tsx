import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { GET_TODOS } from '../../gql/todo';
import { Todo } from '../../models';
import TodoItem from './todoItem';

function Todos() {
  const { loading, error, data, refetch } = useQuery<{ getTodos: Todo[] }>(
    GET_TODOS
  );

  useEffect(() => {
    refetch();
  }, []);

  if (loading) return <div>Loading todos ...</div>;
  if (error) return <div>Error when loading todos {error.message}</div>;

  return (
    <div>
      {data?.getTodos.map((item) => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </div>
  );
}

export default Todos;
