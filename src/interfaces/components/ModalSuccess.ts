export interface IModalSuccess {
  payment_method: 'credit_card' | 'debit_card' | 'billing_title' | 'pix';
  data?: {
    reference_object: {
      paymentLink: any;

      pixCopiaECola?: string;
      urlImagemQrCode?: string;
      calendario?: {
        expiracao?: number;
        criacao: string;
      };
    };
  };
  visible: boolean;
}
