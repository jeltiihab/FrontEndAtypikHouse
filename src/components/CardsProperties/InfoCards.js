import styles from "./CardsProperties.module.css";


export default function InfoCards(props) {
    return (
        <>
            {props.propertyData.map(data => {
                return (
                        <div>
                            <img src={data.image} alt=" random imgee"
                                 class="w-full object-cover object-center rounded-lg shadow-md" />
                            <div class={styles.properties}>
                                <div class={styles.contents}>
                                    <div class={styles.itemsContents}>
                                        <div class={styles.itemsRooms}>
                                            {data.rooms} &bull; {data.rooms}
                                        </div>
                                        <h4 class={styles.title}>{data.name}</h4>
                                        <div class={styles.contentPrice}>
                                            {data.price}
                                            <span className={styles.price}> /euro</span>
                                        </div>
                                        <div class={styles.annotation}>
                                            <span class={styles.ratings}>{data.rate}</span>
                                            <span class={styles.baseRating}>(based on 234 ratings)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                )

        })}
        </>

    )
}




// <div>
// <img src="https://source.unsplash.com/random/350x350" alt=" random imgee"
//     class="w-full object-cover object-center rounded-lg shadow-md" />
// <div class={styles.properties}>
//     <div class={styles.contents}>
//         <div class={styles.itemsContents}>
//             <div class={styles.itemsRooms}>
//                 2 baths &bull; 3 rooms
//             </div>

//             <h4 class={styles.title}>A random Title title tlt feeodidzi</h4>

//             <div class={styles.contentPrice}>
//                 $1800
//                 <span className={styles.price}> /wk</span>
//             </div>
//             <div class={styles.annotation}>
//                 <span class={styles.ratings}>4/5 ratings </span>
//                 <span class={styles.baseRating}>(based on 234 ratings)</span>
//             </div>
//         </div>
//     </div>
// </div>


// </div>