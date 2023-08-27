import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";

export function ContactForm() {

    return(
        <>
            <div className="container">
                <h1>Contact Form</h1>
                <Formik
                    initialValues={
                        {
                            name: "",
                            email: "",
                            phone: "",
                            message: ""
                        }
                    }
                    validationSchema={
                        Yup.object({
                            name: Yup.string().required("Required!"),
                            email: Yup.string().required("Required!").matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "This field is not matched!"),
                            phone: Yup.string().required("Required!")

                        })
                    }
                    onSubmit={(values, {setSubmitting}) => {
                        console.log(values);
                        setTimeout( () => {
                            setSubmitting(false);
                            toast.success("Add contact successfully!!!")
                        }, 1000)
                }}
                >
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <Field name="name" type="text" className="form-control" />
                            <ErrorMessage name="name" className="form-err" component='span'></ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <Field name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <ErrorMessage name="email" className="form-err" component='span'></ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                            <Field name="phone" type="text" className="form-control" />
                            <ErrorMessage name="phone" className="form-err" component='span'></ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
                            <textarea name="message" className="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}