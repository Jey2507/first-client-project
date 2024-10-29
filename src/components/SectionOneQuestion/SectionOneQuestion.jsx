import css from "../SectionOneQuestion/SectionOneQuestion.module.css";

export default function SectionOneQuestion() {
    return (
        <section className={css.sectionQue}>
            <div className={css.container}>
                <h2 className={css.mainText}>Dla kogo moje szkolenia?</h2>
                <div>
                    <h3 className={css.textSecond}>Dla stylistek/instruktorek beauty branży która sprzedaje swoje usługi. 
                    Które chcą:</h3>
                    <ul className={css.listQue}>
                        <li>
                            <p>- nauczyć się tworzyć trendowe i jednocześnie wyjątkowe rolki</p>
                        </li>
                        <li>
                            <p>- zacząć współpracę z markami</p>
                        </li>
                        <li>
                            <p>- rozwijać swoje social media i przyciągać nowych klientów</p>
                        </li>
                        <li>
                            <p>- tworzyć mega content, który będzie zaczepiał uwagę odbiorców</p>
                        </li>
                        <li>
                            <p>- dla tych kto docenia swój czas i jest zmęczony tym ze ich Rolki nie przenoszą rezultaty</p>
                        </li>
                    </ul>
                </div>
            </div>
            
        </section>
    )
}