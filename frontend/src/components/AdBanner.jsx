import React from "react";
import "./AdBanner.css";
import { Carousel } from "react-bootstrap";

const AdBanner = () => {
  const ads = [
    {
      id: 1,
      title: "Ad 1",
      description: "This is the first ad",
      image: "https://images.krisshop.com/cms/cj6qgDr7lCCEUcHJPxgKwmgNXMgp3afUD4yjUKzyHzA/0x0/bWVkaWEvZ2VuZS1jbXMvMS81LzE1MzYteC03MDAtX3dpdGgtc2hvcC1ub3dfLmpwZw", // URL de imagen válida
    },
    {
      id: 2,
      title: "Ad 2",
      description: "This is the second ad",
      image: "https://images.krisshop.com/cms/oVlck-0keK9fnaEVuu-rdbrrysNPxoKaINDMTAgeuy0/1536x/bWVkaWEvZ2VuZS1jbXMvMC83LzA3MjRfYXRvbWUtMTUzNHg4NjRfMS5qcGc", // URL de imagen válida
    },
    {
      id: 3,
      title: "Ad 3",
      description: "This is the third ad",
      image: "https://via.placeholder.com/800x400", // URL de imagen válida
    },
  ];

  return (
    <div className="ad-banner">
      <Carousel>
        {ads.map((ad) => (
          <Carousel.Item key={ad.id}>
            <div className="ad">
              <img src={ad.image} alt={ad.title} className="ad-image" />
            </div>

            <Carousel.Caption>
              <h3>{ad.title}</h3>
              <p>{ad.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default AdBanner;
