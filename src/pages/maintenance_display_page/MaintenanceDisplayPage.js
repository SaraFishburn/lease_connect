import { useEffect, useState } from "react";
import MaintenanceDisplay from "../../components/maintenance_display/MaintenanceDisplay";
import './styles.scss';
import API from "../../helpers/api";
import CardContainer from "../../components/card_container/CardContainer";

export const MaintenanceDisplayPage = (props) => {

    const [maintenance, setMaintenanceRequests] = useState ([])

    useEffect(() => {
        console.log(props)

        API.request('/maintenances')
        .then(res => setMaintenanceRequests(res.data))
    },[props])

    console.log("Down")
    console.log(maintenance)
    console.log("Up")

    return (
        <div className="maintenance-display-page">
            <h1 className="maintenance-display-title">Maintenance</h1>
            <a className="new-request-button" href={"/new_maintenance_request"}>New request</a>


            {maintenance.map((_, i) => (
                <MaintenanceDisplay {...maintenance[maintenance.length - 1 - i]} />
            ))}


        </div>
        // <MaintenanceDisplay/>
    )
}

export default MaintenanceDisplayPage