import {useEffect, useState} from "react";
import * as customerServices from "../services/CustomerServices";
import {NavLink} from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import {deleteCustomer} from "../services/CustomerServices";
import React from "react";

export function Customers(){
    const [customers, setCustomers] = useState([]);
    const [delCustomer, setDelCustomer] = useState({id: 0, name: ""});

    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    useEffect(() => {
            getCustomers();
        }
    );

    const getCustomers = async () => {
        const list = await customerServices.getCustomers();
        setCustomers(list);
    };

    const deleteCustomer = async () => {
        await customerServices.deleteCustomer(delCustomer.id);
        hideModal();
        getCustomers();
    }

    return(
        <>
            <div className="container">
                <h2>List of Customer</h2>
                <table>
                    <tr>
                        <th>Full name</th>
                        <th>Date of Birth</th>
                        <th>Gender</th>
                        <th>ID Card</th>
                        <th>Phone number</th>
                        <th>Email</th>
                        <th>Type of Customer</th>
                        <th>Address</th>
                    </tr>
                    {
                        customers.map((customer) => {
                            return(
                                <>
                                    <tr key={customer.id}>
                                        <td>{customer.name}</td>
                                        <td>{customer.gender === 1 ? 'Male' : 'Female'}</td>
                                        <td>{customer.birthday}</td>
                                        <td>{customer.idCard}</td>
                                        <td>{customer.phone}</td>
                                        <td>{customer.email}</td>
                                        <td>{customer.level}</td>
                                        <td>{customer.address}</td>
                                        <td>
                                            <span>
                                                <button onClick={() => {
                                                    showModal();
                                                    setDelCustomer({id: customer.id, name: customer.name});
                                                }} className="btn btn-warning">Delete</button>

                                            </span>
                                            <span>
                                                <button type="button" className="btn btn-success">
                                                <NavLink to={`/customers/update/${customer.id}`}
                                                         style={{textDecoration: "none", color: "black"}}>Edit</NavLink>
                                            </button>
                                            </span>
                                        </td>
                                    </tr>
                                    <Modal show={isOpen} onHide={hideModal}>
                                        <Modal.Header>
                                            <Modal.Title>Delete Customer!</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>Do you want to delete {delCustomer.name}?</Modal.Body>
                                        <Modal.Footer>
                                            <button onClick={(hideModal)} className="btn btn-danger">No</button>
                                            <button onClick={() => {deleteCustomer(customer.id)}} className="btn btn-danger">Yes</button>
                                        </Modal.Footer>
                                    </Modal>
                                </>
                            )
                        })
                    }

                </table>
            </div>
        </>
    )
}