import React from 'react';

// AliceCarousel
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

// MUI
import Bag from '@mui/icons-material/LocalMall';
import Like from '@mui/icons-material/FavoriteBorder';

// css
import './style.css';

// custom import
import ad1 from '../img/ads/ad1.png';
import ad2 from '../img/ads/ad2.png';
import ad3 from '../img/ads/ad3.png';
import apple from '../img/brands/apple.png';
import samsung from '../img/brands/samsung.png';
import google from '../img/brands/google.png';
import oneplus from '../img/brands/oneplus.png';
import mi from '../img/brands/mi.png';
import realme from '../img/brands/realme2.png';
import huawei from '../img/brands/huawei.jpg';

function Carousel() {
    return (
        <>
            <div className="carousel-div">
                <AliceCarousel autoPlay autoPlayInterval="2000">
                    <img src={ad1} className="sliderimg"/>
                    <img src={ad2} className="sliderimg"/>
                    <img src={ad3} className="sliderimg"/>
                </AliceCarousel>
            </div>

            <div className="buyGet-w" >
                <h1>VIEW BY BRANDS</h1>
                <div className="brandList">
                    <img src={apple} />
                    <img src={samsung} />
                    <img src={google} />
                    <img src={oneplus} />
                    <img src={mi} />
                    <img src={realme} />
                    <img src={huawei} />
                    <p>View All</p>
                    
                </div>
                
            </div>
            <hr/>

            <div className="buyGet-w">
                <h1>PHONE</h1>
                <div className="productList-promo">
                    <div>
                        <div className="product-img">
                            <p className="promo">0.0% off</p>
                            <Like className="heart-ic" />
                            <p className="bag" ><Bag className="bag-ic" /></p>
                        </div>
                        <p className="productName">Sample Products with long name</p>
                        <p className="productPrice" style={{ color: "red" }}>54,000 Ks</p>
                        <p className="oldPrice" >60,000 Ks</p>
                    </div>
                    <div>
                        <div className="product-img">
                            <p className="promo">0.0% off</p>
                            <Like className="heart-ic" />
                            <p className="bag" ><Bag className="bag-ic" /></p>
                        </div>
                        <p className="productName">Sample Products with long name</p>
                        <p className="productPrice" style={{ color: "red" }}>54,000 Ks</p>
                        <p className="oldPrice" >60,000 Ks</p>
                    </div>
                    <div>
                        <div className="product-img">
                            <p className="promo">0.0% off</p>
                            <Like className="heart-ic" />
                            <p className="bag" ><Bag className="bag-ic" /></p>
                        </div>
                        <p className="productName">Sample Products with long name</p>
                        <p className="productPrice" style={{ color: "red" }}>54,000 Ks</p>
                        <p className="oldPrice" >60,000 Ks</p>
                    </div>
                    <div>
                        <div className="product-img">
                            <p className="promo">0.0% off</p>
                            <Like className="heart-ic" />
                            <p className="bag" ><Bag className="bag-ic" /></p>
                        </div>
                        <p className="productName">Sample Products with long name</p>
                        <p className="productPrice" style={{ color: "red" }}>54,000 Ks</p>
                        <p className="oldPrice" >60,000 Ks</p>
                    </div>
                    <div>
                        <div className="product-img">
                            <p className="promo">0.0% off</p>
                            <Like className="heart-ic" />
                            <p className="bag" ><Bag className="bag-ic" /></p>
                        </div>
                        <p className="productName">Sample Products with long name</p>
                        <p className="productPrice" style={{ color: "red" }}>54,000 Ks</p>
                        <p className="oldPrice" >60,000 Ks</p>
                    </div>
                    <div>
                        <div className="product-img">
                            <p className="promo">0.0% off</p>
                            <Like className="heart-ic" />
                            <p className="bag" ><Bag className="bag-ic" /></p>
                        </div>
                        <p className="productName">Sample Products with long name</p>
                        <p className="productPrice" style={{ color: "red" }}>54,000 Ks</p>
                        <p className="oldPrice" >60,000 Ks</p>
                    </div>
                   
                </div>
            </div> <hr/>

            <div className="buyGet-w">
                <h1>LAPTOP</h1>
                <div className="productList-promo">
                    <div>
                        <div className="product-img">
                            <p className="promo">0.0% off</p>
                            <Like className="heart-ic" />
                            <p className="bag" ><Bag className="bag-ic" /></p>
                        </div>
                        <p className="productName">Sample Products with long name</p>
                        <p className="productPrice" style={{ color: "red" }}>54,000 Ks</p>
                        <p className="oldPrice" >60,000 Ks</p>
                    </div>
                    <div>
                        <div className="product-img">
                            <p className="promo">0.0% off</p>
                            <Like className="heart-ic" />
                            <p className="bag" ><Bag className="bag-ic" /></p>
                        </div>
                        <p className="productName">Sample Products with long name</p>
                        <p className="productPrice" style={{ color: "red" }}>54,000 Ks</p>
                        <p className="oldPrice" >60,000 Ks</p>
                    </div>
                    <div>
                        <div className="product-img">
                            <p className="promo">0.0% off</p>
                            <Like className="heart-ic" />
                            <p className="bag" ><Bag className="bag-ic" /></p>
                        </div>
                        <p className="productName">Sample Products with long name</p>
                        <p className="productPrice" style={{ color: "red" }}>54,000 Ks</p>
                        <p className="oldPrice" >60,000 Ks</p>
                    </div>
                    <div>
                        <div className="product-img">
                            <p className="promo">0.0% off</p>
                            <Like className="heart-ic" />
                            <p className="bag" ><Bag className="bag-ic" /></p>
                        </div>
                        <p className="productName">Sample Products with long name</p>
                        <p className="productPrice" style={{ color: "red" }}>54,000 Ks</p>
                        <p className="oldPrice" >60,000 Ks</p>
                    </div>
                    <div>
                        <div className="product-img">
                            <p className="promo">0.0% off</p>
                            <Like className="heart-ic" />
                            <p className="bag" ><Bag className="bag-ic" /></p>
                        </div>
                        <p className="productName">Sample Products with long name</p>
                        <p className="productPrice" style={{ color: "red" }}>54,000 Ks</p>
                        <p className="oldPrice" >60,000 Ks</p>
                    </div>
                    <div>
                        <div className="product-img">
                            <p className="promo">0.0% off</p>
                            <Like className="heart-ic" />
                            <p className="bag" ><Bag className="bag-ic" /></p>
                        </div>
                        <p className="productName">Sample Products with long name</p>
                        <p className="productPrice" style={{ color: "red" }}>54,000 Ks</p>
                        <p className="oldPrice" >60,000 Ks</p>
                    </div>
                   
                </div>
            </div> <hr/>

            <div className="buyGet-w">
                <h1>TABLET</h1>
                <div className="productList-promo">
                    <div>
                        <div className="product-img">
                            <p className="promo">0.0% off</p>
                            <Like className="heart-ic" />
                            <p className="bag" ><Bag className="bag-ic" /></p>
                        </div>
                        <p className="productName">Sample Products with long name</p>
                        <p className="productPrice" style={{ color: "red" }}>54,000 Ks</p>
                        <p className="oldPrice" >60,000 Ks</p>
                    </div>
                    <div>
                        <div className="product-img">
                            <p className="promo">0.0% off</p>
                            <Like className="heart-ic" />
                            <p className="bag" ><Bag className="bag-ic" /></p>
                        </div>
                        <p className="productName">Sample Products with long name</p>
                        <p className="productPrice" style={{ color: "red" }}>54,000 Ks</p>
                        <p className="oldPrice" >60,000 Ks</p>
                    </div>
                    <div>
                        <div className="product-img">
                            <p className="promo">0.0% off</p>
                            <Like className="heart-ic" />
                            <p className="bag" ><Bag className="bag-ic" /></p>
                        </div>
                        <p className="productName">Sample Products with long name</p>
                        <p className="productPrice" style={{ color: "red" }}>54,000 Ks</p>
                        <p className="oldPrice" >60,000 Ks</p>
                    </div>
                    <div>
                        <div className="product-img">
                            <p className="promo">0.0% off</p>
                            <Like className="heart-ic" />
                            <p className="bag" ><Bag className="bag-ic" /></p>
                        </div>
                        <p className="productName">Sample Products with long name</p>
                        <p className="productPrice" style={{ color: "red" }}>54,000 Ks</p>
                        <p className="oldPrice" >60,000 Ks</p>
                    </div>
                    <div>
                        <div className="product-img">
                            <p className="promo">0.0% off</p>
                            <Like className="heart-ic" />
                            <p className="bag" ><Bag className="bag-ic" /></p>
                        </div>
                        <p className="productName">Sample Products with long name</p>
                        <p className="productPrice" style={{ color: "red" }}>54,000 Ks</p>
                        <p className="oldPrice" >60,000 Ks</p>
                    </div>
                    <div>
                        <div className="product-img">
                            <p className="promo">0.0% off</p>
                            <Like className="heart-ic" />
                            <p className="bag" ><Bag className="bag-ic" /></p>
                        </div>
                        <p className="productName">Sample Products with long name</p>
                        <p className="productPrice" style={{ color: "red" }}>54,000 Ks</p>
                        <p className="oldPrice" >60,000 Ks</p>
                    </div>
                   
                </div>
            </div> 

            
        </>
    )
}

export default Carousel;
