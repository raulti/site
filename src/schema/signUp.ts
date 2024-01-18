import * as Yup from 'yup';

export const schemaSignUp = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório!'),
  lastname: Yup.string().required('Sobrenome é obrigatório!'),
  email: Yup.string()
    .email('Formato do email é inválido!')
    .required('Email é obrigatório!'),
  password: Yup.string()
    .required('Senha é obrigatório!')
    .min(6, 'Senha deve ter no min. 6 digitos.'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Senhas diferentes',
  ),
  TermsOfUse: Yup.boolean().oneOf([true], 'Aceitar os termos é obrigatório!'),
});
