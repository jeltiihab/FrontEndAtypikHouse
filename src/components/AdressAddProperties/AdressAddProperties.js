import styles from './AdressAddProperties.module.css'
import buttonStyle from '../Buttons/Buttons.module.css';
import AppButton from '../Buttons/Buttons';

function AdressAddProperties() {
    return (
        <div className={styles.container}>
            <div className={styles.itemsContent}>
                <div className={styles.AdressContainer}>
                    <div className={styles.input}>
                        <div className={styles.containerTitle}>
                            <svg class="inline align-text-top" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                <g>
                                    <path d="m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z" fill="none" id="svg_1" stroke="null"></path>
                                    <path d="m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z" id="svg_2"></path>
                                    <circle cx="7.04807" cy="6.97256" r="2.5" id="svg_3"></circle>
                                </g>
                            </svg>
                            <h1 class={styles.titleAdress}>Veuillez ajouter l'adresse de votre biens</h1>
                        </div>

                        <div>
                            <input placeholder="Adresse" class={styles.adress} />
                        </div>
                        <div>
                            <input placeholder="Ville" class={styles.adress} />
                        </div>
                        <div>
                            <input placeholder="Code Postal" class={styles.adress} />
                        </div>

                    </div>
                   
                    <AppButton Content="Parfait" styleparam={buttonStyle.blackWideButton} />
                
                </div>

            </div>

        </div>
    )
}

export default AdressAddProperties
