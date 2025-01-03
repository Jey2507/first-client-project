import { useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import css from "../Insta/Insta.module.css";
import gift from "../../assets/images/reviews/gift-box.png";
import { useLanguage } from "../../js/LanguageProvider.jsx"; 
import { handleBuy } from '../../js/stripe.js';
import Loading from '../Loading/Loading.jsx';

export default function Insta() {
  const { language } = useLanguage();
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  const loadCourses = useCallback(async () => {
    const cachedCourses = localStorage.getItem('courses');
    const cachedTime = localStorage.getItem('cachedTime');
    const currentTime = Date.now();
    const cacheDuration = 3600000;

    if (cachedCourses && cachedTime && currentTime - cachedTime < cacheDuration) {
      setCourses(JSON.parse(cachedCourses));
      setIsLoading(false);
    } else {
      try {
        const response = await axios.get('https://backend-client-50dq.onrender.com/kurs/info');
        setCourses(response.data);
        localStorage.setItem('courses', JSON.stringify(response.data));
        localStorage.setItem('cachedTime', currentTime.toString()); 
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setError('Failed to load courses.');
        setIsLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    loadCourses();
  }, [loadCourses]);

  const text = useMemo(() => ({
    pl: {
      mainText: "Kursy",
      noCourses: "Brak dostępnych kursów"
    },
    en: {
      mainText: "Courses",
      noCourses: "No available courses"
    },
  }), []);

  const splitDescription = useCallback((description) => {
    if (!description) return null;
    return description.includes('&')
      ? description.split('&').map((item, index) => (
          <p key={index} className={css.courseDescription}>- {item}</p>
        ))
      : <p className={css.courseDescription}>- {description}</p>;
  }, []);

  const splitText = useCallback((text) => {
    if (text.includes('&')) {
      return text.split('&').map((item, index) => (
        <p key={index} className={css.learn}>{item}</p>
      ));
    }
    return <p className={css.learn}>{text}</p>;
  }, []);

  const splitBonus = useCallback((text) => {
    if (text.includes('&')) {
      return text.split('&').map((item, index) => (
        <div key={index} className={css.boxGift}>
          <img className={css.gift} src={gift} alt="gift" />
          <p className={css.ppp}>{item}</p>
        </div>
      ));
    }
    return (
      <div className={css.boxGift}>
        <img className={css.gift} src={gift} alt="gift" />
        <p className={css.ppp}>{text}</p>
      </div>
    );
  }, []);

  if (isLoading) return <Loading />;

  return (
    <section id="courses" className={css.sectionPro}>
      <div className={css.containerPro}>
        <h2 className={css.textPro}>{text[language]?.mainText}</h2>
        {courses.length > 0 ? (
          courses.map((course) => {
            const title = course.title[language];
            const description = course.description[language];
            const learn = course.learn[language];
            const bonuses = course.bonuses[language];
            
            return (
              <div key={course.courseId} className={css.boxText}>
                <div className={css.courseItem}>
                  <h3 className={css.descrPro}>{title}</h3>
                  <div className={css.columnText}>
                    {splitDescription(description || '')}
                  </div>
                  <div>
                    {splitText(learn || '')}
                  </div>
                  <div className={css.descrCzas}>
                    {splitBonus(bonuses || '')}
                  </div>
                </div>
                <div className={css.divBuy}>
                  <span>
                    <p className={css.priceSmall}>{course.priceSmall} PLN</p>
                    <p className={css.descrBuy}>{course.price}<span className={css.spanBuy}> PLN</span></p>
                  </span>
                  <button className={css.button3D} onClick={() => handleBuy(course.productCode, course.link)}>Buy</button>
                </div>
              </div>
            );
          })
        ) : (
          <p className={css.error}>{text[language]?.noCourses}</p>
        )}
        {error && <p className={css.error}>{error}</p>}
      </div>
    </section>
  );
}
