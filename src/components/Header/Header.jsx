import css from "../Header/Header.module.css";
import imagInsta from "../../assets/images/reviews/instagram.png";
import burger from "../../assets/images/reviews/burger-bar.png";
import exit from "../../assets/images/reviews/reject.png";
import { useState } from "react";
import clsx from "clsx";
import { useLanguage } from "../../js/LanguageProvider.jsx";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage(); // Використовуємо хук для мови

  // Тексти для меню
  const text = {
    pl: {
      aboutMe: "O mnie",
      reviews: "Opinii",
      proReels: "ProReels",
      packages: "Pakiety",
      courses: "Kursy",
    },
    en: {
      aboutMe: "About me",
      reviews: "Reviews",
      proReels: "ProReels",
      packages: "Packages",
      courses: "Courses",
    }
  };

  // Функції для відкриття і закриття меню
  const toggleMenu = () => setIsOpen(prevState => !prevState);

  return (
    <>
      <header className={css.headerSection}>
        <div className={css.boxHeader}>
          <a
            className={css.hrefImage}
            href="https://www.instagram.com/tworcza.nails?igsh=dDl5NDQyaTRzaXBn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={css.insta} src={imagInsta} alt="Instagram" />
          </a>
          <ul className={css.listHeaderOne}>
            {Object.entries(text[language]).map(([key, value]) => (
              <li key={key}>
                <a href={`#${key}`}>{value}</a>
              </li>
            ))}
          </ul>

          <div className={css.listButton}>
            <button onClick={toggleLanguage} className={css.languageSwitch}>
              {language === 'pl' ? 'EN' : 'PL'}
            </button>
            <button onClick={toggleMenu} className={css.burger}>
              <img src={burger} alt="burger-menu" />
            </button>
          </div>
        </div>
      </header>

      <nav className={clsx(css.navHeader, { [css.navOpen]: isOpen, [css.navClosed]: !isOpen })}>
        <button onClick={toggleMenu} className={css.burgerExit}>
          <img src={exit} alt="exit" />
        </button>
        <ul className={css.listHeader}>
          {Object.entries(text[language]).map(([key, value]) => (
            <li key={key}>
              <a href={`#${key}`}>{value}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
