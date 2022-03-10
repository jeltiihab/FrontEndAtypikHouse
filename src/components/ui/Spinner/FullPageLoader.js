import { ImSpinner5 } from 'react-icons/im';
import styles from "./FullPageLoader.module.css";

export default function FullPageLoader() {
    return (
        <div className={styles.spinnerContainer}>
            <ImSpinner5 className={styles.spinnertest} />
            <p>Loading...</p>
        </div>
    );
}