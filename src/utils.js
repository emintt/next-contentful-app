import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

// brands [
//   {
//     metadata: { tags: [] },
//     sys: {
//       space: [Object],
//       id: '3i3ajpJscCnWYbyJq6To59',
//       type: 'Entry',
//       createdAt: '2024-05-03T22:33:40.339Z',
//       updatedAt: '2024-05-04T12:43:17.888Z',
//       environment: [Object],
//       revision: 4,
//       contentType: [Object],
//       locale: 'en-US'
//     },
//     fields: {
//       brandName: 'Fuze tea',
//       brandImage: [Object],
//       brandDescription: [Object],
//       slug: 'fuze-tea'
//     }
//   }]

// Retrieve the list of brands from Contentful
const getBrands = async () => {
  const response = await client.getEntries({
    content_type: 'brands',
  });

  return response.items;
};



export default getBrands;