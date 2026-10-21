// =====================================================================
// SITE SETTINGS — edit this file to change the business details.
//
// Everything that shows up in more than one place lives here:
//   - business name, phone, email, social links
//   - the list of cities you serve
//   - the contact-form endpoint (Formspree)
//   - every image URL on the site
//
// Change a value here, save, and every page updates.
// =====================================================================

export const site = {
  name: 'Ace Link Fence Ltd.',
  shortName: 'Ace Link Fence',
  tagline: 'Family-owned, Surrey BC',
  url: 'https://acelinkfenceltd.ca',

  // Phone: "display" is what people see, "tel" is what the phone dials.
  phone: {
    display: '604-825-8777',
    tel: '16048258777',
  },
  email: 'sales@acelinkfenceltd.ca',

  address: {
    city: 'Surrey',
    region: 'BC',
    country: 'CA',
  },

  social: {
    facebook: 'https://www.facebook.com/acelinkfenceltd',
    instagram: 'https://www.instagram.com/acelinkfence/',
  },

  // Cities listed in "Where we work", the contact panel and the search-engine data.
  serviceAreas: [
    'Surrey',
    'Langley',
    'Abbotsford',
    'Aldergrove',
    'Delta',
    'Richmond',
    'Burnaby',
    'Coquitlam',
    'New Westminster',
    'Vancouver',
    'Maple Ridge',
    'Pitt Meadows',
    'Mission',
  ],

  // CONTACT FORM
  // 1. Make a free account at https://formspree.io
  // 2. Create a new form and set it to email sales@acelinkfenceltd.ca
  // 3. Copy the form's endpoint (looks like https://formspree.io/f/abcdwxyz)
  //    and paste it below in place of YOUR_FORM_ID.
  formEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
};

// =====================================================================
// IMAGES
// These currently load from the client's old website. To host them yourself,
// download each file into /public/images and change the URL to e.g.
// '/images/5-13-2.jpg'. See README.md for details.
// =====================================================================
const U = 'https://acelinkfenceltd.ca/wp-content/uploads/';

export const images = {
  hero: U + '2019/08/5-13-2.jpg',
  family: U + '2019/08/1-12-4.jpg',
  ogImage: U + '2019/08/5-13-2.jpg',
};

// The 8 service tiles on the home page.
export const services = [
  { tag: 'COM', title: 'Commercial fencing', img: U + '2019/08/15.jpg', desc: 'Perimeter chain link and steel for yards, lots and facilities.' },
  { tag: 'RES', title: 'Residential fencing', img: U + '2019/08/14.jpg', desc: 'Chain link, privacy and decorative fences for homes.' },
  { tag: 'GATE', title: 'Gates', img: U + '2019/08/10.jpg', desc: 'Cantilever, swing and custom-welded gates.' },
  { tag: 'ENCL', title: 'Enclosures', img: U + '2019/08/13.jpg', desc: 'Custom chain link enclosures, kennels and storage cages.' },
  { tag: 'SPORT', title: 'Courts and pools', img: U + '2021/04/20201009_112547-e1618427322305.jpg', desc: 'Tennis and sport court fencing, netting and pool fences.' },
  { tag: 'WELD', title: 'Welded handrails', img: U + '2019/08/12.jpg', desc: 'Steel handrails fabricated and welded to fit.' },
  { tag: 'CLAD', title: 'Cladding and ornamental', img: U + '2019/11/1-2-1.jpg', desc: 'Low-maintenance cladding and decorative steel fences.' },
  { tag: 'SEC', title: 'Security', img: U + '2019/11/1-3-1.jpg', desc: 'Bollards, razor wire and extra-security fencing.' },
];

// The 21 photos on the Projects page (in order).
export const gallery = [
  '2019/08/5-13-2.jpg', '2019/08/1-12-4.jpg', '2019/08/1-1-9.jpg', '2019/08/3-4-8.jpg',
  '2019/08/1-3-12.jpg', '2019/08/4-1-4.jpg', '2019/08/2-25.jpg', '2019/08/7-2-1.jpg',
  '2019/08/4-28-1.jpg', '2019/08/4-27-1.jpg', '2019/08/20-5.jpg', '2019/08/20-4-1.jpg',
  '2019/08/16-2-1.jpg', '2019/08/10-2-2.jpg', '2019/08/10-3-1.jpg', '2019/08/2-1-12.jpg',
  '2019/08/2-3-11.jpg', '2019/08/2-2-11.jpg', '2019/08/1-26-2.jpg', '2019/08/1-8-7.jpg',
  '2019/08/1-18-2.jpg',
].map((p) => U + p);
