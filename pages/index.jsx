import React from "react";
import HomeAbout from "../components/homepage/HomeAbout";
import HomeAchievements from "../components/homepage/HomeAchievements";
import HomeHero from "../components/homepage/HomeHero";
import HomeItemsPreview from "../components/homepage/HomeItemsPreview";
import HomePartners from "../components/homepage/HomePartners";
import HomePerks from "../components/homepage/HomePerks";

export default function Home() {
    return (
        <>
            <HomeHero />
            <HomeItemsPreview />
            <HomePerks />
            <HomeAbout />
            <HomeAchievements />
            <HomePartners />
        </>
    )
}
