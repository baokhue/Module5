import {ErrorMessage, Field, Form, Formik} from "formik";
import * as facilityServices from "../services/FacilityService";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import * as Yup from "yup";

export function FacilitiesCreate() {
    const navigate = useNavigate();
    const addFacility = async (value) => {
        await facilityServices.addFacility(value);
        navigate("/students");
        toast.success("Successfully!");
    };

    return (
        <>
            <div className="container">
                <Formik
                    initialValues={
                        {
                            name: "",
                            square: 0,
                            cost: 0,
                            people: 0,
                            type: "",
                        }
                    }

                    validationSchema={
                        Yup.object({
                            name: Yup.string().required("This field is not allow to be empty!")
                                .matches(/^\\D$/, "This field is invalid!"),
                            square: Yup.number().required("This field is not allow to be empty!")
                                .positive("This field must be a positive integer!"),
                            cost: Yup.number().required("This field is not allow to be empty!"),
                            people: Yup.number().required("This field is not allow to be empty!"),
                            type: Yup.string().required("This field is not allow to be empty!"),
                        })
                    }

                    onSubmit={(values, {setSubmitting}) => {
                        addFacility(values);
                        setSubmitting(false);
                    }
                    }>
                    <Form>
                        <div className="mb-3">
                            <label className="form-label">Name of facility: </label>
                            <Field name="name" type="text" className="form-control" />
                            <ErrorMessage name="name" className="form-err" component='span'></ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Area square: </label>
                            <Field name="square" type="number" className="form-control" />
                            <ErrorMessage name="square" className="form-err" component='span'></ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Cost: </label>
                            <Field name="cost" type="number" className="form-control" />
                            <ErrorMessage name="cost" className="form-err" component='span'></ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Number of people: </label>
                            <Field name="people" type="number" className="form-control" />
                            <ErrorMessage name="people" className="form-err" component='span'></ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Type of Rent: </label>
                            <Field name="type" type="text" className="form-control" />
                            <ErrorMessage name="type" className="form-err" component='span'></ErrorMessage>
                        </div>

                        <button type="submit" class="btn btn-info">Add new!</button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}