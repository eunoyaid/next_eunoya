import "react-alice-carousel/lib/alice-carousel.css";
import React from "react";
import AliceCarousel from "react-alice-carousel";

const CarouselData = [
  {
    image:
      "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      id:1
  },
  {
    image:
      "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
      id:2
  },
  {
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
      id:3
  },
  {
    image:
      "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
      id:5
  },
  {
    image:
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
      id:5
  },
];


const CarouselProduct = () => {
  return (
    <AliceCarousel  autoPlay
    autoPlayStrategy="none"
    autoPlayInterval={1000}
    animationDuration={2000}
    animationType="fadeout"
      infinite
      disableDotsControls
      mouseDragEnabled={true}
    touchTracking={false}
    disableButtonsControls>
      {CarouselData.map((image) => (
        <div   key={image.id} className="wrapper relative bg-gray-100 overflow-hidden rounded-xl h-96 w-full">
          <img
            className="w-full h-full absolute object-cover rounded-xl  "
          
            src={image.image}
            alt="..."
          />
        </div>
      ))}
    </AliceCarousel>
  );
};

export default CarouselProduct;
