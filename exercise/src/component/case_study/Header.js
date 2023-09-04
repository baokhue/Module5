import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import {Facilities} from "./facilities/Facilities";
import {FacilitiesCreate} from "./facilities/FacilitiesCreate";
import {Employees} from "./employees/Employees";
import {Customers} from "./customer/Customers";
import {NotFound} from "./NotFound";
import {useState} from "react";
import {EmployeeCreate} from "./employees/EmployeeCreate";
import {CustomerCreate} from "./customer/CustomerCreate";

export function Header(){
    const [isOpenFacilities, setIsOpenFacilities] = useState(false);
    const [isOpenEmployees, setIsOpenEmployees] = useState(false);
    const [isOpenCustomers, setIsOpenCustomers] = useState(false);

    return (
        <>
            <BrowserRouter>
                <div className="container">
                    <table>
                        <tr>
                            <td>
                                <div style={{display: "inline-block"}}>
                                    <button onClick={() => setIsOpenFacilities(!isOpenFacilities)}>Facilities</button>
                                    {isOpenFacilities && (
                                        <div>
                                            <p><NavLink to='/facilities' >List</NavLink></p>
                                            <p><NavLink to='/facilities/create'>Create</NavLink></p>
                                        </div>
                                    )}
                                </div>
                            </td>
                            <td>
                                <div>
                                    <button onClick={() => setIsOpenEmployees(!isOpenEmployees)}>Employees</button>
                                    {isOpenEmployees && (
                                        <div>
                                            <p><NavLink to='/employees' >List</NavLink></p>
                                            <p><NavLink to='/employees/create'>Create</NavLink></p>
                                        </div>
                                    )}
                                </div>
                            </td>
                            <td>
                                <div>
                                    <button onClick={() => setIsOpenCustomers(!isOpenCustomers)}>Customers</button>
                                    {isOpenCustomers && (
                                        <div>
                                            <p><NavLink to='/customers' >List</NavLink></p>
                                            <p><NavLink to='/customers/create'>Create</NavLink></p>
                                        </div>
                                    )}
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                
                <Routes>
                    <Route path="/facilities" element={<Facilities />}></Route>
                    <Route path="/facilities/create" element={<FacilitiesCreate />}></Route>
                    <Route path="/employees" element={<Employees />}></Route>
                    <Route path="/employees/create" element={<EmployeeCreate />}></Route>
                    <Route path="/customers/" element={<Customers />}></Route>
                    <Route path="/customers/create" element={<CustomerCreate />}></Route>

                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}