import logo from './logo.svg';
import './App.css';
import Student from "./component/lesson3/Student";
import {Counter1} from "./component/lesson4/Counter1";
import {Counter2} from "./component/lesson4/hooks/Counter2";
import TodoApp from "./component/lesson3/TodoApp";

function App() {
  return (
    <>
        <Student />
        <TodoApp />
        <Counter1 />
        <Counter2 />

    </>
  );
}

export default App;
