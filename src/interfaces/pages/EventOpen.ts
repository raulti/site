export interface ITicketParam {
  id: number;
  qtd: number;
  text: string;
  value: number;
  ticket: object;
}

export interface ITicket {
  id: number;
  qtd: number;
  text: string;
  value: number;
  totalValue: number;
  formatedTotalValue: string;
  ticket: object;
}
