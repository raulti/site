import IMetadata from '../metadata';

interface IData<T> {
  data: {
    metadata: IMetadata;
    name: string;
    slug: string;
    props: string;
    image: string;
    data: T;
  };
}

export default interface IPageProps<T> {
  data: IData<T>;
}
