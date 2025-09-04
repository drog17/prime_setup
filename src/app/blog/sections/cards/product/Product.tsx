"use client"
import Image from 'next/image'
import Link from 'next/link';
import styles from './product.module.scss'
import { IArticle } from '@/types/Article';
interface IProductProps {
    product: IArticle
}
export default function Product({ product }: IProductProps) {
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
                    {product.title}
                </h2>
                <p className={styles.articleDescription}>
                    {product.description}
                </p>
                <div className={styles.articleFooter}>
                    <span className={styles.articleCategory}>
                        {product.category}
                    </span>
                    <Link className={styles.readMore} href={`/blog/detail/`}>Читать далее →</Link>
                </div>
            </div>
        </div>
    )
}