import Image from 'next/image'
import styles from './Poisk.module.scss'
export default function Poisk() {
    return(
        <section className={styles.section}>
            <div className={styles.contend}>
               <h1>Ищете конкретный вопрос?</h1>
               <form action="">
                <input type="search" name="" id="" placeholder='Введите чтобы начать поиск...'/>
               <Image src={"/icons/Component 1 (9).svg"} alt='Component' width={30} height={30}/><button>Поиск</button>
                </form> 
            </div>
        </section>
    )
}