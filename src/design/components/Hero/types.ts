interface HeroButton {
  name: string;
  url: string;
}

export interface HeroProps {
  heading: string;
  copy: string;
  btn1?: HeroButton;
  btn2?: HeroButton;
}
