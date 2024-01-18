export interface IPurchaseList {
  id: number;
  qtd: number;
  text: string;
  value: number;
  totalValue: number;
  formatedTotalValue: string;
  ticket: object;
}

export interface IData {
  event?: {
    id?: number;
    name?: string;
    image?: string;
    age_classification?: number;
    category?: string;
    formattedDate?: string;
    formattedHour?: string;
    formattedCityUF?: string;
    linkGoogleMap?: string;
  };
  purchaseList?: IPurchaseList[];
  formatedTotalValueEnd?: string;
  valorTotalEnd?: number;
  formatedTotalValueEndParcel?: string;

  taxPercent: number;
  formatedTaxValue: string;
}
