import React from 'react'
// css
import './style.css';

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-container">
                    <div className="footerTab">
                        <h2>Customer Service</h2>
                        <p>Terms & Privacy Policy</p>
                        <p>Return Policy</p>
                    </div>

                    <div className="footerTab">
                        <h2>Language</h2>
                        <p>Myanmar (Unicode)</p>
                        <p>Enlgish</p>
                    </div>

                    <div className="footerTab">
                        <h2>Contact Us</h2>
                        <p>No 17B, MyayKha St, Mayangone, 6 Miles, Yangon, Myanmar</p>
                        <p>+95 9 345 454 345</p>
                    </div>
                </div>
            </div>
            <div className="copyright"><p>All rights reserved. Made with all the love in ShopDoora Co., Ltd.</p></div>
        </>
    )
}

export default Footer;
