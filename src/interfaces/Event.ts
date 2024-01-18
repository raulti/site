import ICategoryEvents from './ICategoryEvents';
import IMetadata from './metadata';

export default interface IEvent {
  metadata: IMetadata;

  id: number;
  name: string;
  slug: string;
  ticket_name: string;
  pos_name: string;
  due_date: string;

  alternative_date_start?: string;
  alternative_date_end?: string;

  sales_start_date: string;
  sales_end_date: string;
  event_time: string;
  ticket_phrase: string;
  adm_tax: number;
  tax_credit: number;
  tax_debit: number;
  featured: number;
  category_id: number;
  provider_id: number;
  address_id: number;
  status: 'active';
  image: string;
  images: string;
  event_images: {
    id: number;
    url: string;
  }[];

  about: string;
  event_site: string;
  info: string;
  map_image: string;
  map_description: string;
  map_lat: string;
  map_lon: string;
  tags: string;
  provider: {
    id: number;
    name: string;
    slug: string;
  };
  category: ICategoryEvents;
  address: {
    name?: string;
    street: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    uf: string;
    zipcode: string;
  };

  ticket_classes: [
    {
      id: number;
      name: string;
      slug: string;
      type: 'normal';
      ticket_blocks: {
        id: number;
        price: number;
        quantity: number;
        expires_at: string;
      }[];
    },
  ];
  sales_points: [];
}
