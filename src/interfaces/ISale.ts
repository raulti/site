export interface ITicket {
  subtotal: number;
  tax_value: number;
  ticket_id: number;
  total: number;

  ticket: {
    code: string;
    status: 'active';
    data: {
      cpf_rg: string;
      email: string;
      name: string;
      phone: string;
    };

    event: {
      city: string;
      due_date: string;
      image: string;
      name: string;
      slug: string;
      uf: string;
    };

    ticket_block: {
      name: string;
      price: number;
      slug: string;
    };

    ticket_class: {
      name: string;
      slug: string;
      type: string;
    };
    created_at: string;
  };

  status: 'pending' | 'processing' | 'processed' | 'canceled' | 'denied';
}

export interface ISale {
  id: number;
  formatedTotalValue?: string;
  formatedDate?: string;
  created_at: string;
  subtotal: number;
  tax_value: number;
  total: number;

  event: {
    image: string;
    name: string;

    formatedDate: string;
    formatedAddress: string;
  };

  tickets: ITicket[];

  status: 'pending' | 'processing' | 'processed' | 'canceled' | 'denied';
  payment_method: 'pix' | 'billing_title' | 'credit_card';

  reference_object: {
    installmentCount: string[];
    paymentLink: string[];
  };
}
