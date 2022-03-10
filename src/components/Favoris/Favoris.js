import styles from "./Favoris.module.css";



function Favoris() {
    return (
        <div>
            {/* image + locationwhen event click redirection to prototyPage */}

            <section className={styles.containerTop}>
               <div><h1 className={styles.title}> Favoris</h1></div>
            </section>
            <div className={styles.containerBottom}>
                <div className={styles.container}>
                    <div className={styles.containerItem}>
                        <div className={styles.infoItems}><img src="https://source.unsplash.com/random/350x350" alt=" random imgee"
                             class={styles.img} /></div>
                        <div className={styles.location}>Location</div>
                    </div>
                    <div className={styles.containerItem}>
                        <div className={styles.infoItems}><img src="https://source.unsplash.com/random/350x350" alt=" random imgee"
                             class={styles.img} /></div>
                        <div className={styles.location}>Location</div>
                    </div>
                    <div className={styles.containerItem}>
                        <div className={styles.infoItems}><img src="https://source.unsplash.com/random/350x350" alt=" random imgee"
                             class={styles.img} /></div>
                        <div className={styles.location}>Location</div>
                    </div>
                    <div className={styles.containerItem}>
                        <div className={styles.infoItems}><img src="https://source.unsplash.com/random/350x350" alt=" random imgee"
                             class={styles.img} /></div>
                        <div className={styles.location}>Location</div>
                    </div>
                    <div className={styles.containerItem}>
                        <div className={styles.infoItems}><img src="https://source.unsplash.com/random/350x350" alt=" random imgee"
                             class={styles.img} /></div>
                        <div className={styles.location}>Location</div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Favoris
