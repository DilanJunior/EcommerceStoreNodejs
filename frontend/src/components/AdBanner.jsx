
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
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
    }] 

     const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };
    
    return (
      <div className="ad-banner z-0">
      <Slider {...settings}>
        {ads.map((ad) => (
          <div key={ad.id} className="ad relative w-full">
            <img src={ad.image} alt={ad.title} className="ad-image w-full h-64 object-cover" />
            <div className="carousel-caption absolute bottom-0 bg-black bg-opacity-50 w-full text-white p-2">
              <h3 className="text-lg font-bold">{ad.title}</h3>
              <p className="text-sm">{ad.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>)
};

export default AdBanner;
