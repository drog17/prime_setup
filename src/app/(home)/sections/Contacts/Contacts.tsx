"use client";
import { useState } from "react";
import styles from "./contacts.module.scss";
import Container from "@/shared/ui/Container";
import { FaEnvelope, FaPhone } from "react-icons/fa";

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

    return (
        <section className={styles.contacts}>
            <Container>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <h2 className={styles.title}>Start your journey to the <br /> UAE today</h2>
                        <p className={styles.text}>
                            We are here to answer your questions and <br /> help with starting a business in the UAE.
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
