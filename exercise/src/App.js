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
import {Library} from "./component/lesson5/Library";
import {TodoList} from "./component/lesson6/TodoList";
import {LibraryApp} from "./component/lesson6/LibraryApp";

import {Facilities} from "./component/case_study/facilities/Facilities";
import {Employees} from "./component/case_study/employees/Employees";
import {Customers} from "./component/case_study/customer/Customers";
import {NotFound} from "./component/case_study/NotFound";
import {useState} from "react";
import {FacilitiesCreate} from "./component/case_study/facilities/FacilitiesCreate";
import {Header} from "./component/case_study/Header";
import {Footer} from "./component/case_study/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {BookUpdate} from "./component/lesson6/BookUpdate";
import {Users} from "./component/lesson7/Users";
import {UsersList} from "./component/lesson7/UsersList";


function App() {


  return (
    <>
        <Header />
        <Footer />
        <ToastContainer />
    </>
  );
}

export default App;
