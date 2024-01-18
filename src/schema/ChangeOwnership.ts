import * as Yup from 'yup';

export const ChangeOwnershipUpSchema = Yup.object().shape({
  name: Yup.string().required('Nome Completo é obrigatório!'),
  cpf_rg: Yup.string().required('CPF ou RG é obrigatório!'),
  email: Yup.string().required('Email é obrigatório!'),
  phone: Yup.string().required('Telefone é obrigatório!'),

  majorOfAge: Yup.boolean().test(
    'is-true',
    'Ser maior de idade é obrigatorio',
    value => value === true,
  ),

  changeOwnership: Yup.boolean().test(
    'is-true',
    ' Confirmar troca de titularidade é obrigatorio',
    value => value === true,
  ),
});
