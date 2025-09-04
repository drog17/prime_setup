"use client";
import { useState } from "react";
import styles from './contacts.module.scss'
import Container from "@/shared/ui/Container";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import Image from 'next/image';
import facebook from '../../../../../public/assets/Facebook-Icon (1).svg'
import twitter from '../../../../../public/assets/Twitter-Icon (1).svg'
import instagram from '../../../../../public/assets/Instagram-Icon (1).svg'
import  linkedin from '../../../../../public/assets/LinkedIn-Icon (1).svg'
import youtube from '../../../../../public/assets/Youtube-Icon (1).svg'
import polygon9 from '../../../../../public/assets/Polygon 9.png'
import polygon10 from '../../../../../public/assets/Polygon 10.png'
import polygon11 from '../../../../../public/assets/Polygon 11.png'
import polygon12 from '../../../../../public/assets/Polygon 12.png'
import polygon13 from '../../../../../public/assets/Polygon 13.png'
import polygon51 from '../../../../../public/assets/Polygon 5 (1).png'
import polygon8 from '../../../../../public/assets/Polygon 8.png'
export default function Contacts2() {
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

    return (
        <section className={styles.contacts}>
            <Image src={polygon9}  alt='' className={styles.polygon9}/>
            <Image src={polygon10}  alt='' className={styles.polygon10}/>
            <Image src={polygon11}  alt='' className={styles.polygon11}/>
            <Image src={polygon12}  alt='' className={styles.polygon12}/>
            <Image src={polygon13}  alt='' className={styles.polygon13}/>
            <Image src={polygon51}  alt='' className={styles.polygon51}/>
            <Image src={polygon8}  alt='' className={styles.polygon8}/>
            <Container>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <h2 className={styles.title}>Давайте начнем</h2>
                        <p className={styles.text}>Мы с радостью проконсультируем вас<br/> лично.</p>
                        <div className={styles.s1s2}>
                            <div className={styles.s1}>
                                <h3 className={styles.subtitle}>Рабочие часы</h3>
                                <p>Monday to Friday:<br/> 8:30 AM – 5:30 PM</p>
                                <p>Saturday:<br/> 10:00 AM – 2:00 PM</p>
                            </div>
                            <div className={styles.s1}>
                                <h3 className={styles.subtitle}>Адрес офиса:</h3>
                                <p>Prime Setup Business<br/>Sheikh Zayed Road, Dubai, UAE</p>
                            </div>
                              </div>
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
                                <h3>First Name</h3>
                                <input
                                    type="text"
                                    placeholder="Enter full name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.lastname}>
                                <h3>Last Name</h3>
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
                            <h3>Email Addres</h3>
                            <input
                                type="email"
                                placeholder="Enter email address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.phone}>
                            <h3>Phone Number</h3>
                            <input
                                type="tel"
                                placeholder="Enter phone number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <h3>How Can We Help You?</h3>
                            <textarea
                                name="message"
                                placeholder="Enter your message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className={styles.sendBtn}>
                            Send
                        </button>
                    </form>
                </div>
            </Container>
        </section>
    );
}

