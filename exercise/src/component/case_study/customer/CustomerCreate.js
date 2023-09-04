import {useNavigate} from "react-router-dom";
import * as customerServices from "../services/CustomerServices";
import {toast} from "react-toastify";
import {Field, Form, Formik} from "formik";

export function CustomerCreate() {
    const navigate = useNavigate();

    const addCustomer = async (value) => {
        await customerServices.addCustomer(value);
        navigate("/customers");
        toast.success("Successfully!");
    };

    return(
        <>
            <div className="container">
                <Formik
                    initialValues={
                        {
                            name: "",
                            birthday: "",
                            gender: '0',
                            idCard: "",
                            phone: "",
                            email: "",
                            level: '0',
                            address: "",
                        }
                    }
                    onSubmit={(values, {setSubmitting}) => {
                        addCustomer(values);
                        setSubmitting(false);
                        }
                    }
                >
                    <Form>
                        <div className="mb-3">
                            <label className="form-label">Full name</label>
                            <Field name="name" type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Date of birth</label>
                            <Field name="birthday" type="date" className="form-control" />
                        </div>
                        <div className='mb-3'>
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
                            <label className="form-label">ID Card: </label>
                            <Field name="idCard" type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone number: </label>
                            <Field name="phone" type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email: </label>
                            <Field name="email" type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <div className="form-check">
                                <Field name="level" className="form-check-input" type="radio"
                                       id="inlineRadio1"
                                       value="0" />
                                <label className="form-label">Member</label>
                            </div>
                            <div className="form-check">
                                <Field name="level" className="form-check-input" type="radio"
                                       id="inlineRadio1"
                                       value="1" />
                                <label className="form-label">Silver</label>
                            </div>
                            <div className="form-check">
                                <Field name="level" className="form-check-input" type="radio"
                                       id="inlineRadio1"
                                       value="2" />
                                <label className="form-label">Gold</label>
                            </div>
                            <div className="form-check">
                                <Field name="level" className="form-check-input" type="radio"
                                       id="inlineRadio1"
                                       value="3" />
                                <label className="form-label">Platinum</label>
                            </div>
                            <div className="form-check">
                                <Field name="level" className="form-check-input" type="radio"
                                       id="inlineRadio1"
                                       value="4" />
                                <label className="form-label">Diamond</label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Address</label>
                            <Field name="address" type="text" className="form-control" />
                        </div>

                        <button type="submit">Add new</button>
                    </Form>
                </Formik>

            </div>
        </>
    )
}