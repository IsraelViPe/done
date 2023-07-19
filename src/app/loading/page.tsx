import Image from 'next/image';
import styles from './loading.module.scss';

export default function Loading() {
    return (
        <div className={styles.container}>
            <div style={{display: "flex"}}>
                <div className={styles.container_motion}>
                    < Image className={styles.x1} width={30} height={30} src={"/x.svg"} alt="ícone check"/>
                    < Image className={styles.check1} width={30} height={30} src={"/checked.svg"} alt="ícone check"/>
                </div>
                <div className={styles.container_motion}>
                    < Image className={styles.x2} width={30} height={30} src={"/x.svg"} alt="ícone check"/>
                    < Image className={styles.check2} width={30} height={30} src={"/checked.svg"} alt="ícone check"/>
                </div>
                <div className={styles.container_motion}>
                    < Image className={styles.x3} width={30} height={30} src={"/x.svg"} alt="ícone check"/>
                    < Image className={styles.check3} width={30} height={30} src={"/checked.svg"} alt="ícone check"/>
                </div>
            </div>
            <span>loading...</span>
        </div>
    )
}