import React from "react";
import Title from "../../atoms/Title/index";
import Description from "../../atoms/Description/index";
import styles from "./index.module.scss";

const Intro = () => {
    return (
        <div className={styles.container}>
            <Title title="Travel Anywhere"></Title>
            <Description description="Elevate your travel game."></Description>
        </div>
    )
}

export default Intro;