import React, {useContext} from "react";
import WelcomBanner from "../../src/components/core/WelcomeBanner/WelcomeBanner";
import styles from "./login.module.css"
import AuthContext from "../../context/AuthContext";
import LoginPage from "../../pages/login/index"



const Index = () => {
        let {loginUser} = useContext(AuthContext)
    
    return (
        <>
            <div className={styles.loginContainer}>
                {/* START right side of the login page */}
                <div className={styles.leftSide} style={{marginBottom: '40rem'}}>
                    <div className={styles.welcomeMsg}>
                        <h1 className={styles.AtypikhouseLabel}>Bonjour</h1>
                        <h2>Bienvenue</h2>
                        <form className={styles.loginForm} onSubmit={loginUser}>
                            <div className="mb-4">
                                <input className={styles.formInputs} id="username" type="text" placeholder="Username" />
                            </div>
                            <div className="mb-6">
                                <input className={styles.formInputs} id="password" type="password" placeholder="Password" />
                            </div>
                            <div>
                                <button className={styles.loginButton} type="submit">
                                    Sign In
                                </button>
                            </div>
                            <p className={styles.forgotpasswordLabel}>Mot de pass oublié ?</p>
                            <h2 className={styles.registerlink}>Première visite ? Créer un compte</h2>
                        </form>
                    </div>
                </div>
                {/* END right side of the login page */}
                <WelcomBanner/>
            </div>
        </>
    );
};

export default Index;