import { FC, useState } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { SwiperModule } from 'swiper/types';
import { ISliderProps } from './types.d';
import classes from './styles.module.scss';

const Slider: FC<ISliderProps> = ({
  spaceBetween = 0,
  slidesPerView = 1,
  children,
  slideProps = {},
  className = '',
  loop = true,
  navigation = true,
  modules,
  isShowArrows,
  isShowArrowsBorder,
  wrapperClassName = '',
  arrowsColor = '#fff',
  ...props
}) => {
  const customModules: SwiperModule[] = modules || [];
  const [swiper, setSwiper] = useState<any>(null);

  if (navigation) {
    customModules.push(Navigation);
  }

  const handleShowPrevSlide = () => {
    if (swiper === null) return;

    swiper.slidePrev();
  };

  const handleShowNextSlide = () => {
    if (swiper === null) return;

    swiper.slideNext();
  };

  return (
    <div className={`${classes.wrapper} ${wrapperClassName}`}>
      {isShowArrows && (
        <FiChevronLeft
          size={50}
          onClick={handleShowPrevSlide}
          className={`${classes.arrows} ${classes.arrowsLeft} ${
            isShowArrowsBorder ? classes.arrowsWithBorder : ''
          }`}
          color={arrowsColor}
        />
      )}

      <Swiper
        onSwiper={setSwiper}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        className={`${classes.swiper} ${className}`}
        loop={children.length <= 1 ? false : loop}
        navigation={children.length > 1 ? navigation : false}
        modules={customModules}
        {...props}>
        {children.map((Element, key) => (
          <SwiperSlide key={key} {...slideProps}>
            <div className={classes.sliderItem}>{Element}</div>
          </SwiperSlide>
        ))}
      </Swiper>

      {isShowArrows && (
        <FiChevronRight
          size={50}
          onClick={handleShowNextSlide}
          className={`${classes.arrows} ${classes.arrowsRight} ${
            isShowArrowsBorder ? classes.arrowsWithBorder : ''
          }`}
          color={arrowsColor}
        />
      )}
    </div>
  );
};

export default Slider;
