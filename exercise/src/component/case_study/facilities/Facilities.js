import {useEffect, useState} from "react";
import * as facilityService from "../services/facility/FacilityService";

export function Facilities() {
    const [facilities, setFacilities] = useState([]);

    useEffect(() => {
        getFacilities();
    }, []);

    const getFacilities = async () => {
        const list = await facilityService.getFacilities();
        setFacilities(list);
    };
    return (
        <>
            {
                facilities.map((facility) => {
                    return (
                        <>
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                <div className="col">
                                    <div className="card">
                                        <img src="..." className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{facility.facilityName}</h5>
                                            <p className="card-text">{facility.square}</p>
                                            <p className="card-text">{facility.facilityCost}</p>
                                            <p className="card-text">{facility.people}</p>
                                            <p className="card-text">{facility.typeOfRent}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}