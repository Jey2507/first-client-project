import css from "../Hero/Hero.module.css"
import imagePath from "../../assets/images/about/ania_one_tablet.jpg";
import imagePathDesktop from "../../assets/images/about/ania_one_desc.jpg";


export default function Hero() {
    return (
        <section className={css.divHero}>
            <div>
                <h1 className={css.heroText}>Naucz się tworzyć rolki, dzięki którym zwiększysz swój dochód x2 </h1>
                <div className={css.divBack}>
                    <p className={css.heroDescr}>Hej, jestem Ania i ja napewno wiem jak zrobić ze by twój content przynosił Ci większy dochód.</p>
                </div>
               

                <div className={css.divButton}>
                    <a className={css.heroButtonOne} href="#aboutMe">Dowiedz się więcej</a>
                    <a className={css.heroButtonTwo}>Dołącz do kursu</a>
                </div>
            </div>
            <img className={css.image} src={imagePath} alt="ania" />
            <img className={css.imageDesc} src={imagePathDesktop} alt="ania" />
        </section>
    )
}