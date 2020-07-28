import React from "react";
import Title from "../../atoms/Title/index";
import Description from "../../atoms/Description/index";
import ScreenShot from "../../atoms/AppImage/index";
import styles from "./index.module.scss";

const Intro = () => {
    return (
        <div className={styles.container}>
            <Title title="Travel Anywhere"></Title>
            <Description description="Elevate your travel game."></Description>
            <div className={styles.screenShot}>
                <ScreenShot></ScreenShot>
            </div>
        </div>
    )
}

export default Intro;