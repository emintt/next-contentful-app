
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { createClient } from 'contentful';
import Image from 'next/image';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

// export async function generateStaticParams() {
//   return [{ id: '1' }, { id: '2' }]
// }
 
// async function getBrand(params) {
//   const res = await fetch(`https://.../posts/${params.id}`)
//   const post = await res.json()
 
//   return post
// }



export default async function BrandsPage({params}) {
  console.log('slug is what is put in [] folder,', params.slug);

  const getProducts = async () => {
    const response = await client.getEntries({
      content_type: 'products',
      'fields.brand.sys.contentType.sys.id': 'brands',
      'fields.brand.fields.slug': params.slug
      });
  
    return response.items;
  };

  const products = await getProducts();
  console.log("1. products brand", params.slug, products[0]);

 
  console.log('desc', products[0]?.fields.productDescription);
  console.log('rich text render', documentToReactComponents(products[0]?.fields.productDescription));
  //console.log('products of brand', products);

  
  return (
    <>
      <section className="medias">
        <h2>Tuotteet</h2>
        <div className="media">
          { products &&
            <>
            <div className="media-content">
              <h3>{products[0]?.fields?.productName}</h3>
              <div className="media-paragraph">{documentToReactComponents(products[0]?.fields.productDescription)}</div>
            </div>
            
            <div className="media-image border">
                <Image 
                  src={"https:" + products[0]?.fields.productImage.fields.file.url }
                  alt={products[0]?.fields.productImage.fields.title} 
                  className="image"
                  width={960}
                  height={768}
                />
            </div>
            </>
          }
        </div>
        <div className="media">
            <div className="media-image">
                <img src="//placehold.it/1280x1024?text=Product" alt="media" className="image"/>
            </div>
            <div className="media-content">
                <h3>Planeettamme, ihmiset ja yhteisöt ovat tärkeitäl</h3>
                <p className="media-paragraph">ore eligendi pariatur quia porro, dicta ipsa velit delectus doloremque ipsam suscipit maxime nobis mollitia rem.</p>
                <button className="media-btn">
                    Lue lisää
                </button>
            </div>
        </div>
        <div className="media">
            <div className="media-content">
                <h3>Planeettamme, ihmiset ja yhteisöt ovat tärkeitäl</h3>
                <p className="media-paragraph">ore eligendi pariatur quia porro, dicta ipsa velit delectus doloremque ipsam suscipit maxime nobis mollitia rem.</p>
                <button className="media-btn">
                    Lue lisää
                </button>
            </div>
            <div className="media-image">
                <img src="//placehold.it/1280x1024?text=Product" alt="media" className="image"/>
            </div>
        </div>
        <div className="media">
            <div className="media-image">
              <img src="//placehold.it/1280x1024?text=Product" alt="media" className="image"/>
            </div>
            <div className="media-content">
                <h3>Planeettamme, ihmiset ja yhteisöt ovat tärkeitäl</h3>
                <p className="media-paragraph">ore eligendi pariatur quia porro, dicta ipsa velit delectus doloremque ipsam suscipit maxime nobis mollitia rem.</p>
                <button className="media-btn">
                    Lue lisää
                </button>
            </div>
            
        </div>

    </section>
    </>
  );
}
