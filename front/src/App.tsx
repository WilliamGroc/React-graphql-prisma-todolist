import { Route, Routes } from 'react-router';
import styled from 'styled-components';
import { Header } from './components';
import { NewTodo, Todos } from './pages';

const RouterLayer = styled.div`
  padding: 12px;
`;

function App() {
  return (
    <div>
      <Header />
      <RouterLayer>
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/new" element={<NewTodo />} />
        </Routes>
      </RouterLayer>
    </div>
  );
}

export default App;
