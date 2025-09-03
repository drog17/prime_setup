"use client";
import Container from '@/shared/ui/Container';
import styles from './contactsRu.module.scss'
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';
export default function ContactsRu(){
        const [formData, setFormData] = useState({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
        });
    
        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };
    
        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            console.log("Form submitted:", formData);
            alert("Message sent!");
            setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
        };
    
    return(
         <section className={styles.contacts}>
            <Container>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <h2 className={styles.title}>Остались вопросы?</h2>
                        <p className={styles.text}>Мы с радостью проконсультируем вас лично.</p>

                        <h3 className={styles.subtitle}>Рабочие часы</h3>
                        <p>С понедельника по пятницу 
                            <br />с 8:30 до 17:30</p>
                        <p>Суббота
                            <br /> 10:00 – 14:00</p>
                        <div className={styles.contactInfo}>
                            <p>
                                <Image src={"/icons/Group 57.svg"} alt='Group' width={40} height={40} className={styles.icon} />{" "}
                                <a href="mailto:info.xyz@gmail.com">info.xyz@gmail.com</a>
                            </p>
                            <p>
                                <Image src={"/icons/Component 3.svg"} alt='icons' width={40} height={40} className={styles.icon} />{" "}
                                <a href="tel:+996476924">+996 476-924</a>
                            </p>
                        </div>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.row}>
                            <div className={styles.name}>
                                <h3>Имя</h3>
                                <input
                                name='firstName'
                                    type="text"
                                    placeholder="Введите полное имя"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.lastname}>
                                <h3>Фамилия</h3>
                                <input
                                name='lastName'
                                    type="text"
                                    placeholder="Введите полную фамилию"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.email}>
                            <h3>Адрес электронной почты</h3>
                            <input
                            name='email'
                                type="email"
                                placeholder="Введите адрес электронной почты"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.phone}>
                            <h3>Номер телефона</h3>
                            <input
                            name='phone'
                                type="tel"
                                placeholder="Введите номер телефона"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <h3>Чем мы можем помочь?</h3>
                            <textarea
                                name="message"
                                placeholder="Введите ваше сообщение"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className={styles.sendBtn}>Отправить</button>
                    </form>
                </div>
            </Container>
        </section>
    )
}