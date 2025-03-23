import css from './Home.module.css'
import React from 'react';
import Offer from '../../Components/Offer/Offer';
import HomePageGallery from '../../Components/HomePageGallery/HomePageGallery';
import GoogleMapsLink from '../../Components/GoogleMapsLink/GoogleMapsLink';
import Address from '../../Components/SectionAddress/SectionAddress';
import SewingMachineImage from '../../Components/BackgroundSection/BackgroundSection';



const Home = () => {
    return (
    <>
      <SewingMachineImage />
      <Address />
      <GoogleMapsLink
        address="ul. Strażacka 39, Jędrzejów"
        label="Otwórz w Mapach Google"
      />
      <HomePageGallery />
      <Offer />
    </>)
}

export default Home;