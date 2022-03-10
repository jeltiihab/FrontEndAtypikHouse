import React, { useState, useEffect } from "react";
import styles from './TypeProperties.module.css';

// do the focus select in the check list
// 
function TypeProperties() {
    //const [element, setElement] = useState([]);

    // ____Use Axios get Properties
   
    // useEffect( () => {
    //     const getData = async () => {
    //         try {
    //             const response = await axios.get(
    //                 '/property',
    //             );
    //             console.log(response.status);
    //             console.log(response.data);
    //         } catch (e) {
    //             console.log(e);
    //         }
    //     };

    //     getData();

    // }, []);





    return (
        <div className={styles.container}>
            {element.data.map( item => (

                <div className={styles.itemsContent}>{item.title}</div>

            ))} 
            {/* // <div className={styles.itemsContent}>1</div>
            // <div className={styles.itemsContent}>1</div>
            // <div className={styles.itemsContent}>1</div>
            // <div className={styles.itemsContent}>1</div> */}
        </div>
    )
}

export default TypeProperties
