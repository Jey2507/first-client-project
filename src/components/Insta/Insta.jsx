import { useEffect, useState } from 'react';
import axios from 'axios';
import css from "../Insta/Insta.module.css";
import gift from "../../assets/images/reviews/gift-box.png";
import { useLanguage } from "../../js/LanguageProvider.jsx"; // Імпортуємо хук для мови

export default function Insta() {
  const { language } = useLanguage(); // Використовуємо хук для отримання поточної мови
  const [courses, setCourses] = useState([]); // Створюємо стан для курсів

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('https://backend-client-50dq.onrender.com/kurs/info');
        setCourses(response.data); // Зберігаємо отримані курси в стан
        console.log(response.data)
      } catch (error) {
        console.error('Помилка при завантаженні курсів:', error);
      }
    };

    fetchCourses(); 
  }, []);

  // Перевірка на наявність курсів, щоб уникнути помилки деструктуризації
  const title = courses?.title || {};
  const description = courses?.description || {};
  const learn = courses?.learn || {};
  const bonuses = courses?.bonuses || {};

  const text = {
    pl: {
      title: title.pl || "Tytuł kursu po polsku",
      description: description.pl || "Opis kursu po polsku",
      learn: learn.pl || "Co się nauczysz po polsku",
      bonuses: bonuses.pl || "Bonusy po polsku",
      noCourses: "Brak dostępnych kursów"
    },
    en: {
      title: "Courses",
      description: description.en || "Course description in English",
      learn: learn.en || "What you will learn in English",
      bonuses: bonuses.en || "Bonuses in English",
      noCourses: "No available courses"
    }
  };

  const splitDescription = (description) => {
    if (description.includes('&')) {
      return description.split('&').map((item, index) => (
        <p key={index} className={css.courseDescription}>- {item}</p> 
      ));
    }
    return <p className={css.courseDescription}>- {description}</p> ;
  };

  const splitText = (text) => {
    if (text.includes('&')) {
      return text.split('&').map((item, index) => (
        <p key={index} className={css.learn}>{item}</p> 
      ));
    }
    return <p className={css.learn}>{text}</p> ;
  };

  const splitBonus = (text) => {
    if (text.includes('&')) {
      return text.split('&').map((item, index) => (
        <div key={index} className={css.boxGift}>
            <img className={css.gift} src={gift} alt="gift" />
            <p className={css.ppp}>{item}</p> 
        </div>
      ));
    }
    return (<div className={css.boxGift}>
                <img className={css.gift} src={gift} alt="gift" />
                <p className={css.ppp}>{text}</p> 
            </div>)
  };

  return (
    <section id="kursy" className={css.sectionPro}>
      <div className={css.containerPro}>
        <h2 className={css.textPro}>{text[language]?.title}</h2>
          {courses.length > 0 ? (
            courses.map((course) => (
            <div key={course.courseId} className={css.boxText}>
              <div  className={css.courseItem}>
                <h3 className={css.descrPro}>{text[language]?.title}</h3>
                
                <div className={css.columnText}>
                  {splitDescription(text[language]?.description)}
                </div>

                <div>
                  {splitText(text[language]?.learn)}
                </div>

                <div className={css.descrCzas}>
                    {splitBonus(text[language]?.bonuses)} 
                </div>

              </div>
              <div className={css.divBuy}>
                <span>
                    <p className={css.priceSmall}>{course.price} PLN</p>
                    <p className={css.descrBuy}>{course.priceSmall}<span className={css.spanBuy}> PLN</span></p>
                </span>
                <button className={css.button3D}>Buy</button>
            </div>
            </div>
            ))
          ) : (
            <p className={css.noCourses}>{text[language]?.noCourses}</p>
          )}
      </div>
    </section>
  );
}
