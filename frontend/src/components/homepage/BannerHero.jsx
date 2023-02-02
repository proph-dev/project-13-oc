import React from "react";
import HeroContent from './HeroContent';
import imgHero from '../../assets/img/bank-tree.jpeg';
import './homepage.css';

export const BannerHero = () => {

    return (
        <div className="hero">
            <img src={ imgHero } alt="" />
            <HeroContent />
        </div> 
    )
}

export default BannerHero;