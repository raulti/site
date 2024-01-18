interface ITicket {
  ageOfMajority: boolean;
  block_id: number;
  cpf: string;
  email: string;
  name: string;
  phone: string;
}

export default interface IFormCheckout {
  ticket: ITicket[];
  address: {
    city: string;
    district: string;
    number: string;
    street: string;
    uf: string;
    zipcode: string;
  };
  customer: {
    cpf: string;
    phone: string;
    birthday?: string;
  };

  card?: {
    expMonth?: string;
    expYear?: string;
    holder?: string;
    number?: string;
    securityCode?: string;
  };
}
