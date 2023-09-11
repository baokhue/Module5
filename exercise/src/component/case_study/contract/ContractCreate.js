import {useNavigate} from "react-router-dom";
import * as contractServices from "../services/ContractServices";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

export function ContractCreate() {
    const navigate = useNavigate();

    const addContract = async (value) => {
        await contractServices.addContract(value);
        navigate("/contract");
        toast.success("Successfully!");
    };

    return(
        <>
            <div className="container">
                <Formik
                    initialValues={
                        {
                            code: 0,
                            startDate: "",
                            endDate: "",
                            deposit: 0,
                            total: 0
                        }
                    }

                    validationSchema={
                        Yup.object({
                            deposit: Yup.number().positive("This field must be a positive integer!"),
                        })
                    }

                    onSubmit={(values, {setSubmitting}) => {
                        addContract(values);
                        setSubmitting(false);
                        }
                    }>
                    <Form>
                        <div className="mb-3">
                            <label className="form-label">Code: </label>
                            <Field name="code" type="number" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Date of starting: </label>
                            <Field name="startDate" type="date" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Date of termination: </label>
                            <Field name="endDate" type="date" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Deposit: </label>
                            <Field name="deposit" type="number" className="form-control" />
                            <ErrorMessage name="deposit" className="form-err" component='span'></ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Total: </label>
                            <Field name="total" type="number" className="form-control" />
                        </div>
                        <button type="submit" class="btn btn-info">Submit</button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}