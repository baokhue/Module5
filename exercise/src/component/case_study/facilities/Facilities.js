import {useEffect, useState} from "react";
import * as facilityService from "../services/FacilityService";

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
            <div className="container">
                <div className="facilities">
                    <div className="card-group">
                        {
                            facilities.map((facility) => {
                                return (
                                    <>

                                        <div className="card" key={facility.id}>
                                            <div className="card-body">
                                                <h5 className="card-title">{facility.name}</h5>
                                                <p className="card-text">{facility.square} m2</p>
                                                <p className="card-text">{facility.cost} VND</p>
                                                <p className="card-text">{facility.people}</p>
                                                <p className="card-text">{facility.type}</p>
                                            </div>
                                        </div>

                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}