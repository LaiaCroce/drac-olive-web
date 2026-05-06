import Hero from "../components/Hero/Hero";
import NextEvent from "../components/NextEvent/NextEvent";
import HomeSections from "../components/HomeSections/HomeSections";
import StorySection from "../components/StorySection/StorySection";
import GalleryPreview from "../components/GalleryPreview/GalleryPreview"; 

export default function Home() {
  return (
    <>
      <Hero />
      <NextEvent />
      <StorySection />
      <HomeSections />
      <GalleryPreview />
    </>
  );
}

