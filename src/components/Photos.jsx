import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Photos = () => {

    return (
        <Carousel>
            <div>
                <img src="assets/Carousel/engagement-photo.jpg" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="assets/HaylewGellPhotography-2.jpg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="assets/HaylewGellPhotography-6.jpg" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    )

}


export default Photos;
