export default interface IMetadataProps {
  data?: {
    title?: string;
    description?: string;
    keywords?: string;
    canonical_url?: string;
    seo_url?: string;
    image?: string;
    updated_at?: string;
    index?: boolean;
  };
}
