import { useEffect, useState } from "react";
import MaintenanceDisplay from "../../components/maintenance_display/MaintenanceDisplay";
import './styles.scss';
import API from "../../helpers/api";

export const MaintenanceDisplayPage = (props) => {

    const [maintenances, setMaintenances] = useState ([])

    useEffect(() => {
        API.request(`houses/${props.id}/maintenances`)
        .then(res => setMaintenances(res.data))
    },[props.id])

    return (
        <div className="maintenance-display-page">
            <h1 className="maintenance-display-title">Maintenance</h1>
            <a className="new-request-button" href={"/new_maintenance_request"}>New request</a>


            {maintenances.map((_, i) => (
                <MaintenanceDisplay key={i} {...maintenances[maintenances.length - 1 - i]} house_id={props.id}/>
            ))}


        </div>
    )
}

export default MaintenanceDisplayPage