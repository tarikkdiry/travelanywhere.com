import React from "react";
import Screen from "../../../assets/travel_anywhere_screen.png";
import styles from "./index.module.scss";

const AppImage = () => {
    return (
        <div className={styles.container}>
            <img src={Screen}></img>
        </div>
    )
};

export default AppImage;