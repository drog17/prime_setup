import { create } from "zustand";

interface IUseLangStore{
    lang: "Ru" | "EN",
    set: (lang: "Ru" | "EN") =>void
}

const useLangStore = create<IUseLangStore>((set) => ({
    lang: "Ru",
    set: (lang) => {
        set({lang: lang})
    }
}))

export default useLangStore