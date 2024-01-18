import ICategoryEvents from '../ICategoryEvents';
import IMetadata from '../metadata';

export default interface IEventOpen {
  metadata: IMetadata;

  id: number;
  name: string;
  slug: string;
  ticket_name: string;
  pos_name: string;
  age_classification: number;
  due_date: string;
  alternative_date_start: string;
  alternative_date_end: string;
  sales_start_date: string;
  sales_end_date: string;
  event_time: string;
  ticket_phrase: string;

  featured: number;
  category_id: number;
  provider_id: number;
  address_id: number;
  status: 'active';
  image: string;
  event_images: {
    id: number;
    url: string;
  }[];
  images: string[];

  tax_percent: number;

  about: string;
  event_site: string;
  info: string;
  map_image: string;
  map_description: string;
  // map_lat: string;
  // map_lon: string;
  tags: string;
  provider: {
    id: number;
    name: string;
    slug: string;
  };
  category: ICategoryEvents;
  address: {
    lat?: string;
    lon?: string;
    name?: string;
    street: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    uf: string;
    zipcode: string;

    description?: string;
    image?: string;
  };

  ticket_classes: [
    {
      id: number;
      name: string;
      slug: string;
      type: 'normal' | 'half' | 'courtesy' | 'table';
      description: string;
      ticket_blocks: {
        id: number;
        name: string;
        price: number;
        quantity: number;
        expires_at: string;
        tickets_available: number;
      }[];
    },
  ];
  sales_points: [];
}
