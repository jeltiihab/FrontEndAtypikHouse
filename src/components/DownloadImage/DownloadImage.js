import styles from './DownloadImage.module.css';


function DownloadImage() {
    return (
        <div className={styles.container}>
            <div className={styles.itemsContent}>
                <div className={styles.loadContainer}>

                    <div className={styles.iconsImage}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>
                    <div className={styles.contentDownload}>
                        <div className={styles.downloadImage}>
                            <div className={styles.nbImage}><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>5 images sont autorisés</div>

                            <button className={styles.button}>Télécharger les images</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadImage
