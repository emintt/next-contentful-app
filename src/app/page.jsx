import Brands from "@/components/Brands";

export default async function Home() {
  return (
    <>
      <section className="hero">
        <div className=" hero-text">
            <h1 className="hero-heading">Real magic summer</h1>
            <p className="hero-paragraph">Lorem ipsum dolor sit amet. </p>
            <button className="hero-btn">Lue lisää</button>
        </div>
        <div>
            <img src="http://localhost/wordpress-project/wp-content/themes/huhtikuu/images/width1960-1.png" alt="Hero" />
        </div>
      </section>
      
        <Brands />
    </>
  );
}
