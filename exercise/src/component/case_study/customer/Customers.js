import {useEffect, useState} from "react";
import * as customerServices from "../services/CustomerServices";
import {NavLink} from "react-router-dom";

export function Customers(){
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
            getCustomers();
        }
    );

    const getCustomers = async () => {
        const list = await customerServices.getCustomers();
        setCustomers(list);
    };

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
                                            <button>Delete</button>
                                            <button type="button" class="btn btn-success">
                                                <NavLink to={`/customers/update/${customer.id}`} style={{textDecoration: "none", color: "black"}}>Edit</NavLink>
                                            </button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    }

                </table>
            </div>
        </>
    )
}