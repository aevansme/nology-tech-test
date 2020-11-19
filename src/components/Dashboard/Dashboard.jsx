import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Dashboard.module.scss";
import { Link } from "@reach/router";

const Dashboard = () => {
    return (
        <div className={styles.Dashboard}>
            {/* here we can see weathr and drill into the other apps */}
            <FontAwesomeIcon icon="futbol" />
            <Link to="WeatherList">
                <FontAwesomeIcon icon="cloud" />
            </Link>
            <FontAwesomeIcon icon="search" />
        </div>
    )
}
export default Dashboard;