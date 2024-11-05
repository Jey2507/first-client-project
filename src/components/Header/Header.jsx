import css from "../Header/Header.module.css"
import imagInsta from "../../assets/images/reviews/instagram.png";
import burger from "../../assets/images/reviews/burger-bar.png";
import exit from "../../assets/images/reviews/reject.png";
import { useState } from "react";
import clsx from "clsx";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    function handleOn() {
        setIsOpen(true)
    }

    function handleOff() {
        setIsOpen(false)
    }

    return (
        <>
        <header className={css.headerSection}>
            <div className={css.boxHeader}>
                <a className={css.hrefImage} href="https://www.instagram.com/tworcza.nails?igsh=dDl5NDQyaTRzaXBn" target="_blank">
                <img className={css.insta} src={imagInsta} alt="instagram" />
                </a>
                <ul className={css.listHeaderOne}>
                    <li>
                        <a href="#aboutMe">O mnie</a>
                    </li>
                    <li>
                        <a href="#projects">Opinii</a>
                    </li>
                    <li>
                        <a href="#proreels">ProReels</a>
                    </li>
                    <li>
                        <a href="#pakiety">Pakiety</a>
                    </li>
                    <li>
                        <a href="#insta">InstaPaznokcie</a>
                    </li>
                </ul>
                <button onClick={() => handleOn()} className={css.burger}>
                    <img src={burger} alt="burger-menu" />
                </button>
            </div>
        </header>
        <nav className={clsx(css.navHeader, { [css.navOpen]: isOpen, [css.navClosed]: !isOpen })}>
        <button onClick={() => handleOff()} className={css.burgerExit}>
            <img src={exit} alt="exit" />
        </button>
        <ul className={css.listHeader}>
            <li>
                <a href="#aboutMe">O mnie</a>
            </li>
            <li>
                <a href="#projects">Opinii</a>
            </li>
            <li>
                <a href="#proreels">ProReels</a>
            </li>
            <li>
                <a href="#pakiety">Pakiety</a>
            </li>
            <li>
                <a href="#insta">InstaPaznokcie</a>
            </li>
        </ul>
    </nav>
    </>
    )
}