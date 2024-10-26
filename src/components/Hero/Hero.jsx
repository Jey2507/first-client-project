import css from "../Hero/Hero.module.css"
import imagePath from "../../assets/images/about/ania_one_tablet.jpg";


export default function Hero() {
    return (
        <section className={css.divHero}>
            <div>
                <h1 className={css.heroText}>Naucz się tworzyć rolki, dzięki którym zwiększysz swój dochód x2 </h1>
                <p className={css.heroDescr}>Hej, jestem Ania i ja napewno wiem jak zrobić ze by twój content przynosił Ci większy dochód.</p>

                <div className={css.divButton}>
                    <button className={css.heroButtonOne}>Dowiedz się więcej</button>
                    <button className={css.heroButtonTwo}>Dołącz do kursu</button>
                </div>
            </div>
            <img className={css.image} src={imagePath} alt="ania" />
        </section>
    )
}