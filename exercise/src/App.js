import logo from './logo.svg';
import './App.css';
import Student from "./component/lesson3/Student";
import {Counter1} from "./component/lesson4/Counter1";
import {Counter2} from "./component/lesson4/Counter2";
import TodoApp from "./component/lesson3/TodoApp";
import Alert from "./component/lesson3/Alert";
import Calculator from "./component/lesson3/Calculator";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import {ContactForm} from "./component/lesson5/ContactForm";
import {HealthDeclaration} from "./component/lesson5/HealthDeclaration";


function App() {
  return (
    <>
        {/*<Student />*/}
        {/*<TodoApp />*/}
        {/*<Counter1 />*/}
        {/*<Counter2 />*/}
        {/*<Alert text="Warning! This resource is not exist."/>*/}
      {/*<Calculator />*/}
      {/*  <ContactForm />*/}
        <HealthDeclaration />
        <ToastContainer />
    </>
  );
}

export default App;
