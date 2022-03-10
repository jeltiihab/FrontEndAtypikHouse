import Image from "next/image"
import styles from "./SmallCrads.module.css"

function SmallCard({img, location, distance, handle}) {


    return (
        <div className={styles.smallCardContainer}>
            {/* Left */}
            <div className={styles.imgContainer}>
                <Image
                    className={styles.img}
                    src={img}
                    layout="fill"
                />
            </div>
            {/* Right */}
            <div>
                <h2>{location}</h2>
                <h3 className={styles.distance}>{distance}</h3>
            </div>
        </div>
    )
}

export default SmallCard