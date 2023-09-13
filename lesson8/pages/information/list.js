import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function InformationList({information}){
    return(
        <>
            <div className="container">
                <h2 style={{textAlign: "center"}}>Vietnam's COVID-19 Information</h2>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        information.map(info => {
                            return (
                                <>
                                    <tr key={info.id}>
                                        <td>{info.date}</td>
                                        <td>{info.confirmed}</td>
                                        <td>{info.active}</td>
                                        <td>{info.recovered}</td>
                                        <td>{info.deaths}</td>
                                    </tr>
                                </>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export const getStaticProps = async () => {
    const res = await axios.get("http://localhost:8080/information");
        return {
            props: {information: res.data}
        }
    }