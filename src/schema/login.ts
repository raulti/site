import * as Yup from 'yup';

export const schemaLogin = Yup.object().shape({
  email: Yup.string()
    .email('Formato do email é inválido!')
    .required('Email é obrigatório!'),
  password: Yup.string()
    .required('Senha é obrigatório!')
    .min(6, 'Senha deve ter no min. 6 digitos.'),
});
