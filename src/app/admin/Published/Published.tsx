"use client"
import { useState, useMemo } from 'react';
import styles from './Published.module.scss';
import Container from '@/shared/ui/Container';
import articles, { IArticle } from '@/types/Article';
import Image from 'next/image';
import Product from '../cards/Product/Product';

export default function Published() {
    const [searchQuery] = useState('');
    const [openMenuId, setOpenMenuId] = useState<number | null>(null);

    const filteredArticles: IArticle[] = useMemo(() => {
        if (!searchQuery) return articles;
        return articles.filter(article =>
            article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.category.toLowerCase().includes(searchQuery.toLowerCase()) 
        );
    }, [searchQuery]);

    const handleToggleMenu = (id: number) => {
        setOpenMenuId(prev => (prev === id ? null : id));
    };

    return (
        <section className={styles.products}>
            <Container>
                <div className={styles.content}>
                    <div className={styles.cards}> 
                        {filteredArticles.map(el => (
                            <div key={el.id} className={styles.cardWrapper}>
                                <Product product={el} />

                                <button 
                                    className={styles.redactBtn}
                                    onClick={() => handleToggleMenu(el.id!)}
                                >
                                    <Image src={"/icons/Frame 34431.svg"} alt='redact' width={30} height={30}/>
                                </button>
                                {openMenuId === el.id && (
                                    <div className={styles.miniMenu}>
                                        <button>Редактировать</button>
                                        <button>Удалить</button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}