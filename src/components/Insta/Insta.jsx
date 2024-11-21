import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import css from "../Insta/Insta.module.css";
import gift from "../../assets/images/reviews/gift-box.png";
import { useLanguage } from "../../js/LanguageProvider.jsx"; 

const stripePromise = loadStripe('pk_live_51QKOCeFhNgTlpvpSHo1hkgln2LH8EIPPEru1PLetMl6rUH1lpFhfQm0KfPE5xFvZMG3XcboZOJaRLuC1Qmivtgn400GhwfmWsa');

export default function Insta() {
  const { language } = useLanguage();
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('https://backend-client-50dq.onrender.com/kurs/info');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setError('Failed to load courses.');
      }
    };
    fetchCourses();
  }, []);

  const text = useMemo(() => ({
    pl: {
      mainText: "Kursy",
      title: "",
      description: "",
      learn: "",
      bonuses: "",
      noCourses: "Brak dostępnych kursów"
    },
    en: {
      mainText: "Courses",
      title: "",
      description: "",
      learn: "",
      bonuses: "",
      noCourses: "No available courses"
    },
  }), []);

  const splitDescription = (description) => {
    if (!description) return null;
    return description.includes('&')
      ? description.split('&').map((item, index) => (
          <p key={index} className={css.courseDescription}>- {item}</p>
        ))
      : <p className={css.courseDescription}>- {description}</p>;
  };

  const splitText = (text) => {
    if (text.includes('&')) {
      return text.split('&').map((item, index) => (
        <p key={index} className={css.learn}>{item}</p>
      ));
    }
    return <p className={css.learn}>{text}</p>;
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
    return (
      <div className={css.boxGift}>
          <img className={css.gift} src={gift} alt="gift" />
          <p className={css.ppp}>{text}</p>
      </div>
    );
  };

  const handleBuy = async (priceId) => {
    const stripe = await stripePromise;
    console.log(stripe,"dkfjdkfjdkfjdfj")
    try {
      const response = await axios.post('https://backend-client-50dq.onrender.com/create-checkout-session', {
        priceId
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const session = response.data;

      const result = await stripe.redirectToCheckout({ sessionId: session.id });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error("Помилка під час створення сесії:", error);
    }
  };

  return (
    <section id="kursy" className={css.sectionPro}>
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
                    <p className={css.priceSmall}>{course.price} PLN</p>
                    <p className={css.descrBuy}>{course.priceSmall}<span className={css.spanBuy}> PLN</span></p>
                  </span>
                  <button className={css.button3D} onClick={() => handleBuy(course.productCode)}>Buy</button>
                </div>
              </div>
            );
          })
        ) : (
          <p className={css.noCourses}>{text[language]?.noCourses}</p>
        )}
        {error && <p className={css.error}>{error}</p>}
      </div>
    </section>
  );
}
