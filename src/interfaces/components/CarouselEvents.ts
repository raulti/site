import IEvent from '../Event';

export interface ICarouselEvents {
  data: IEvent[];
}

export interface IPropsContent {
  page?: number;
  numItens?: number;
  itemPerPage?: number;
}
