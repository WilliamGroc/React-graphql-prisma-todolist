import { mergeTypeDefs } from '@graphql-tools/merge';
import { todoSchema } from './todo.schema';

export default mergeTypeDefs([todoSchema])