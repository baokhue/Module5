import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import {Facilities} from "./facilities/Facilities";
import {FacilitiesCreate} from "./facilities/FacilitiesCreate";
import {Employees} from "./employees/Employees";
import {Customers} from "./customer/Customers";
import {NotFound} from "./NotFound";
import {useState} from "react";
import {EmployeeCreate} from "./employees/EmployeeCreate";
import {CustomerCreate} from "./customer/CustomerCreate";
import {Contracts} from "./contract/Contracts";
import {ContractCreate} from "./contract/ContractCreate";
import {FacilityUpdate} from "./facilities/FacilityUpdate";
import {CustomerUpdate} from "./customer/CustomerUpdate";

export function Header(){
    // const [isOpenFacilities, setIsOpenFacilities] = useState(false);
    // const [isOpenEmployees, setIsOpenEmployees] = useState(false);
    // const [isOpenCustomers, setIsOpenCustomers] = useState(false);
    // const [isOpenContracts, setIsOpenContracts] = useState(false);

    return (
        <>
            <BrowserRouter>
                <div className="container-fluid">
                    <div className="menu-wrap">
                        <ul className="menu">
                            <li className="menu-item">
                                <h6>Facilities</h6>
                                <ul className="drop-menu">
                                    <li className="drop-menu-item">
                                        <NavLink to='/facilities' >List</NavLink>
                                    </li>
                                    <li className="drop-menu-item">
                                        <NavLink to='/facilities/create'>Create</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <h6>Customers</h6>
                                <ul className="drop-menu">
                                    <li className="drop-menu-item">
                                        <NavLink to='/customers' >List</NavLink>
                                    </li>
                                    <li className="drop-menu-item">
                                        <NavLink to='/customers/create'>Create</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <h6>Contracts</h6>
                                <ul className="drop-menu">
                                    <li className="drop-menu-item">
                                        <NavLink to='/contracts' >List</NavLink>
                                    </li>
                                    <li className="drop-menu-item">
                                        <NavLink to='/contracts/create'>Create</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <h6>Employees</h6>
                                <ul className="drop-menu">
                                    <li className="drop-menu-item">
                                        <NavLink to='/employees' >List</NavLink>
                                    </li>
                                    <li className="drop-menu-item">
                                        <NavLink to='/employees/create'>Create</NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <Routes>
                    <Route path="/facilities" element={<Facilities />}></Route>
                    <Route path="/facilities/create" element={<FacilitiesCreate />}></Route>
                    <Route path="/facilities/update/:id" element={<FacilityUpdate />}></Route>
                    <Route path="/employees" element={<Employees />}></Route>
                    <Route path="/employees/create" element={<EmployeeCreate />}></Route>
                    <Route path="/customers/" element={<Customers />}></Route>
                    <Route path="/customers/create" element={<CustomerCreate />}></Route>
                    <Route path="/customers/update/:id" element={<CustomerUpdate />}></Route>
                    <Route path="/contracts/" element={<Contracts />}></Route>
                    <Route path="/contracts/create" element={<ContractCreate />}></Route>

                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}