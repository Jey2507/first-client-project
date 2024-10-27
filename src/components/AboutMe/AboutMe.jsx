import css from "../AboutMe/AboutMe.module.css"
import imagePathAboutMe from "../../assets/images/about/ania_three_tel.jpg";
import { AiTwotoneBulb } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { PiVideoFill } from "react-icons/pi";
import { FaLemon } from "react-icons/fa6";
import { GrUserExpert } from "react-icons/gr";
import { RiNumber8 } from "react-icons/ri";

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
                        <li className={css.itemAchi}>
                            <RiNumber8 size="40px" color="#A8539D" className={css.icon}/>
                            <p className={css.descrAchi}>- 8 lat w beauty branże</p>
                        </li>
                        <li className={css.itemAchi}>
                            <AiTwotoneBulb size="40px" color="#8B5A83" className={css.icon}/>
                            <p className={css.descrAchi}>- Tworcza</p>
                        </li>
                        <li className={css.itemAchi}>
                            <FaInstagramSquare size="40px" color="#A56A9A" className={css.icon}/>
                            <p className={css.descrAchi}>- Autorka online kursu InstaPaznokcie</p>
                        </li>
                        <li className={css.itemAchi}>
                            <PiVideoFill size="40px" color="#BD7FB0" className={css.icon}/>
                            <p className={css.descrAchi}>- Autorka online szkolenia ProReels</p>
                        </li>
                        <li className={css.itemAchi}>
                            <FaLemon size="40px" color="#D492C8" className={css.icon}/>
                            <p className={css.descrAchi}>- Reels na kilka🍋 wyświetleń</p>
                        </li>
                        <li className={css.itemAchi}>
                            <GrUserExpert size="40px" color="#C773B5" className={css.icon}/>
                            <p className={css.descrAchi}>- Ekspert z tworzenia contentu</p>
                        </li>
                    </ul>
                </div>

            
            
        </section>
    )
}