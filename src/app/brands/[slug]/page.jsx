
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { createClient } from 'contentful';
import Image from 'next/image';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

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
        { products && products.map((product, index) => (
          index % 2 ?
          <>
            <div className="media">
              <div className="media-content">
                <h3>{product.fields?.productName}</h3>
                <div className="media-paragraph">{documentToReactComponents(product.fields.productDescription)}</div>
              </div>
              
              <div className="media-image border">
                  <Image 
                    src={`https:${product.fields.productImage.fields.file.url}` || "https://placehold.it/1280x1024?text=Product" }
                    alt={product.fields.productImage.fields.title} 
                    className="image"
                    width={644}
                    height={644}
                    style={{objectFit: 'contain', height: 'auto'}}
                  />
              </div>
            </div>
          </> :
          <>
          <div className="media">
            <div className="media-image border">
              <Image 
                src={`https:${product.fields.productImage.fields.file.url}` || "https://placehold.it/1280x1024?text=Product" }
                alt={product.fields.productImage.fields.title} 
                className="image"
                width={644}
                height={644}
                style={{objectFit: 'contain', height: 'auto'}}
              />
            </div>
            <div className="media-content">
              <h3>{product.fields?.productName}</h3>
              <div className="media-paragraph">{documentToReactComponents(product.fields.productDescription)}</div>
            </div>
          </div>
        </>

        ))}
    </section>
    </>
  );
}
