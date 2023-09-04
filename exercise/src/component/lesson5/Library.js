import {Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import {useState} from "react";
import {useParams} from "react-router-dom";

export function Library() {
    const [bookList, setBookList] = useState([]);
    const [books, setBooks] = useState({title: "", quantity: 0});
    const param = useParams();

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
                    onSubmit={(values) => {
                        console.log(values)
                        setBookList([...bookList, values]);
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
                        {bookList.map((book, index) => {
                            return (
                                <>
                                    <tr key={index}>
                                        <td>{book.title}</td>
                                        <td>{book.quantity}</td>
                                        <td>
                                            <button name="edit">Edit</button>
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