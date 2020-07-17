import React from "react";
import styles from "./index.module.scss";

const Description = ({description}) => {
    return (
        <div className={styles.container}>
            <h2>{description}</h2>
        </div>
    )
};

export default Description;