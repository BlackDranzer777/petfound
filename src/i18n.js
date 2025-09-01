import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    landing: {
      brand: "petFound",
      heroTitle: "Reuniting pets with their families.",
      heroSubtitle: "Every lost paw has a story — let's write a happy ending.",
      useApp: "Use Web App",
      becomePartner: "Become Partner",
      problemTitle: "The Problem",
      problemBody: "Thousands of pets go missing every year. Families feel helpless and time is critical.",
      solutionTitle: "Our Solution",
      solutionBody: "petFound connects people, shelters, and technology to bring pets home faster.",
      stepsTitle: "How it works",
      step1: "Report Lost or Found",
      step2: "AI & Community Matches",
      step3: "Chat Securely, Reunite",
      partnersTitle: "Partners & Impact",
      partnersBody: "Join our mission. NGOs, shelters, vets, municipalities — we’d love to work with you.",
      finalTitle: "Every paw deserves a way home.",
      finalCta: "Start Now",
      langEN: "EN",
      langPL: "PL"
    }
  },
  pl: {
    landing: {
      brand: "petFound",
      heroTitle: "Łączymy zagubione zwierzaki z ich rodzinami.",
      heroSubtitle: "Każda zagubiona łapka ma swoją historię — pomóżmy jej dobrze się skończyć.",
      useApp: "Przejdź do aplikacji",
      becomePartner: "Zostań partnerem",
      problemTitle: "Problem",
      problemBody: "Co roku giną tysiące zwierząt. Rodziny czują bezradność, a czas ma znaczenie.",
      solutionTitle: "Nasze rozwiązanie",
      solutionBody: "petFound łączy ludzi, schroniska i technologię, aby szybciej sprowadzać zwierzęta do domu.",
      stepsTitle: "Jak to działa",
      step1: "Zgłoś: zagubione lub znalezione",
      step2: "Dopasowania AI i społeczności",
      step3: "Bezpieczny czat i powrót do domu",
      partnersTitle: "Partnerzy i wpływ",
      partnersBody: "Dołącz do misji. NGO, schroniska, weterynarze, samorządy — zapraszamy.",
      finalTitle: "Każda łapka zasługuje na drogę do domu.",
      finalCta: "Zacznij teraz",
      langEN: "EN",
      langPL: "PL"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;
