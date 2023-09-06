import {useNavigate, useParams} from "react-router-dom";
import * as bookServices from "../lesson6/services/bookService";
import {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";

export function BookUpdate(){
    const [book, setBook] = useState();
    const param = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getBook();
    }, []);
    const getBook = async () => {
      const bookUpdate = await bookServices.getBook(param.id);
      setBook(bookUpdate);
    }

    const editBook = async (id, value) => {
        await bookServices.editBook(id, value);
        navigate("/");
    }

    return (
        <>
            <div className="container">
                {
                    book ?
                        <Formik
                            initialValues={
                                {
                                    title : book.title,
                                    quantity: book.quantity
                                }
                            }
                            onSubmit={(values, {setSubmitting}) => {
                                editBook(param.id, values);
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

                            <button type="submit" className="btn btn-primary">Save</button>
                        </Form>
                    </Formik> : ""
                }

            </div>
        </>
    )
}