
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const AdBanner = () => {
  const ads = [
   {
      id: 1,
      title: "Ad 1",
      description: "This is the first ad",
      image: "https://via.placeholder.com/800x400"    },
    {
      id: 2,
      title: "Ad 2",
      description: "This is the second ad",
      image: "https://via.placeholder.com/800x400"   },
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
      <div className="flex flex-col md:flex-row md:justify-around items-center md:m-5">
        
  <div className="ad-banner z-0 w-full md:w-3/5  mb-4 rounded-lg">
    <Slider {...settings} className="rounded-lg">
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
  </div>

  <div className=" p-4 w-full md:w-4/12">
    <div>
      <h1 className="text-white text-2xl font-playfair">Bienvenido a Bisutería Jacky</h1>
      <p className="text-gray-300 mb-2 font-extralight">Ofrecemos una variedad de piezas elegantes y modernas, perfectas para cualquier ocasión, desde eventos formales hasta el día a día.</p>
      </div>

      
      <div className="">
  <ul className="flex flex-wrap gap-4">
    <li className="bg-slate-400 p-1.5 rounded-xl">
      <a href="#" className="text-black font-semibold">🎉 Nuevos productos</a>
    </li>
    <li className="bg-slate-400 p-1.5 rounded-xl">
      <a href="#" className="text-black font-semibold">🔥 Promociones actuales</a>
    </li>
    <li className="bg-slate-400 p-1.5 rounded-xl">
      <a href="#" className="text-black font-semibold">💌 Suscríbete a nuestro boletín</a>
    </li>
    <li className="bg-slate-400 p-1.5 rounded-xl">
      <a href="#" className="text-black font-semibold">📅 Próximos eventos</a>
    </li>
    <li className="bg-slate-400 p-1.5 rounded-xl">
      <a href="#" className="text-black font-semibold">⭐ Opiniones de clientes</a>
    </li>
  </ul>
</div>


  </div>
</div>
    )};

export default AdBanner;
