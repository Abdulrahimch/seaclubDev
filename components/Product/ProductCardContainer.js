import card1 from "../../public/assets/product/card1.png";
import card2 from "../../public/assets/product/card2.png";
import card3 from "../../public/assets/product/card3.png";
import style from "../../src/styles/product/productCardContainer.module.css";

/* icons*/
import mousesquare from "../../public/assets/product/mousesquare.png";
import judge from "../../public/assets/product/judge.png";
import hands from "../../public/assets/product/hands.png";

import "swiper/css";
import ProductCard from "./ProductCard";
import ProductBigCard from "./ProductBigCard";
import { useState } from "react";
const ProductCardContainer = () => {
  
  const cardInfo = [
    {
      id: 0,
      img: card1,
      title: "dispute resolution",
      category: "seaclub",
      icon: judge,
      cardType : 'small'
    },
    {
      id: 2,
      img: card2,
      title: "Smart contract escro",
      category: "seaclub",
      icon: hands,
      cardType : 'big'
    },
    {
      id: 3,
      img: card3,
      title: "Seamless onboarding",
      category: "seaclub",
      icon: mousesquare,
      cardType : 'small'
    }
  ];
  const [swiper, setSwiper] = useState(null); //state for card slider
  const [progressValue, setProgressValue] = useState(2.5); // state for maintain value of progress bar
  const [btnAnimation, setBtnAnimation] = useState(false); // state for button animation

  const nextTo = () => {
    if (!btnAnimation) {
      swiper.slideNext(); // first time clicking the next button set slide next
      setProgressValue(progressValue + 1); // increases 1 for the first time click the next button
    } else {
      swiper.slidePrev(); // second time click the button set slider preview
      if (progressValue === cardInfo.length) {
        setProgressValue(progressValue - 0.5); // decrease progress bar value 0.5 if it reach its max.
      } else if (progressValue > 2.5) {
        setProgressValue(progressValue - 1); // decrease progress bar value if its grater then its initial value
      }
    }
    setBtnAnimation(!btnAnimation); // toggle the btnAnimation state
  };

  const prevTo = () => {
    if (btnAnimation) {
      swiper.slideNext(); // after animating the button slide previous button become the slide next button
      if (progressValue <= cardInfo.length) {
        setProgressValue(progressValue + 1); // and increase the value of progress bar if its not reach its max value
      }
    } else {
      swiper.slidePrev(); // if btnAnimation is false then its works as a previous button of slider
      if (progressValue === cardInfo.length) {
        setProgressValue(progressValue - 0.5); // and decrease the value of progress bar 0.5 if its reach its max.
      } else if (progressValue > 2.5) {
        setProgressValue(progressValue - 1); // decrease progress bar value if its grater then its initial value
      }
    }
  };
  return (
    <section className={style.CardFeatures}>
        {/* here user can see all product cards */}
        {cardInfo.map((card) => {
          if(card.cardType == 'big'){
            return(
                <ProductBigCard
                  cardNumber={card.id}
                  cardImg={card.img}
                  title={card.title}
                  category={card.category}
                  icon={card.icon}
                />
            )
          }else{

            return(
              <ProductCard
                cardNumber={card.id}
                cardImg={card.img}
                title={card.title}
                category={card.category}
                icon={card.icon}
              />
          )
            }
            })}
    </section>
  );
};

export default ProductCardContainer;
