import React from "react";
import styles from "./InnerContainer.module.css";

export function InnerContainer({ children }) {
    return <div className={styles.innerContainer}>{children}</div>;
};

export function RightInnerContainer({ children }) {
    return <div className={styles.rightInnerContainer}>{children}</div>;
}
