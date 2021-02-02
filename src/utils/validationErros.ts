import { ValidationError } from 'yup';

interface IErrors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): IErrors {
  const validationErros: IErrors = {};

  err.inner.forEach(error => {
    const key = error.path as string;

    validationErros[key] = error.message;
  });

  return validationErros;
}
