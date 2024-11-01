import css from "../Pakiety/Pakiety.module.css"

export default function Pakiety() {
    return (
        <section className={css.sectionPak}>
            <div className={css.containerPak}>
                <h2 className={css.textPakiety}>Do wyboru:</h2>
                <ul className={css.listPak}>
                    <li>
                        <p>- dostęp do 5 tygodni</p>
                        <p>- dostęp do czatu grupowego</p>
                        <a className={css.linkPakBronze}>Pakiet1: Tylko oglądać</a>
                    </li>
                    <li>
                        <p>- dostęp do 5 tygodni</p>
                        <p>- dostęp czatu grupowego</p>
                        <p>- 4 zoom</p>
                        <p>- dostęp do bonusu 6 tygodnia</p>
                        <p>- sprawdzanie pracy domowej i odwrotna info.</p>
                        <a className={css.linkPakSilver}>Pakiet2: Standart</a>
                    </li>
                    <li>
                        <p>- dostęp do 5 tygodni</p>
                        <p>- osobny czat </p>
                        <p>- 4 osobne zoom</p>
                        <p>- osobna analiza </p>
                        <p>- dostęp do bonusu 6 tygodnia</p>
                        <p>- bonus online kurs „InstaPaznokcie”</p>
                        <a className={css.linkPakGold}>Pakiet Vip:</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}