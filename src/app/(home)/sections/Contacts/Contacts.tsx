"use client";
import { useState } from "react";
import styles from './contacts.module.scss'
import Container from "@/shared/ui/Container";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import useLangStore from "@/store/useLangStore";
import ContactEn from "@/shared/Constants/lang/en/HomeEn/ContactEn";
import ContactRu from "@/shared/Constants/lang/ru/HomeRu/ContactRu";
import Image from 'next/image';
import facebook from '../../../../../public/assets/Facebook-Icon (1).svg'
import twitter from '../../../../../public/assets/Twitter-Icon (1).svg'
import instagram from '../../../../../public/assets/Instagram-Icon (1).svg'
import  linkedin from '../../../../../public/assets/LinkedIn-Icon (1).svg'
import youtube from '../../../../../public/assets/Youtube-Icon (1).svg'

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
        alert("Message sent!");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    };
    const {lang}=useLangStore()

    return (
        <section className={styles.contacts}>
            <Container>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <h2 className={styles.title}>{lang==="EN" ? ContactEn.title : ContactRu.title}</h2>
                        <p className={styles.text}>
                            {lang==="EN" ? ContactEn.text : ContactRu.text}
                        </p>

                        <h3 className={styles.subtitle}>Working hours</h3>
                        <p>Monday to Friday: 8:30 AM – 5:30 PM</p>
                        <p>Saturday: 10:00 AM – 2:00 PM</p>

                        <div className={styles.contactInfo}>
                            <p>
                                <FaEnvelope className={styles.icon} />{" "}
                                <a href="mailto:info.xyz@gmail.com">info.xyz@gmail.com</a>
                            </p>
                            <p>
                                <FaPhone className={styles.icon} />{" "}
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
                                <h3>{lang==="EN" ? ContactEn.name : ContactRu.name}</h3>
                                <input
                                    type="text"
                                    placeholder="Enter full name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.lastname}>
                                <h3>{lang==="EN" ? ContactEn.lastname : ContactRu.lastname}</h3>
                                <input
                                    type="text"
                                    placeholder="Enter full surname"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.email}>
                            <h3>{lang==="EN" ? ContactEn.email : ContactRu.email}</h3>
                            <input
                                type="email"
                                placeholder="Enter email address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.phone}>
                            <h3>{lang==="EN" ? ContactEn.phone : ContactRu.phone}</h3>
                            <input
                                type="tel"
                                placeholder="Enter phone number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <h3>{lang==="EN" ? ContactEn.message : ContactRu.message}</h3>
                            <textarea
                                name="message"
                                placeholder="Enter your message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className={styles.sendBtn}>{lang==="EN" ? ContactEn.btn : ContactRu.btn}</button>
                    </form>
                </div>
            </Container>
        </section>
    );
}

