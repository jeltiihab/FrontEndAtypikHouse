import React from "react";
import styles from './DynamicQuestionAddProperties.module.css'


function DynamicQuestionAddProperties(props) {

    return (
        <div className={styles.containerLeft}>
                    <div>
                        <h1 className={styles.title}>AtypikHouse</h1>
                        <p className={styles.welcome}>Bienvenue chez hôte, <span className={styles.thanks}>MERCI</span> de nous faire confiance</p>
                        {/* <button type="submit" class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button> */}
                        <div className={styles.question}>{props.Content}</div>
                    </div>
                    <div class={styles.cercleBottom1}></div>
                    <div class={styles.cercleBottom2}></div>
                    <div class={styles.cercleTop1}></div>

                </div>
    )
}

export default DynamicQuestionAddProperties
