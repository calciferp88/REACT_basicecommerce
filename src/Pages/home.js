import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../Components/header';
import Productlist from '../Components/productlist';
import Carousel from '../Components/carousel';
import Footer from '../Components/footer';


    export default function Home() {
    return(

            <>
            <Header />
            <Productlist />
            <Carousel />
            <Footer />
            </>
        )
    }       
      
