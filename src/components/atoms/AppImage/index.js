import React from "react";
import Screen from "../../../../public/images/travel_anywhere_screenshot.png";
import styles from "./index.module.scss";

const AppImage = () => {
    return (
        <div className={styles.container}>
            <img src={Screen}></img>
        </div>
    )
};

export default AppImage;