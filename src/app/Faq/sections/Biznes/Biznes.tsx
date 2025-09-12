"use client";
import BiznesEn from "@/shared/Constants/lang/en/HomeEn/BiznesEn";
import BiznesRu from "@/shared/Constants/lang/ru/HomeRu/BiznesRu";

import styles from "./Biznes.module.scss";
import useLangStore from "@/store/useLangStore";
import { Question } from "@/shared/Constants/types";
import BiznesDataEn from "@/shared/Constants/lang/en/HomeEn/BiznesDataEn";
import BiznesDataRu from "@/shared/Constants/lang/ru/HomeRu/BiznesDataRu";

interface BiznesProps {
  searchQuery: string;
}

export default function Biznes({ searchQuery }: BiznesProps) {
  const { lang, set } = useLangStore();
  const data: Question[] = lang === "EN" ? BiznesDataEn : BiznesDataRu;
  const filtered = data.filter((item) => {
    const question = item.question?.toLowerCase() ?? "";
    const answer = item.answer?.toLowerCase() ?? "";
    const query = searchQuery?.toLowerCase() ?? "";

    return question.includes(query) || answer.includes(query);
  });

  return (
    <section className={styles.section}>
      <div className={styles.contend}>
        <h2>{lang === "EN" ? BiznesEn.title : BiznesRu.title}</h2>
        <div className={styles.boxs}>
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <div key={item.id} className={styles.box}>
                <h3>
                  {item.id}. {item.question}
                </h3>
                <p>{item.answer}</p>
              </div>
            ))
          ) : (
            <p>{lang === "EN" ? BiznesEn.none : BiznesRu.none}</p>
          )}
        </div>
      </div>
      <div className={styles.div}></div>
    </section>
  );
}