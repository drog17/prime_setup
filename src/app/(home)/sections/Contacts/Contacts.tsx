"use client";
import { useState } from "react";
import styles from './contacts.module.scss'
import Container from "@/shared/ui/Container";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import ContactEn from "@/shared/Constants/lang/en/HomeEn/ContactEn";
import ContactRu from "@/shared/Constants/lang/ru/HomeRu/ContactRu";
import useLangStore from "@/store/useLangStore";
import Image from 'next/image';
import facebook from '../../../../../public/assets/Facebook-Icon (1).svg'
import twitter from '../../../../../public/assets/Twitter-Icon (1).svg'
import instagram from '../../../../../public/assets/Instagram-Icon (1).svg'
import  linkedin from '../../../../../public/assets/LinkedIn-Icon (1).svg'
import youtube from '../../../../../public/assets/Youtube-Icon (1).svg'
import ContactsEn from "@/shared/Constants/lang/en/HomeEn/ContactsEn";
import ContactsRu from "@/shared/Constants/lang/ru/HomeRu/ContactsRu";

export default function Contacts() {
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
        alert(lang === "EN" ? "Message sent!" : "Сообщение отправлено!");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    };
    const {lang}=useLangStore()
    const t = lang === "EN" ? ContactsEn : ContactsRu;
        return (
        <section className={styles.contacts}>
            <Container>
                <div className={styles.content}>
                    <div className={styles.left}>

                        <h2 className={styles.title}>{t.title}</h2>
                        <p className={styles.text}>{t.text}</p>

                        <h3 className={styles.subtitle}>{t.workingHours}</h3>
                        <p>{t.schedule.weekdays}</p>
                        <p>{t.schedule.saturday}</p>

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
                        <div className={styles.sotsialImages}>
                                <Image src={facebook}  alt='' />
                                <Image src={twitter}  alt='' className={styles.images} />
                                <Image src={instagram}  alt='' className={styles.images}/>
                                <Image src={linkedin}  alt='' className={styles.images}/>
                                <Image src={youtube}  alt='' className={styles.images} />
                        </div>
                    </div>
                    
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.row}>
                            <div className={styles.name}>
                                <h3>{t.name}</h3>
                                <input
                                    name="firstName"
                                    type="text"
                                    placeholder={t.placeholders.fullName}
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.lastname}>
                                <h3>{t.lastname}</h3>
                                <input
                                    name="lastName"
                                    type="text"
                                    placeholder={t.placeholders.fullSurname}
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.email}>
                            <h3>{t.email}</h3>
                            <input
                                name="email"
                                type="email"
                                placeholder={t.placeholders.email}
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.phone}>
                            <h3>{t.phone}</h3>
                            <input
                                name="phone"
                                type="tel"
                                placeholder={t.placeholders.phone}
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <h3>{t.message}</h3>
                            <textarea
                                name="message"
                                placeholder={t.placeholders.message}
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className={styles.sendBtn}>{t.btn}</button>
                    </form>
                </div>
            </Container>
        </section>
    );
}

