export interface IShareButton {
  link: string;
  typeButton?: 'primary' | 'secondary';
}

export interface IShareButtonContainer {
  active: boolean;

  typeButton?: 'primary' | 'secondary';
}
