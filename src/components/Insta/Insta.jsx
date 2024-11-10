import css from "../Insta/Insta.module.css";
import gift from "../../assets/images/reviews/gift-box.png";

export default function Insta() {
    return (
        <section id="insta" className={css.sectionPro}>
            <div className={css.containerPro}>
                <h2 className={css.textPro}>InstaPaznokcie</h2>
                <div className={css.boxText}>
                    <h3 className={css.descrPro}>
                        Co znajdziesz na kursie:
                    </h3>
                    <ul className={css.descList}>
                        <li>
                            <p>- Podstawy fotografii. <br />
                            - Ustawienia kamery. <br />
                            - Jakie urządzenie wybrać. <br />
                            - Jak prawidłowo ustawiać światło. <br />
                            - Praktyka na sobie. <br />
                            - Praktyka na modelce. <br />
                            - Akcesoria i tło. <br />
                            - Obróbka zdjęć w aplikacji praktyka. <br />
                            </p>
                        </li>
                        <li>
                            <p>Kurs podstawowy z robienia zdjęć paznokci, na którym dowiesz się o podstawach fotografii. Dzięki niemu na pewno będziesz mogła zmienić podejście do zdjęć swoich prac.</p>
                        </li>
                        <li>
                            <p>Kurs dla stylistek paznokci, które chcą zainspirować się i nauczyć się robić wyjątkowe zdjęcia swoich prac, przyciągając tym samym więcej klientów.</p>
                        </li>
                        <li>
                            <p>Łącznie kurs trwa ok. 1,5 godziny. Jest dostępny w zapisie i zapewnia dostęp bez ograniczeń.</p>
                        </li>
                    </ul>

                    <div className={css.containerGap}>
                        <div className={css.boxGift}>
                            <img className={css.gift} src={gift} alt="gift" />
                            <p className={css.descrCzas}>
                                Bonus: linki i instrukcje, jak zrobić makiety na Instagramie.
                            </p>
                        </div>
                        <div className={css.boxGift}>
                            <img className={css.gift} src={gift} alt="gift" />
                            <p className={css.descrCzas}>Dodatkowo autorskie filtry do zdjęć paznokci są dostępne GRATIS.</p>           
                        </div>   
                    </div>      
                </div>
            </div>
        </section>
    )
}