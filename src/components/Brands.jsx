import getBrands from "@/utils";
import Image from "next/image";
import Link from "next/link";


export default async function Brands() {
  const brands = await getBrands();
  console.log('brands', brands);
  return (
    <>
      <section className="brands"> 
          <h2 className="text-center my-5">Tutustu brändeihimme</h2>
          <ul className="row text-center text-lg-start">
            {brands.map((brand) => (
              <li key={brand.sys.id} className="col-md-4 col-6">
                <Link href={`/brands/${brand.fields.slug}`} className="d-block mb-4 h-100">
                  <div className="image-wrapper">
                    <img 
                      src={brand.fields.brandImage.fields.file.url} alt="brand.fields.brandImage.fields.file.title"
                      width={500}
                      height={500}
                      className="img-fluid img-thumbnail mb-2" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
      </section> 
      
    </>
  );
};