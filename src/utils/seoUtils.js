export const generateHotelSchema = (hotelData = {}) => {
  const defaultData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Five Clover Hotel Ilupeju",
    "description": "Luxury hotel accommodation in the heart of Ilupeju, Lagos. Experience comfort and excellent service at Five Clover Hotel.",
    "url": "https://fivecloverilupeju.fivecloverhotels.com",
    "logo": "https://fivecloverilupeju.fivecloverhotels.com/five%20clover%20logo.webp",
    "priceRange": "$$",
    "starRating": {
      "@type": "Rating",
      "ratingValue": "4.5",
      "bestRating": "5"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1-5 Ogunlana Drive, Ilupeju",
      "addressLocality": "Lagos",
      "postalCode": "100001",
      "addressCountry": "NG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "6.5535",
      "longitude": "3.3665"
    },
    "telephone": "+2348123456789",
    "email": "info@fivecloverhotel.com",
    "sameAs": [
      "https://www.facebook.com/fivecloverhotel",
      "https://www.instagram.com/fivecloverhotel",
      "https://twitter.com/fivecloverhotel",
      "https://www.fivecloverhotels.com"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ]
  };

  return JSON.stringify({ ...defaultData, ...hotelData });
};

export const generateBreadcrumbSchema = (items = []) => {
  const defaultItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://fivecloverilupeju.fivecloverhotels.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Rooms",
      "item": "https://fivecloverilupeju.fivecloverhotels.com/rooms"
    }
  ];

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.length > 0 ? items : defaultItems
  };

  return JSON.stringify(breadcrumbList);
};
