import {Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import {useEffect, useState} from "react";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import * as bookService from "../lesson6/services/bookService";
import {BookUpdate} from "./BookUpdate";

export function LibraryApp() {
    const [bookList, setBookList] = useState([]);

    useEffect( () => {
        getBooks();
    }, []);

    const getBooks = async () => {
        const result = await bookService.getBooks();
        setBookList(result);
    }

    const addBook = async (value) => {
        await bookService.addBook(value);
        toast.success("Add new book successfully!");
    }
    return (
        <>
            <div className="container">
                <h1>Library</h1>
                <Formik
                    initialValues={
                        {
                            title: "",
                            quantity: 0,
                        }
                    }
                    onSubmit={(values, {setSubmitting}) => {
                            addBook(values);
                            setSubmitting(false);
                        }
                    }
                    >
                    <Form>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <Field name="title" type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Quantity</label>
                            <Field name="quantity" type="number" className="form-control" />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Form>
                </Formik>
                <br/>

                    <table>
                        <tbody>
                        <tr>
                            <th>Title</th>
                            <th>Quantity</th>
                            <th colSpan={2}>Actions</th>
                        </tr>
                        {bookList.map((book, id) => {
                            return (
                                <>
                                    <tr key={id}>
                                        <td>{book.title}</td>
                                        <td>{book.quantity}</td>
                                        <td>
                                            <button name="edit">
                                                <NavLink to={`/update/${book.id}`}>Edit </NavLink>
                                            </button>
                                        </td>
                                        <td>
                                            <button name="delete">Delete</button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })}
                        </tbody>
                    </table>

            </div>
        </>
    )
}