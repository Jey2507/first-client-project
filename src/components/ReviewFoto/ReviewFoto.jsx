import { useRef, useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/css";
import clsx from "clsx";
import css from "../ReviewFoto/ReviewFoto.module.css";
import imageOne from "../../assets/images/reviews/review_four_desc.png";
import imageTwo from "../../assets/images/reviews/review_five_desc.png";

const ReviewFoto = () => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const swiperContainerRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    // Initialize Swiper
    const swiper = new Swiper(swiperContainerRef.current, {
      preventInteractionOnTransition: true,
      navigation: {
        nextEl: nextButtonRef.current,
        prevEl: prevButtonRef.current,
      },
    });

    setSwiperInstance(swiper);

    // Disable the previous button initially
    if (prevButtonRef.current) prevButtonRef.current.disabled = true;

    // Event listener to enable/disable buttons on slide change
    swiper.on("slideChange", () => {
      if (nextButtonRef.current) {
        nextButtonRef.current.disabled = swiper.isEnd;
      }
      if (prevButtonRef.current) {
        prevButtonRef.current.disabled = swiper.isBeginning;
      }
    });

    return () => {
      // Clean up Swiper instance on component unmount
      swiper.destroy();
    };
  }, []);

  const handlePrevClick = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  const handleNextClick = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };

  console.log(css.swipeBtnProjects); // Має вивести згенероване ім'я класу або `undefined`

  return (
    <section className={css.section} id="projects">
      <div className={css.container}>
        <h2 className={css.sectionsTitle}>Opinii</h2>
        <div className="swiper swiper-projects" ref={swiperContainerRef}>
          <ul className={clsx(css.projectsList, "swiper-wrapper")}>
            <li className={clsx(css.projectsListItem, "swiper-slide")}>
              <img src={imageOne} alt="firstFoto" />
            </li>
            <li className={clsx(css.projectsListItem, "swiper-slide")}>
              <img src={imageTwo} alt="secondFoto" />
            </li>
          </ul>
          <div className={css.buttonsThumb}>
            <button
              className={clsx(
                css.swipeBtnProjects,
                "swiper-button-prev",
                "pr-btn-prev"
              )}
              type="button"
              ref={prevButtonRef}
              onClick={handlePrevClick}>
              <svg className={clsx(css.btnSvg, css.btnSvgRight)}>
                <use href="./img/icons.svg#icon-arrow-narrow-right" />
              </svg>
            </button>
            <button
              className={clsx(
                css.swipeBtnProjects,
                "swiper-button-next",
                "pr-btn-next"
              )}
              type="button"
              ref={nextButtonRef}
              onClick={handleNextClick}>
              <svg className={css.btnSvg}>
                <use
                  className={css.iconArrow}
                  href="./img/icons.svg#icon-arrow-narrow-right"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewFoto;
