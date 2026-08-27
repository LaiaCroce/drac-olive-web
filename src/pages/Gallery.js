import Hero from "../components/Hero/Hero";
import IntroSection from "../components/IntroSection/IntroSection";
import GalleryGrid from "../components/GalleryGrid/GalleryGrid";
import ImageBanner from "../components/ImageBanner/ImageBanner";
import Footer from "../components/Footer/Footer";

export default function Galeria(){

    return(

        <main>

            <Hero
                kicker="Drac Olivé"
                title="Galeria"
                description="Un recull dels nostres millors moments."
            />

            <IntroSection
                eyebrow="Moments"
                title="El foc en imatges"
                text="Aquí hi aniran totes les fotografies de la colla classificades per categories."
            />

            <GalleryGrid/>

            <ImageBanner
                eyebrow="Moments únics"
                quote="Cada actuació deixa una història."
                text="Aquí més endavant hi posarem una fotografia espectacular."
            />

            <Footer/>

        </main>

    )

}