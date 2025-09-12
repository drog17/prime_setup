"use client"
import Image from 'next/image'
import Link from 'next/link';
import styles from './product.module.scss'
import { IArticle } from '@/types/Article';
import useLangStore from '@/store/useLangStore';
interface IProductProps {
    product: IArticle
}
const ProductEn={
    title:"How to open a company in Dubai: Step-by-step instructions",
    description:"Starting a business in Dubai is easy. We tell you where to start, what documents you need and how long the registration process takes.",
}

export default function Product({ product }: IProductProps) {
    const{lang}=useLangStore()
    return (
        <div key={product.id}>
            <div className={styles.articleCard}>
                <Image
                    src={product.image}
                    alt={product.title}
                    width={382}
                    height={294}
                    quality={100}
                    style={{ objectFit: 'cover' }}
                />
                <h2 className={styles.articleTitle}>
                    {lang==="EN" ? ProductEn.title : product.title}
                </h2>
                <p className={styles.articleDescription}>
                    {lang==="EN" ? ProductEn.description : product.description}
                </p>
                <div className={styles.articleFooter}>
                    <span className={styles.articleCategory}>
                        {product.category}
                    </span>
                    <Link className={styles.readMore} href={`/blog/detail/`}>{lang==="EN" ? "Read more →" : "Читать далее →"}</Link>
                </div>
            </div>
        </div>
    )
}