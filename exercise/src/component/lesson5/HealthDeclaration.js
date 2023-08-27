import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";

export function HealthDeclaration() {
    return (
        <>
            <div className="container">
                <h1>Library</h1>
                <Formik
                    initialValues={
                        {
                            fullName: "",
                            idCard: "",
                            birthday: 0,
                            gender: '0',
                            nationality: "",
                            company: "",
                            department: "",
                            healthCard: "",
                            city: "",
                            district: "",
                            ward: "",
                            street: "",
                            phone: "",
                            email: "",
                            symptom: '1',
                            contact: '1'
                        }
                    }
                    validationSchema={
                        Yup.object({
                            fullName: Yup.string().required("Required!"),
                            idCard: Yup.string().required("Required!"),
                            birthday: Yup.number().required("Required!").min(1900, "Year of birth must be greater than 1900!"),
                            nationality: Yup.string().required("Required!"),
                            city: Yup.string().required("Required!"),
                            district: Yup.string().required("Required!"),
                            ward: Yup.string().required("Required!"),
                            street: Yup.string().required("Required!"),
                            phone: Yup.string().required("Required!"),
                            email: Yup.string().required("Required!").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/, "Invalid email address!")
                        })
                    }
                    onSubmit={(values, {setSubmitting}) =>
                        {
                            console.log(values);
                            setSubmitting(false);
                            toast.success("Declare Successfully!");
                        }
                    }>
                <Form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Full name</label>
                        <Field name="fullName" type="text" className="form-control" />
                        <ErrorMessage name="fullName" className="form-err" component='span'></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">ID Card</label>
                        <Field name="idCard" type="text" className="form-control"/>
                        <ErrorMessage name="idCard" className="form-err" component='span'></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Year of birth</label>
                        <Field name="birthday" type="number" className="form-control"/>
                        <ErrorMessage name="birthday" className="form-err" component='span'></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <div className="form-check form-check-inline">
                            <Field name="gender" className="form-check-input" type="radio"
                                   id="inlineRadio1"
                                   value="1"/>
                            <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field name="gender" className="form-check-input" type="radio"
                                   id="inlineRadio2"
                                   value="0"/>
                            <label className="form-check-label" htmlFor="inlineRadio2">FeMale</label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Nationality</label>
                        <Field name="nationality" type="text" className="form-control"/>
                        <ErrorMessage name="nationality" className="form-err" component='span'></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Company</label>
                        <Field name="company" type="text" className="form-control"/>
                        <ErrorMessage name="company" className="form-err" component='span'></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Department</label>
                        <Field name="department" type="text" className="form-control"/>
                        <ErrorMessage name="department" className="form-err" component='span'></ErrorMessage>
                    </div>
                    <div className="mb-3 form-check">
                        <Field name="healthCard" type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">I have the health insurance card</label>
                    </div>
                    <br/>
                    <h2>Vietnamese Address</h2>
                    <br/>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">City</label>
                        <Field name="city" type="text" className="form-control"/>
                        <ErrorMessage name="city" className="form-err" component='span'></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">District</label>
                        <Field name="district" type="text" className="form-control"/>
                        <ErrorMessage name="district" className="form-err" component='span'></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Ward</label>
                        <Field name="ward" type="text" className="form-control"/>
                        <ErrorMessage name="ward" className="form-err" component='span'></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Street</label>
                        <Field name="street" type="text" className="form-control"/>
                        <ErrorMessage name="street" className="form-err" component='span'></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                        <Field name="phone" type="text" className="form-control"/>
                        <ErrorMessage name="phone" className="form-err" component='span'></ErrorMessage>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                        <Field name="email" type="text" className="form-control"/>
                        <ErrorMessage name="email" className="form-err" component='span'></ErrorMessage>
                    </div>
                    <br/>
                    <h2>During the las 14 days, have you been to which countries or territories (list many countries will be accepted)?</h2>
                    <textarea name="country" className="form-control"></textarea>
                    <br/>
                    <h2>During the last 14 days, Did you have any following symptoms?</h2>
                    <div className="mb-3">
                        <div className="form-check">
                            <Field name="symptom" className="form-check-input" type="checkbox" value="1"/>
                            <label className="form-check-label">Fever</label>
                        </div>
                        <div className="form-check">
                            <Field name="symptom" className="form-check-input" type="checkbox" value="2"/>
                            <label className="form-check-label">Cough</label>
                        </div>
                        <div className="form-check">
                            <Field name="symptom" className="form-check-input" type="checkbox" value="3"/>
                            <label className="form-check-label">Shortness of breath</label>
                        </div>
                        <div className="form-check">
                            <Field name="symptom" className="form-check-input" type="checkbox" value="4"/>
                            <label className="form-check-label">Pneumonia</label>
                        </div>
                        <div className="form-check">
                            <Field name="symptom" className="form-check-input" type="checkbox" value="5"/>
                            <label className="form-check-label">Sore throat</label>
                        </div>
                        <div className="form-check">
                            <Field name="symptom" className="form-check-input" type="checkbox" value="6"/>
                            <label className="form-check-label">Tired</label>
                        </div>
                    </div>
                    <br/>
                    <h2>During the last 14 days, what did you contact with?</h2>
                    <div className="mb-3">
                        <div className="form-check">
                            <Field name="contact" className="form-check-input" type="checkbox" value="1"/>
                            <label className="form-check-label">People who are patient or suspected to have COVID.</label>
                        </div>
                        <div className="form-check">
                            <Field name="contact" className="form-check-input" type="checkbox" value="2"/>
                            <label className="form-check-label">People from countries with COVID</label>
                        </div>
                        <div className="form-check">
                            <Field name="contact" className="form-check-input" type="checkbox" value="3"/>
                            <label className="form-check-label">People with symptoms (fever, cough, shortness of breath, pneumonia)</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
                </Formik>
            </div>
        </>
    )
}