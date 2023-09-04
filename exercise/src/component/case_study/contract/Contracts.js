import {useEffect, useState} from "react";
import * as contractServices from "../services/ContractServices";
export function Contracts() {
    const [contracts, setContracts] = useState([]);

    useEffect(() => {
        getContracts();
    });

    const getContracts = async () => {
        const list = await contractServices.getContracts();
        setContracts(list);
    }
    return (
        <>
            <div className="container">
                <table>
                    <tr>
                        <th>Code</th>
                        <th>Date of starting</th>
                        <th>Date of terminate</th>
                        <th>Deposit</th>
                        <th>Total</th>
                    </tr>
                    {
                        contracts.map((cont) => {
                            return (
                                <>
                                    <tr key={cont.id}>
                                        <td>{cont.code}</td>
                                        <td>{cont.startDate}</td>
                                        <td>{cont.endDate}</td>
                                        <td>{cont.deposit} VND</td>
                                        <td>{cont.total} VND</td>
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