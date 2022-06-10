import { FC, forwardRef } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
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
  ...props
}) => {
  const customModules: SwiperModule[] = modules || [];

  if (navigation) {
    customModules.push(Navigation);
  }

  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      className={`${classes.wrapper} ${className}`}
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
  );
};

export default Slider;
