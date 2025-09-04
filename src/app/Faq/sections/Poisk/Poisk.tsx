"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Poisk.module.scss";
import Biznes from "../Biznes/Biznes"; 

export default function Poisk() {
  const [query, setQuery] = useState("");

  return (
    <section className={styles.section}>
      <div className={styles.contend}>
        <h1>Ищете конкретный вопрос?</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            placeholder="Введите чтобы начать поиск..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          <Image
            src={"/icons/Component 1 (9).svg"}
            alt="Component"
            width={30}
            height={30}
          />
          <button>Поиск</button>
        </form>
      </div>
      <Biznes searchQuery={query} />
    </section>
  );

}