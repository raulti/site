import api from '@/services/api';

interface ICepResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

interface IAddress {
  uf: string;
  city: string;
  district: string;
  street: string;
}

export default async function getAddress(cep: string): Promise<IAddress> {
  const normalizedCep = cep.replace(/\D/g, '');

  const address = await api.get<ICepResponse>(
    `https://viacep.com.br/ws/${normalizedCep}/json`,
  );

  return {
    city: address.data.localidade,
    district: address.data.bairro,
    street: address.data.logradouro,
    uf: address.data.uf,
  };
}
