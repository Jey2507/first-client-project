import { useMemo } from "react";
import css from "../Pakiety/Pakiety.module.css"; // Імпортуємо стилі
import clsx from "clsx";
import { useLanguage } from "../../js/LanguageProvider.jsx"; // Імпортуємо хук для мови
import { handleBuy } from "../../js/stripe.js";
import PropTypes from 'prop-types';

const Package = ({ description, title, price, salePrice, buttonHandler, buttonText, language, packageType, text }) => {
  return (
    <li className={clsx(css.package, css[packageType])}>
      {description && description.length > 0 && (
        <div>
          {description.map((desc, idx) => <p key={idx}>- {desc}</p>)}
        </div>
      )}
      <a className={clsx(css.linkPak, css[packageType])}>{title}</a>
      <div className={css.divBuy}>
        <span>
          <p className={css.priceSmall}>{price} PLN</p>
          <p className={clsx(css.descrBuy, css[packageType])}>
            {text[language].price}: <span className={css.spanBuy}>{salePrice} PLN</span>
          </p>
        </span>
        <button onClick={buttonHandler} className={clsx(css.button3D, css[packageType])}>
          {buttonText}
        </button>
      </div>
    </li>
  );
};

Package.propTypes = {
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  salePrice: PropTypes.string.isRequired,
  buttonHandler: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  packageType: PropTypes.string.isRequired,
  text: PropTypes.object.isRequired, // Додаємо валідацію для text
};

export default function Pakiety() {
  const { language } = useLanguage();

  // Тексти для двох мов
  const text = useMemo(() => ({
    pl: {
      title: "Do wyboru:",
      package1: "Pakiet1: Tylko oglądać",
      package2: "Pakiet2: Standart",
      package3: "Pakiet Vip:",
      price: "Cena",
      buy: "Kupić",
      access: "dostęp do 5 modułów",
      groupChat: "dostęp do czatu grupowego",
      zoom: "zoom",
      homework: "sprawdzanie pracy domowej i odwrotna info.",
      bonus: "dostęp do bonusu 6 modułów",
      vipBonus: "bonus online kurs „InstaPaznokcie”",
      noAccess: "Brak dostępu do kursów",
    },
    en: {
      title: "Choose from:",
      package1: "Package 1: View Only",
      package2: "Package 2: Standard",
      package3: "VIP Package:",
      price: "Price",
      buy: "Buy",
      access: "access to 5 modules",
      groupChat: "access to group chat",
      zoom: "zoom",
      homework: "homework checking and feedback.",
      bonus: "access to bonus 6 modules",
      vipBonus: "bonus online course 'InstaPaznokcie'",
      noAccess: "No available packages",
    }
  }), []);

  const packages = [
    {
      title: text[language].package1,
      description: [text[language].access, text[language].groupChat],
      price: "420",
      salePrice: "380",
      buttonHandler: () => handleBuy('price_1QPs03RpHtXeYF3Zs2P7E7MB', "https://t.me/+20nXNO3gGNY3NWM0"),
      buttonText: text[language].buy,
      packageType: "bronze"
    },
    {
      title: text[language].package2,
      description: [text[language].access, text[language].groupChat, text[language].zoom, text[language].homework, text[language].bonus],
      price: "690",
      salePrice: "590",
      buttonHandler: () => handleBuy('price_1QPs1GRpHtXeYF3ZCOgGfzF9', "https://t.me/+20nXNO3gGNY3NWM0"),
      buttonText: text[language].buy,
      packageType: "silver"
    },
    {
      title: text[language].package3,
      description: [text[language].access, "osobny czat", "osobne zoom", "osobna analiza", text[language].bonus, text[language].vipBonus],
      price: "1500",
      salePrice: "1300",
      buttonHandler: () => handleBuy('price_1QPs2XRpHtXeYF3Zd1wXJY9a', "https://t.me/+20nXNO3gGNY3NWM0"),
      buttonText: text[language].buy,
      packageType: "gold"
    }
  ];

  return (
    <section className={css.sectionPak} id="packages">
      <h2 className={css.textPakiety}>{text[language].title}</h2>
      <ul className={css.listPak}>
        {packages.map((pkg, index) => (
          <Package
            key={index}
            {...pkg}
            language={language}
            text={text} // Передаємо text як пропс
          />
        ))}
      </ul>
    </section>
  );
}
