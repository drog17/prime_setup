"use client"
import { useState, useMemo } from 'react';
import styles from './products.module.scss';
import Container from '@/shared/ui/Container';
import articles, { IArticle } from '@/types/Article';
import Product from './product/Product';

export default function SearchSection() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredArticles: IArticle[] = useMemo(() => {
        if (!searchQuery) return articles;
        return articles.filter(article =>
            article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery, articles]);

    return (
        <section className={styles.products}>
            <Container>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Что вас интересует?
                    </h1>
                    <div className={styles.searchContainer}>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Введите чтобы начать поиск..."
                            className={styles.searchInput}
                        />

                        <div className={styles.searchIcon}>
                            <div> <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="13" cy="13" r="8" stroke="#888888" strokeWidth="2" />
                                <line x1="19" y1="19" x2="25" y2="25" stroke="#888888" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            </div> Поиск
                        </div>
                    </div>
                    <div className={styles.cards}>
                        {filteredArticles.map(el => (<Product key={el.id} product={el} />))}
                    </div>
                    {filteredArticles.length === 0 && (
                        <div className={styles.noResults}>
                            По вашему запросу ничего не найдено
                        </div>
                    )}
                </div>
            </Container>
        </section >
    );
};