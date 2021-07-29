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

    return (
        <div className="maintenance-display-page">
        {/*<h1>Maintenance</h1>*/}
        {maintenance.map((_, i) => (
            <MaintenanceDisplay {...maintenance[maintenance.length - 1 - i]} />
        ))}
    </div>
        // <MaintenanceDisplay/>
    )
}

export default MaintenanceDisplayPage