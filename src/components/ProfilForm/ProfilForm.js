import FAQ from "../FAQProfil/FAQProfil";
import styles from "./ProfilForm.module.css";

//Exemple D'envoie de formulaire NextJs https://nextjs.org/blog/forms

function ProfilForm() {
    return (
        <div>
            <div className={styles.containerInfo}>
                <div className={styles.titleInfo}>Information personnelle</div>
            </div>
            <div className={styles.container}>
                <form method="PUT" action="" autoComplete="">

                    <div className={styles.content}>
                        <div className={styles.containerLeft}>
                            <div className={styles.z}>
                                <div className={styles.text} htmlFor='name'>NOM Prénom</div>
                                <div className={styles.name}>intitulé du nom</div>
                            </div>
                        
                        </div>
                        <div>
                            <div className={styles.containerInput}>
                                <input type="text" name="name" className={styles.input} placeholder="Nom" />
                                <input type="text" name="name" className={styles.input} placeholder="Prenom" />
                            </div>
                            
                        </div>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.containerLeft}>
                            <div className={styles.z}>
                                <div className={styles.text} htmlFor='name'>Mail</div>
                                <div className={styles.name}>intitulé du mail</div>

                            </div>
                            
                        </div>

                        <div>
                            <div className={styles.containerInput}>
                                <input type="email" name="email" className={styles.input} placeholder="mail.com" />
                            </div>
                        </div>
                    </div>


                    <div className={styles.content}>
                        <div className={styles.containerLeft}>
                            <div className={styles.z}>
                                <div className={styles.text} htmlFor='name'>Mot passe</div>                                
                            </div>

                            {/* <div className={styles.z}>
                                <div className={styles.button}>
                                    <a href="#" className={styles.modify} > Modifier</a>
                                    <a href="#" className={styles.modify} > Annuler</a>                                </div>
                            </div> */}
                        </div>
                        <div>
                            <div className={styles.containerInput}>
                            <input type="password" name="password" className={styles.input} placeholder="" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.divBtn}>
                        <div className={styles.divdivBtn}>
                            <button className={styles.btn}>
                                Envoyer
                            </button>
                        </div>
                    </div>

                </form>
                <div className={styles.containerRight}>
                    <FAQ/>
                </div>

            </div>
        </div>
    )
}

export default ProfilForm
