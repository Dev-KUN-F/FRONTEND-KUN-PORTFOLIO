import { SliderItem, Wrapper } from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function LayoutBannerUI(): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItem src="/images/banner/1.webp" />
        </div>
        <div>
          <SliderItem src="/images/banner/2.jpg" />
        </div>
        <div>
          <SliderItem src="/images/banner/3.jpg" />
        </div>
        <div>
          <SliderItem src="/images/banner/4.jpg" />
        </div>
        <div>
          <SliderItem src="/images/banner/5.jpg" />
        </div>
      </Slider>
    </Wrapper>
  );
}
