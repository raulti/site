import IEvent from '../Event';
import ICategoryEvents from '../ICategoryEvents';

export interface IEventImages {
  id: number;
  event: {
    id: number;
    name: string;
    city: string;
    uf: string;
    due_date: string;
  };
  image: string;
  created_at: string;
  updated_at: string;
}

export default interface IHome {
  categories: ICategoryEvents[];
  featured_events: IEvent[];
  last_events: IEvent[];
  uf_events: IEvent[];

  event_images: IEventImages[];
}
