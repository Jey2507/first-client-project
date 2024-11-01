import css from "../ProReels/ProReels.module.css"

export default function ProReels() {
    return (
        <section id="pro" className={css.sectionPro}>
            <div className={css.containerPro}>
                <h2 className={css.textPro}>ProReels</h2>
                <div className={css.boxText}>
                    <h3 className={css.descrPro}>
                        REELS BEZ WYPALENIA.
                    </h3>
                    <ul className={css.descList}>
                        <li>
                            <p>Praktykujący kurs na którym ty nauczysz się tworzyć Reels,i zamiast wypalenia przyciągniesz klientów. </p>
                        </li>
                        <li>
                            <p>Dowiesz się wszystki triki, i jak przyciągać nowych obserwatorów w twój blog.</p>
                        </li>
                        <li>
                            <p>Ty napewno zejdziesz z martwego punktu.</p>
                        </li>
                        <li>
                            <p>Dowiesz się jakie urządzenia potrzebujesz dla nagrania zajebistych rolek.</p>
                        </li>
                        <li>
                            <p>Nie zostanie pytania „ Co musze nagrywać?”.</p>
                        </li>
                        <li>
                            <p>Dowiesz się najważniejszych haków montażu i będziesz sprzedawać swoi usługi przez Reels, dzięki czemu otrzymasz spektakularne rezultaty.</p>
                        </li>
                    </ul>
                    <p className={css.descrCzas}>
                        Niedługo Start.<br />
                        Czas trwania 6 tygodni.<br />
                        Dostęp 6 miesiąca po zakończeniu.
                    </p>
                </div>
                <ul className={css.listPro}>
                    <li className={css.itemPro}>
                        <h3>1 tydzień: Moduł</h3>
                        <ul>
                            <li>
                                <p>- Oświetlenie </p>
                            </li>
                            <li>
                                <p>- Schematy Oświetlenia </p>
                            </li>
                            <li>
                                <p>- Nagranie Siebie </p>
                            </li>
                            <li>
                                <p>- Nagranie Tematyczne</p>
                            </li>
                        </ul>
                    </li>
                    <li className={css.itemPro}>
                        <h3>2 tydzień: Moduł</h3>
                        <ul>
                            <li>
                                <p>- Gdzie szukać pomysły?</p>
                            </li>
                            <li>
                                <p>- Prawidłowe napisanie scenariusza</p>
                            </li>
                            <li>
                                <p>- Okładki Reels</p>
                            </li>
                            <li>
                                <p>- Formaty i opis</p>
                            </li>
                        </ul>
                    </li>
                    <li className={css.itemPro}>
                        <h3>3-4 tydzień: Moduł</h3>
                        <ul>
                            <li>
                                <p>- Jak nagrywać MK część praktyczna</p>
                            </li>
                            <li>
                                <p>- Jak montować, pełna znajomość z aplikacjami do montowania</p>
                            </li>
                            <li>
                                <p>- Praktyka montowania krok po kroku</p>
                            </li>
                            <li>
                                <p>- Inspiracji, przejścia </p>
                            </li>
                        </ul>
                    </li>
                    <li className={css.itemPro}>
                        <h3>5 tydzień: Moduł</h3>
                        <ul>
                            <li>
                                <p>- Nagranie siebie praktyka</p>
                            </li>
                            <li>
                                <p>- montowanie </p>
                            </li>
                        </ul>
                    </li>
                    <li className={css.itemPro}>
                        <h3>6 tydzień bonus: Moduł</h3>
                        <ul>
                            <li>
                                <p>- Wizualna strona Instagram </p>
                            </li>
                            <li>
                                <p>- Bazowe sprzedaży </p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    )
}