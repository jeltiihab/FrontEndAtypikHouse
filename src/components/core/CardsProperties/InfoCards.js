import styles from "./CardsProperties.module.css";
import Link from 'next/link';



export default function InfoCards({props}, ) { //cards
    return (
        <>
                            <div className="">
                                <img src="https://source.unsplash.com/random/350x350" alt=" random imgee"
                                    class="w-full object-cover object-center rounded-lg shadow-md" />
                                <div class={styles.properties}>
                                    <div class={styles.contents}>
                                        <div class={styles.itemsContents}>
                                            <div class={styles.itemsRooms}>
                                                {id} &bull; {id} avis
                                            </div>
                                            <h4 class={styles.title}>{id}</h4>
                                            <div class={styles.contentPrice}>
                                                {id}
                                                <span className={styles.price}> /euro</span>
                                            </div>
                                            <div class={styles.annotation}>
                                                <span class={styles.ratings}>{id}</span>
                                                <span class={styles.baseRating}>(base on 234 ratings)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

        </>
    )
}


