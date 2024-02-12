import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Photos = () => {
  return (
    <Carousel autoPlay interval={5000} infiniteLoop swipeable={false}>
      <div>
        <img src="./Carousel/HayleyGellPhotography-2.jpg" />
      </div>
      <div>
        <img src="./Carousel/HayleyGellPhotography-17.jpg" />
      </div>
      <div>
        <img src="./Carousel/engagement-photo.jpg" />
      </div>
      <div>
        <img src="./Carousel/HayleyGellPhotography-23.jpg" />
      </div>
      <div>
        <img src="./Carousel/HayleyGellPhotography-32.jpg" />
      </div>
      <div>
        <img src="./Carousel/HayleyGellPhotography-40.jpg" />
      </div>
      <div>
        <img src="./Carousel/HayleyGellPhotography-49.jpg" />
      </div>
      <div>
        <img src="./Carousel/HayleyGellPhotography-54.jpg" />
      </div>
    </Carousel>
  );
};

export default Photos;
