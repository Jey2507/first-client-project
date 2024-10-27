import css from "../AboutMe/AboutMe.module.css"
import imagePathAboutMe from "../../assets/images/about/ania_three_tel.jpg";

export default function AboutMe() {
    return (
        <section id="aboutMe" className={css.sectionAbout}>
            <h2 className={css.mainText}>O mnie</h2>

                <div className={css.divContainer}>
                    <img className={css.imageMe} src={imagePathAboutMe} alt="Ania" />
                    <div className={css.divContent}>
                        <h3 className={css.textSkils}>W przeszłości stylistka paznokci</h3>
                        <ul className={css.listMe}>
                            <li>
                                <p className={css.descrAbout}><span className={css.span}>#za rok</span> do mnie przyszło 35 tysięcy obserwujących dzięki REELS, bez żadnej reklamy</p>
                            </li>
                            <li>
                                <p className={css.descrAbout}><span className={css.span}>#ucze</span> stylistek robić zajebiste zdjęcia od podstaw</p>
                            </li>
                            <li>
                                <p className={css.descrAbout}><span className={css.span}>#ucze</span> robić rolki które przynoszą rezultaty, dzięki którym zrasta dochód</p>
                            </li>
                        </ul>
                        <h3 className={css.textSkils}>Online kurs „InstaPaznokcie” przeszło 200+ stylistek</h3>
                        <ul>
                            <li>
                                <p className={css.descrAbout}><span className={css.span}>#znam</span> jak prowadzić instagram ze by zarabiać</p>
                            </li>
                        </ul>
                    </div>
                </div>

            <div className={css.divAchi}>
            <h2 className={css.textAchi}>Moje osiągnięcia</h2>

                <ul className={css.listAchi}>
                    <li>
                        <p className={css.descrAchi}>- Tworcza</p>
                    </li>
                    <li>
                        <p className={css.descrAchi}>- Autorka online kursu InstaPaznokcie</p>
                    </li>
                    <li>
                        <p className={css.descrAchi}>- Autorka online szkolenia ProReels</p>
                    </li>
                    <li>
                        <p className={css.descrAchi}>- Reels na kilka🍋 wyświetleń</p>
                    </li>
                    <li>
                        <p className={css.descrAchi}>- Ekspert z tworzenia contentu</p>
                    </li>
                    <li>
                        <p className={css.descrAchi}>- 8 lat w beauty branże</p>
                    </li>
                </ul>
            </div>
            
            
        </section>
    )
}