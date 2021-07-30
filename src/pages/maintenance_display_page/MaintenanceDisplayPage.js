import { useEffect, useState } from "react";
import MaintenanceDisplay from "../../components/maintenance_display/MaintenanceDisplay";
import './styles.scss';
import API from "../../helpers/api";
import CardContainer from "../../components/card_container/CardContainer";

export const MaintenanceDisplayPage = (props) => {

    const [maintenances, setMaintenances] = useState ([])

    useEffect(() => {
        API.request(`houses/${props.id}/maintenances`)
        .then(res => setMaintenances(res.data))
    },[])

    console.log("Down")
    console.log(maintenances)
    console.log("Up")

    return (
        <div className="maintenance-display-page">
            <h1 className="maintenance-display-title">Maintenance</h1>
            <a className="new-request-button" href={"/new_maintenance_request"}>New request</a>


            {maintenances.map((_, i) => (
                <MaintenanceDisplay {...maintenances[maintenances.length - 1 - i]} />
            ))}


        </div>
        // <MaintenanceDisplay/>
    )
}

export default MaintenanceDisplayPage