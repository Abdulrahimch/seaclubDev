import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";

import hands from "../../public/assets/product/hands.png";
import loading from "../../public/assets/product/loading.png";
import style from "../../src/styles/product/productCrad.module.css";
const ProductCard = ({ cardNumber, cardImg, title, category, icon }) => {
  return (
    <div key={cardNumber} className={style.cardBigContainer}>
      <Image className={style.cardImage} src={cardImg} alt="cardImg" />
        <div className={style.feature1}>
          <Image src={icon} className={style.cardIcon} />
                 <span className={style.feature1_span}>{title}</span>
        </div>
      <div className={style.BigCardNavigationItem}>
      <Image src={loading} className={style.cardNavigationItemimg} />
      </div>
    </div>
  );
};

export default ProductCard;
