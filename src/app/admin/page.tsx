"use client";
import { useState } from "react";
import styles from "./Admin.module.scss";
import Addstate from "./Addstate/Addstate";
import PanelAdmin from "./PanelAdmin/PanelAdmin";
const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

export default function Admin() {
  const [input, setInput] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [error, setError] = useState("");
  const handleLogin = () => {
    if (input === ADMIN_PASSWORD) {
      setShowWelcome(true)
      setError("");
      setTimeout(() => {
        setAuthenticated(true);
        setShowWelcome(false)
      }, 1000)
    } else {
      setError("❌ Неверный пароль");
    }
  };
  if (showWelcome) {
    return (
      <div className={styles.welcomeWrapper} >
        <h1>Добро Пожаловать!</h1>
        <p>Панель администратора Грузится немного подождите</p>
      </div>
    )
  }
  if (!authenticated) {
    return (
      <div className={styles.authWrapper}>
        <div className={styles.authBox}>
          <h2>Авторизация</h2>
          <input
            type="password"
            placeholder="Введите пароль"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleLogin}>Войти</button>
          {error && <p className={styles.error}>{error}</p>}
        </div>
      </div>

    );
  }
  return (
    <>
      <PanelAdmin />
      <Addstate />
    </>
  );
}