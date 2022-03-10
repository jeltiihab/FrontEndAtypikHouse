import postcss from "postcss";
import styles from "./Pagination.module.css";



export default function Pagination(totalCards, cardsPerPage, pagination) {

    const pageNumbers = [];

    for(let i=1; i <=Math.ceil( totalCards / cardsPerPage); i++ ){
        pageNumbers.push(i);
    }

    
    return (
        <>
            <nav>
                <ul>
                    {
                        pageNumbers.map(number =>(
                            <li key={number} className="">
                                <a onClick={ () => pagination(number)} href="!#" className="">
                                    {number}
                                </a>

                            </li>
                        ))
                    }
                </ul>
            </nav>
        
        </>
        // <div>
        //     <div className={styles.container}>
        //         <div classNAme={styles.contentItems}>
        //             <div class={styles.contentLeft}>
        //                 <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class={styles.SVGLeft}>
        //                     <polyline points="15 18 9 12 15 6"></polyline>
        //                 </svg>
        //             </div>
        //             <div class={styles.number}>
        //                 <div class={styles.numberActive}>1</div>
        //                 <div class={styles.numberOff}>...</div>
        //                 <div class={styles.numberOff} >3</div>
        //                 <div class={styles.numberOff}>4</div>
        //                 <div class={styles.numberActivePlus}>5</div>
        //             </div>
        //             <div class={styles.contentRight}>
        //                 <a>suivant</a>
        //             </div>
        //         </div>
        //     </div>

        // </div>
   )
}
