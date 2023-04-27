import { useEffect, useRef, useState } from "react";
import Layout from "../../../components/Layout";
import ProductCardContainer from "../../../components/Product/ProductCardContainer";
import ProductHero from "../../../components/Product/ProductHero";
import ProductOverlay from "../../../components/Product/ProductOverlay";
import ProductSidebar from "../../../components/Product/ProductSidebar";
import style from "../../styles/product/product.module.css";
const Product = () => {
  // based on this state details of product is show as a overlay
  const [showOverlay, setShowOverlay] = useState(false);
  // this state set the overlay height
  const [OverlayHeight, setOverlayHeight] = useState(0);
  // this state set the product page height
  const [divHeight, setDivHeight] = useState(0);
  // when user click the read more button the this handler is fired and go to the top and set state to show and hide overlay
  const handleClick = () => {
    setShowOverlay(!showOverlay);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // set the Product page hight to the state
  const divRef = useRef(null);
  useEffect(() => {
    if (divRef.current) {
      const divHeight = divRef.current.offsetHeight;
      setDivHeight(divHeight);
    }
  }, []);
  // calculate the padding of Product page dynamically
  let bottomPadding = OverlayHeight - divHeight;
  return (
    <Layout>
      <section className={style.productContainer}>
        {/* set padding for show the hole overlay page */}
        <section
          style={{
            paddingBottom: `${showOverlay ? bottomPadding : 0}px`,
          }}
          className={style.mainContent}
        >
          <div className={style.topText}>
            <div className={style.topTextH1Container}>
              <h1 className={style.topTextH1}>Decentralized Collaboration</h1>
            </div>
            <div className={style.topTextPContainer}>
               <p className={style.topTextP}>
                The <br/> key to <br/>unlocking <br/>the future<br/> of work
              </p>
            </div>
          </div>
          <div ref={divRef} className={style.cardsContainer}>
            {/* this is all container fro product page */}
              <ProductCardContainer />
          </div>
          {/* this is overlay page  */}
          <div style={{ color: "black" }}>
            <productOverlay
              setOverlayHeight={setOverlayHeight}
              showOverlay={showOverlay}
              setShowOverlay={setShowOverlay}
            />
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default Product;
