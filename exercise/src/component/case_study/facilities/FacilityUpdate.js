import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import * as facilityServices from "../services/FacilityService";

export function FacilityUpdate(){
    const [facility, setFacility] = useState();
    const param = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getFacility();
    }, []);

    const getFacility = async () => {
        const facilityUpdate = await facilityServices.getFacility(param.id);
        setFacility(facilityUpdate);
    }

    const editFacility = async (id, value) => {
        await facilityServices.editFacility(id, value);
        navigate("/facilities");
    }

    return (
        <>
            <div className="container">
                {facility ?
                    <Formik
                        initialValues={
                            {
                                name: facility.name,
                                square: facility.square,
                                cost: facility.cost,
                                people: facility.people,
                                type: facility.type,
                            }
                        }
                        onSubmit={(values, {setSubmitting}) => {
                            editFacility(param.id, values);
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

                            <button type="submit">Save!</button>
                        </Form>
                    </Formik>
                : ""}
            </div>
        </>
    )
}