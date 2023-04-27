import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";

import style from "../../src/styles/product/productCrad.module.css";
import loading from "../../public/assets/product/loading.png";
const ProductCard = ({ cardNumber, cardImg, title, category, icon}) => {
  return (
    <>
    <div key={cardNumber} className={style.cardContainer}>
      <Image className={style.cardImage} src={cardImg} alt="cardImg" />
      <div className={style.feature1}>
        <Image src={icon} className={style.cardIcon} />
                 <span className={style.feature1_span}>{title}</span>
      </div>
      
      <div className={style.cardBottom}>
        <div className={style.cardNavigationItem}>
          <Image src={loading} className={style.cardNavigationItem} />
        </div>
      </div>
    </div>
   </>
  );
};

export default ProductCard;
