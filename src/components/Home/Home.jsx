import React from "react";
import Banner from "../HeroBanner/HeroBanner";
import AboutUs from "../AboutUs/AboutUs";
import OurService from "../OurService/OurService";
import OurTeam from "../OurTeam/OurTeam";
import ContactUs from "../ContactUs/ContactUs";
import FAQ from "../FAQ/FAQ";
import OurSuccess from "../OurSuccess/OurSuccess";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto">
        <AboutUs></AboutUs>
        <OurService></OurService>
        <OurTeam></OurTeam>
      </div>
      <OurSuccess></OurSuccess>
      <div className="max-w-7xl mx-auto">
        <FAQ></FAQ>
      </div>
      <ContactUs></ContactUs>
    </div>
  );
}
