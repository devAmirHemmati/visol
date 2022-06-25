import { IComponent } from './../../../types.d';
import { SwiperOptions } from 'swiper';

export interface ISliderProps extends SwiperOptions {
  children: JSX.Element[];
  ref?: any;
  slideProps?: IComponent<HTMLElement>;
  className?: string;
  isShowArrows?: boolean;
  isShowArrowsBorder?: boolean;
  wrapperClassName?: string;
  arrowsColor?: string;
}
