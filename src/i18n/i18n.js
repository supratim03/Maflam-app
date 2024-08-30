import i18next from "i18next"
import { initReactI18next } from 'react-i18next';
import HttpApi from "i18next-http-backend";
import { supportedLangs } from "../constants/supportedLangs";

i18next.use(HttpApi).use(initReactI18next).init({
    fallbackLng: 'en',
    supportedLngs: Object.keys(supportedLangs),
    debug: import.meta.env.DEV,
    interpolation: {
        escapeValue: false
    },
})

export default i18next;