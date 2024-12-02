import { useRef, useEffect, useState, useCallback } from "react";
import Swiper from "swiper";
import "swiper/css";
import clsx from "clsx";
import css from "../ReviewFoto/ReviewFoto.module.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { fetchImages } from "../../js/operations.js";
import { icons as sprite } from '../../assets/images/index.js';
import { useLanguage } from "../../js/LanguageProvider.jsx"; 

import imageOne from "../../assets/images/reviews/review_one.png";
import imageTwo from "../../assets/images/reviews/review_two.png";
import imageThree from "../../assets/images/reviews/review_three.png";
import imageFour from "../../assets/images/reviews/review_four.png";
import imageFive from "../../assets/images/reviews/review_five.png";
import imageSix from "../../assets/images/reviews/review_six.png";
import imageSeven from "../../assets/images/reviews/review_seven.png";
import imageEigth from "../../assets/images/reviews/review_eigth.png";
import imageNine from "../../assets/images/reviews/review_nine.png";
import imageTen from "../../assets/images/reviews/review_ten.png";
import imageEleven from "../../assets/images/reviews/review_eleven.png";
import imageTwel from "../../assets/images/reviews/review_twel.png";
import imageThird from "../../assets/images/reviews/review_thrid.png";
import imageFourteen from "../../assets/images/reviews/review_fourteen.png";
import imageFiveteen from "../../assets/images/reviews/review_fifteen.png";
import imageSixteen from "../../assets/images/reviews/review_sexteen.png";

const localImages = [
  imageOne, imageTwo, imageThree, imageFour, imageFive,
  imageSix, imageSeven, imageEigth, imageNine, imageTen,
  imageEleven, imageTwel, imageThird, imageFourteen, imageFiveteen, imageSixteen
];
const ReviewFoto = () => {
  const { language } = useLanguage();
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const swiperContainerRef = useRef(null);
  const swiperRef = useRef(null);

  const [images, setImages] = useState(localImages); 
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const text = {
    pl: {
      title: "Opinii",
      clickToOpen: "Kliknij, aby otworzyć",
    },
    en: {
      title: "Reviews",
      clickToOpen: "Click to open",
    }
  };

  // Використовуємо useCallback для оптимізації функції завантаження зображень
  const loadImages = useCallback(async () => {
    const apiImages = await fetchImages();
    const apiImageUrls = apiImages.map((image) => image.url); 
    setImages((prevImages) => [...apiImageUrls, ...prevImages]); 
  }, []);

  useEffect(() => {
    loadImages(); // Завантажуємо зображення лише при першому рендері

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
        swiperRef.current = null;
      }
    };
  }, [loadImages]); 

  useEffect(() => {
    if (prevButtonRef.current && nextButtonRef.current && swiperContainerRef.current && !swiperRef.current) {
      swiperRef.current = new Swiper(swiperContainerRef.current, {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 16,
        navigation: {
          nextEl: nextButtonRef.current,
          prevEl: prevButtonRef.current,
        },
        breakpoints: {
          320: { slidesPerView: 1, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 16 },
          1440: { slidesPerView: 4, spaceBetween: 16 },
        },
      });

      const updateButtonStates = () => {
        if (prevButtonRef.current && nextButtonRef.current) {
          prevButtonRef.current.disabled = swiperRef.current.isBeginning;
          nextButtonRef.current.disabled = swiperRef.current.isEnd;
        }
      };

      swiperRef.current.on("slideChange", updateButtonStates);
    }
  }, [images]);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <section className={css.section} id="projects">
        <div className={css.container}>
          <h2 className={css.sectionsTitle}>{text[language].title}</h2>
          <div className="swiper swiper-projects" ref={swiperContainerRef}>
            <ul className={clsx(css.projectsList, "swiper-wrapper")}>
              {images.map((image, index) => (
                <li
                  key={index}
                  className={clsx(css.projectsListItem, "swiper-slide")}
                  onClick={() => openLightbox(index)} 
                >
                  <img className={css.imageItem} src={image} alt={`photo-${index}`} />
                </li>
              ))}
            </ul>
            <div className={css.buttonsThumb}>
              <button
                onClick={() => {swiperRef.current.slidePrev()}}
                className={clsx(css.swipeBtnProjects, "swiper-button-prev")}
                type="button"
                ref={prevButtonRef}
              >
                <svg className={clsx(css.btnSvg, css.btnSvgRight)}>
                  <use xlinkHref={`${sprite}#icon-arrow-narrow-right`} />
                </svg>
              </button>
              <button
                onClick={() => {swiperRef.current.slideNext()}}
                className={clsx(css.swipeBtnProjects, "swiper-button-next")}
                type="button"
                ref={nextButtonRef}
              >
                <svg className={css.btnSvg}>
                  <use xlinkHref={`${sprite}#icon-arrow-narrow-right`} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={images.map((src) => ({ src }))}
          index={photoIndex}
          onIndexChange={setPhotoIndex}
          className={css.yarl__container}
        />
      )}
    </>
  );
};

export default ReviewFoto;
