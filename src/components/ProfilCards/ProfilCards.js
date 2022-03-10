import styles from "./ProfilCards.module.css";

function ProfilCards() {
    return (
        <div className={styles.container}>
        <div className={styles.containerItem}>
            <div className={styles.infoItems}><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></div>
            <div>
                <span className={styles.infos}>Informations personelles</span>
                <span>Renseigner vos cordonnées personelles</span>
            </div>
        </div>
        <div className={styles.containerItem}>
            <div className={styles.infoItems}><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg></div>
            <div>Retrouve tous vos paiements, remboursement</div>
        </div>
        <div className={styles.containerItem}>
            <div className={styles.infoItems}> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd" />
            </svg> </div>
            <div>
                <div>
                    <span className={styles.infos}>Vos réservation</span>
                </div>
                <div>Ici vos réservations en lignes et vos favoris</div>

            </div>
        </div>
        <div className={styles.containerItem}>
            <div className={styles.infoItems}>
                <span className={styles.infos}><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg></span></div>
            <div>
                <span className={styles.infos}>Favoris</span>
                </div>
                <div>Ici vos réservations en lignes et vos favoris</div>

            </div>
    </div>
    )
}

export default ProfilCards
