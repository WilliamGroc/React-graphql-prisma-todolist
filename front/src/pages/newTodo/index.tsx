import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Todo } from '../../models';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import styled from 'styled-components';
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_TODO } from '../../gql/todo';
import { useNavigate } from 'react-router';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  width: 50%;

  & > input {
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;

const Input = styled.input`
  padding: 4px;
`;

const validationSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string(),
});

function NewTodo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Todo>({
    resolver: yupResolver(validationSchema),
  });
  const [addTodo] = useMutation<Todo>(CREATE_TODO);
  const navigator = useNavigate();

  const onSubmit = useCallback(async (data: Todo) => {
    try {
      await addTodo({ variables: { input: data } });
      navigator('/');
    } catch (e) {
      alert(`Error: ${(e as Error).message}`);
    }
  }, []);

  return (
    <Container>
      <h1>Todo creation</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('title')} />
        <Input {...register('description')} />
        <button type="submit">Create</button>
      </Form>
    </Container>
  );
}

export default NewTodo;
