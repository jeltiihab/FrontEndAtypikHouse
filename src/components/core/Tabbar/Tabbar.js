import React, { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faDungeon,
    faEnvelope,
    faInfoCircle,
    faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Tabbar.module.css';
import Link from 'next/link';

const Tabbar = ({ navigationData }) => {
    const getTabIcon = useCallback((item) => {
        switch (item) {
            case 'Accueil':
                return <FontAwesomeIcon size='lg' icon={faHome} />;
            case 'Nos biens':
                return <FontAwesomeIcon size='xs' icon={faDungeon} />;
            case 'contact':
                return <FontAwesomeIcon size='xs' icon={faEnvelope} />;
            case 'A propos':
                return <FontAwesomeIcon size='xs' icon={faGlobe} />;
            case 'FAQ':
                return (
                    <div>
                        <FontAwesomeIcon size='xs' icon={faInfoCircle} />
                    </div>
                );
        }
    }, []);

    return (
        <nav className={styles.tabbar}>
            {navigationData.map((item, index) => (
                <Link href={item.linkParent} key={index}>
                      <span key={index} className={styles.tabItem}>
                        <span className={styles.icon}>{getTabIcon(item.name)}</span>
                      </span>
                </Link>
            ))}
        </nav>
    );
};

export default Tabbar;