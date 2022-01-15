import React from 'react';

// css
import './style.css';

// MUI
import SearchIcon from '@mui/icons-material/Search';
import Down from '@mui/icons-material/KeyboardArrowDown';
import More from '@mui/icons-material/MoreHoriz';

// custom themes
import checklist from '../img/NavBarIcons/checklist.png';
import noti from '../img/NavBarIcons/noti.png';
import profile from '../img/NavBarIcons/profile.png';
import cart from '../img/NavBarIcons/cart.png';
import flag from '../img/NavBarIcons/mflag.jpg';
import ca1 from '../img/categoryIcons/cate1.png';
import ca2 from '../img/categoryIcons/cate2.png';
import ca3 from '../img/categoryIcons/cate3.png';
import ca4 from '../img/categoryIcons/cate4.png';

function Header() {
    return (

        <>
            <div className="banner">

                <div className="container">

                    <div className="inputbox">
                        <input type="text" placeholder="Search Product"/>
                        <SearchIcon className="search-ic" />
                    </div>

                    <div>
                        <img src="" />
                    </div>

                    <div>
                    </div>

                    <div className="icon-box">
                        <div className="flag">
                            <img src={ flag } className="currency"/>
                            <Down style ={{ color: 'white' }}/>
                        </div>
                        <div>
                            <img src={ checklist } />
                        </div>
                        <div>
                            <img src={ cart } />
                        </div>
                        <div>
                            <img src={ noti } />
                        </div>
                        <div>
                            <img src={ profile } />
                        </div>
                    </div>

                </div>
            </div>

            <div className="category">
                <h1>CATEGORIES</h1>
                <div className="category-list">

                    <div>
                        <img src={ ca1 } />
                        <p className="tagLine">Sample Category</p>
                    </div>

                    <div>
                        <img src={ ca2 } />
                        <p className="tagLine">Sample Category</p>
                    </div>

                    <div>
                        <img src={ ca3 } />
                        <p className="tagLine">Sample Category</p>
                    </div>

                    <div>
                        <img src={ ca4 } />
                        <p className="tagLine">Sample Category</p>
                    </div>

                    <div>
                        <img src={ ca1 } />
                        <p className="tagLine">Sample Category</p>
                    </div>

                    <div>
                        <img src={ ca2 } />
                        <p className="tagLine">Sample Category</p>
                    </div>

                    <div>
                        <img src={ ca3 } />
                        <p className="tagLine">Sample Category</p>
                    </div>

                    <div>
                        <img src={ ca4 } />
                        <p className="tagLine">Sample Category</p>
                    </div>

                    <div className="morediv">
                        <div className="more">
                            <More className="more-ic"/>
                        </div>
                    </div>

                </div>
            </div>
        </>
            
    )
}

export default Header
