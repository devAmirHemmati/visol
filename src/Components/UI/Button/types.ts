import { IComponent } from './../../../types.d';

type tButtonColors = 'outline-white';

type tButtonSize = 'medium';

export interface IButtonProps extends IComponent<HTMLButtonElement> {
  color?: tButtonColors;
  buttonSize?: tButtonSize;
  type?: 'button' | 'submit' | 'reset';
}
