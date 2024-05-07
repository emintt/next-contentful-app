import Brands from "@/components/Brands";
import { getHomePageSection } from "@/utils";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export default async function Home() {
  const homePage = await getHomePageSection();
  console.log('home', homePage[0].fields.hero.fields.heroImage.fields.file.url);
  return (
    <>  
      { homePage && homePage[0] &&
        <>
          <section className="hero">
            <div className=" hero-text">
                {/* <h1 className="hero-heading">Real magic summer</h1>
                <p className="hero-paragraph">Lorem ipsum dolor sit amet. </p>
                <button className="hero-btn">Lue lisää</button> */}
            </div>
            <div className=" hero-image-wrapper">
                <Image 
                  src={`https:${homePage[0].fields.hero.fields.heroImage.fields.file.url}`} 
                  alt="Hero" 
                  width={1920}
                  height={1280}
                />
            </div>
          </section>
      
          <section className=" my-4">
            <h2 className=" text-center fs-2">{homePage[0].fields?.title}</h2>
            <div className=" my-2 home-page rich-text">
              {documentToReactComponents(homePage[0]?.fields.introText)}
            </div>
          </section>
        </>
        
      }
      
      
      <Brands />
    </>
  );
}
