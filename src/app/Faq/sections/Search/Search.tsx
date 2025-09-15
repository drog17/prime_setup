"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Search.module.scss";
import PoiskEn from "@/shared/Constants/lang/en/HomeEn/PoiskEn";
import PoiskRu from "@/shared/Constants/lang/ru/HomeRu/PoiskRu";
import useLangStore from "@/store/useLangStore";
import Business from "../Business/Business";

export default function Search() {
  const [query, setQuery] = useState("");
  const {lang}=useLangStore()
  return (
    <section className={styles.section}>
      <div className={styles.contend}>
        <h2>{lang==="EN" ? PoiskEn.title : PoiskRu.title}</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            placeholder={lang==="EN" ? PoiskEn.search : PoiskRu.search}
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
          <button>{lang==="EN" ? PoiskEn.button : PoiskRu.button}</button>
        </form>
      </div>
      <Business searchQuery={query} />
    </section>
  );

}