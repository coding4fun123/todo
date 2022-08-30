import './App.css';
import { ShowToDos } from './components/ShowToDos';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CreateTodo } from './components/CreateTodo';
import { UpdateTodo } from './components/UpdateTodo';



function App() {
  return (
    <div className="App">
      <h1>Welcome! What's on today's agenda?</h1>
      <BrowserRouter>
      <Routes>
      <Route exact path ="/" element = {<ShowToDos/>} />
      <Route exact path = "/CreateTodo" element = {<CreateTodo/>} />
      <Route exact path = "/UpdateTodo" element = {<UpdateTodo/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;