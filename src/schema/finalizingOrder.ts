import * as Yup from 'yup';

export const schemaCheckoutBillingTitle = Yup.object().shape({
  ticket: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required('Nome Completo é obrigatório!'),
      cpf_rg: Yup.string().required('CPF é obrigatório!'),
      email: Yup.string().required('Email é obrigatório!'),
      // ageOfMajority: Yup.string().required(''),
      phone: Yup.string().required('Telefone é obrigatório!'),

      // ageOfMajority: Yup.boolean().test(
      //   'is-true',
      //   'Ser de maior é obrigatório!',
      //   value => value === true,
      // ),
    }),
  ),

  customer: Yup.object().shape({
    cpf: Yup.string().required('CPF é obrigatório!'),
    phone: Yup.string().required('Telefone é obrigatório!'),
  }),

  address: Yup.object().shape({
    street: Yup.string().required('Rua é obrigatória!'),
    number: Yup.string().required('Numero é obrigatório!'),
    district: Yup.string().required('Bairro é obrigatório!'),
    city: Yup.string().required('Cidade é obrigatório!'),
    uf: Yup.string().required('UF é obrigatório!'),
    zipcode: Yup.string().required('CEP é obrigatório!'),
  }),
});

export const schemaCheckoutCreditCard = Yup.object().shape({
  ticket: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required('Nome Completo é obrigatório!'),
      cpf_rg: Yup.string().required('CPF é obrigatório!'),
      email: Yup.string().required('Email é obrigatório!'),
      // ageOfMajority: Yup.string().required(''),
      phone: Yup.string().required('Telefone é obrigatório!'),

      // ageOfMajority: Yup.boolean().test(
      //   'is-true',
      //   'Ser de maior é obrigatório!',
      //   value => value === true,
      // ),
    }),
  ),

  customer: Yup.object().shape({
    cpf: Yup.string().required('CPF é obrigatório!'),
    phone: Yup.string().required('Telefone é obrigatório!'),
    birthday: Yup.string().required('Data de nascimento é obrigatório!'),
  }),

  address: Yup.object().shape({
    street: Yup.string().required('Rua é obrigatória!'),
    number: Yup.string().required('Numero é obrigatório!'),
    district: Yup.string().required('Bairro é obrigatório!'),
    city: Yup.string().required('Cidade é obrigatório!'),
    uf: Yup.string().required('UF é obrigatório!'),
    zipcode: Yup.string().required('CEP é obrigatório!'),
  }),

  card: Yup.object().shape({
    holder: Yup.string().required('Nome no Cartão é obrigatório!'),
    number: Yup.string().required('Numero do Cartão é obrigatório!'),
    expMonth: Yup.string().required('Mês de expiração é obrigatório!'),
    expYear: Yup.string()
      .required('Ano de expiração é obrigatório!')
      .min(4, 'Ano de expiração deve ter 4 digitos.'),
    securityCode: Yup.string().required('Código de segurança é obrigatório!'),
  }),
});

export const schemaCheckoutPix = Yup.object().shape({
  ticket: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required('Nome Completo é obrigatório!'),
      cpf_rg: Yup.string().required('CPF é obrigatório!'),
      email: Yup.string().required('Email é obrigatório!'),
      // ageOfMajority: Yup.string().required(''),
      phone: Yup.string().required('Telefone é obrigatório!'),

      // ageOfMajority: Yup.boolean().test(
      //   'is-true',
      //   'Ser de maior é obrigatório!',
      //   value => value === true,
      // ),
    }),
  ),

  customer: Yup.object().shape({
    cpf: Yup.string().required('CPF é obrigatório!'),
    phone: Yup.string().required('Telefone é obrigatório!'),
  }),
});
