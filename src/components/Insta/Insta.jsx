import css from "../Insta/Insta.module.css"

export default function Insta() {
    return (
        <section id="pro" className={css.sectionPro}>
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
                            <p>Łącznie kurs trwa ok. 1,5 godziny. Jest dostępny w zapisie i zapewnia dostęp bez ograniczeń. Dodatkowo autorskie filtry do zdjęć paznokci są dostępne GRATIS.</p>
                        </li>
                    </ul>

                    <p className={css.descrCzas}>
                    Bonus: linki i instrukcje, jak zrobić makiety na Instagramie.
                    </p>
                </div>
            </div>
        </section>
    )
}