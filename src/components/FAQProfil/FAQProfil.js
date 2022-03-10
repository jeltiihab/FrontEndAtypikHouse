import styles from "./FAQProfil.module.css";


function FAQ() {
    return (
        <div>
            <div className={styles.container}>
                <div class={styles.content}>
                    <div class={styles.contentDetails}>
                        <details class={styles.details}>
                            <summary classsName={styles.summary}>
                            Quelles coodonnées peuvent être modifiées ?
                            </summary>

                            <span className={styles.text}>
                            AtypikHouse vous informe que  la vérifier votre identité ne 
                            peuvent être modifiées. Vous pouver modifiéés vos  coordonnées et certaines données 
                            personnelles, néanmoins il se peut que nous vous demandons la présicion de ces informations 
                            la prochaine fois que vous réservez un logement ou créez une annonce.
                            Merci pour votre compréhension.
                            </span>
                        </details>
                        <details class={styles.details}>
                            <summary classsName={styles.summary}>
                                Lesquelles de mes coordonnées sont communiquées à des tiers ?
                            </summary>

                            <span className={styles.text}>
                            AtypikHouse communique pas les coordonnées aux propriétéx 
                           si une confirmation de réservation n'est faites.
                            </span>
                        </details>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default FAQ
