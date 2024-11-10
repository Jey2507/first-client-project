import css from "../Pakiety/Pakiety.module.css";
import gift from "../../assets/images/reviews/gift-box.png";
import clsx from "clsx";

export default function Pakiety() {
    return (
        <section id="pakiety" className={css.sectionPak}>
            <div className={css.containerPak}>
                <h2 className={css.textPakiety}>Do wyboru:</h2>
                <ul className={css.listPak}>
                    <li>
                        <div>
                            <p>- dostęp do 5 moduły</p>
                            <p>- dostęp do czatu grupowego</p>
                        </div>
                        <a className={css.linkPakBronze}>Pakiet1: Tylko oglądać</a>
                        <div className={css.divBuy}>
                            <p className={clsx(css.descrBuy, css.bronze)}>Cena: <span className={css.spanBuy}>9999 PLN</span></p>
                            <button className={css.button3D}>Kupić</button>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>- dostęp do 5 moduły</p>
                            <p>- dostęp czatu grupowego</p>
                            <p>- zoom</p>
                            <p>- sprawdzanie pracy domowej i odwrotna info.</p>
                            <div className={clsx(css.boxGift, css.megaBoxSilver)}>
                            <img className={css.gift} src={gift} alt="gift" />
                                <p className={css.bonus}>- dostęp do bonusu 6 moduły</p>
                            </div>
                        </div>
                        <a className={css.linkPakSilver}>Pakiet2: Standart</a>
                        <div className={css.divBuy}>
                            <p className={clsx(css.descrBuy, css.silver)}>Cena: <span className={css.spanBuy}>9999 PLN</span></p>
                            <button className={css.button3D}>Kupić</button>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>- dostęp do 5 moduły</p>
                            <p>- osobny czat </p>
                            <p>- osobne zoom</p>
                            <p>- osobna analiza </p>
                            <div className={css.megaBox}>
                                <div className={css.boxGift}>
                                    <img className={css.gift} src={gift} alt="gift" />
                                    <p className={css.bonus}>- dostęp do bonusu 6 moduły</p>
                                </div> 
                                <div className={css.boxGift}>
                                    <img className={css.gift} src={gift} alt="gift" />
                                    <p className={css.bonus}>- bonus online kurs „InstaPaznokcie”</p>
                                </div>
                            </div>
                        </div>
                        <a className={css.linkPakGold}>Pakiet Vip:</a>
                        <div className={css.divBuy}>
                            <p className={clsx(css.descrBuy, css.gold)}>Cena: <span className={css.spanBuy}>9999 PLN</span></p>
                            <button className={css.button3D}>Kupić</button>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}