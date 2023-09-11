import {useEffect, useState} from "react";
import * as facilityService from "../services/FacilityService";
import {NavLink} from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

export function Facilities() {
    const [facilities, setFacilities] = useState([]);
    const [delFacility, setDelFacility] = useState({id: 0, name: ""});
    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        getFacilities();
    }, []);

    const getFacilities = async () => {
        const list = await facilityService.getFacilities();
        setFacilities(list);
    };

    const deleteFacility = async () => {
        await facilityService.deleteFacility(delFacility.id);
        hideModal();
        getFacilities();
    }

    return (
        <>
            <div className="container">
                <div className="facilities">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            facilities.map((facility) => {
                                return (
                                    <>
                                        <div className="col">
                                            <div className="card" key={facility.id}>
                                                <div className="card-body">
                                                    <h5 className="card-title">{facility.name}</h5>
                                                    <p className="card-text">{facility.square} m2</p>
                                                    <p className="card-text">{facility.cost} VND</p>
                                                    <p className="card-text">{facility.people} people</p>
                                                    <p className="card-text">{facility.type}</p>
                                                    <span>
                                                        <button onClick={() => {
                                                            showModal();
                                                            setDelFacility({id : facility.id, name: facility.name});
                                                        }} className="btn btn-warning">Delete</button>
                                                    </span>
                                                    <span>
                                                        <button type="button" className="btn btn-success" >
                                                            <NavLink to={`/facilities/update/${facility.id}`} style={{textDecoration: "none", color: "black"}}>Edit</NavLink>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header>
                    <Modal.Title>Delete Facility!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want to delete {delFacility.name}?</Modal.Body>
                <Modal.Footer>
                    <button onClick={(hideModal)} className="btn btn-danger">No</button>
                    <button onClick={() => {deleteFacility()}} className="btn btn-danger">Yes</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}