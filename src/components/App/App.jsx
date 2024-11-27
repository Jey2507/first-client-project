import React, { useEffect, useState } from "react";
import Header from "../Header/Header.jsx";
import css from "../App/App.module.css";
import Hero from "../Hero/Hero.jsx";
import AboutMe from "../AboutMe/AboutMe.jsx";
import SectionOneQuestion from "../SectionOneQuestion/SectionOneQuestion.jsx";
import ProReels from "../ProReels/ProReels.jsx";
import Pakiety from "../Pakiety/Pakiety.jsx";
import Insta from "../Insta/Insta.jsx";
import Reviews from "../ReviewFoto/ReviewFoto.jsx";

function App() {
  const [paymentStatus, setPaymentStatus] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const status = params.get('payment_status');
    if (status === 'failed') {
      setPaymentStatus('Оплата не пройшла. Будь ласка, спробуйте ще раз.');
    }
  }, []);

  window.addEventListener('load', () => {
    if (window.location.search.includes("payment_status")) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  });


  return (
    <div className={css.mainDiv}>
      {paymentStatus && (
        <div className={css.paymentErrorMessage} style={{ color: 'red', padding: '20px', textAlign: 'center' }}>
          {paymentStatus}
        </div>
      )}
      <Header />
      <Hero />
      <AboutMe />
      <Reviews />
      <SectionOneQuestion />
      <ProReels />
      <Pakiety />
      <Insta />
    </div>
  );
}

export default App;
