import {Field, Form, Formik} from "formik";
import * as facilityServices from "../services/FacilityService";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

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
                    onSubmit={(values, {setSubmitting}) => {
                        addFacility(values);
                        setSubmitting(false);
                    }
                    }>
                    <Form>
                        <div className="mb-3">
                            <label className="form-label">Name of facility: </label>
                            <Field name="name" type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Area square: </label>
                            <Field name="square" type="number" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Cost: </label>
                            <Field name="cost" type="number" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Number of people: </label>
                            <Field name="people" type="number" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Type of Rent: </label>
                            <Field name="type" type="text" className="form-control" />
                        </div>

                        <button type="submit">Add new!</button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}