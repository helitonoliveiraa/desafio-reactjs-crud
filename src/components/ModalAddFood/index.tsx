import React, { useRef, useCallback } from 'react';

import {
  FiCheckSquare,
  FiLink2,
  FiDollarSign,
  FiFileText,
} from 'react-icons/fi';
import { IoFastFoodOutline } from 'react-icons/io5';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/validationErros';

import Modal from '../Modal';
import Input from '../Input';

import { Form, InputWrapper } from './styles';

interface IFoodPlate {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  available: boolean;
}

interface ICreateFoodData {
  name: string;
  image: string;
  price: string;
  description: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (food: Omit<IFoodPlate, 'id' | 'available'>) => void;
}

const ModalAddFood: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddFood,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ICreateFoodData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required(),
          image: Yup.string().required(),
          price: Yup.string().required(),
          description: Yup.string().required(),
        });

        await schema.validate(data, { abortEarly: false });

        handleAddFood(data);

        setIsOpen();
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    },
    [handleAddFood, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input icon={FiLink2} name="image" placeholder="Cole o link aqui" />

        <InputWrapper>
          <Input
            icon={IoFastFoodOutline}
            name="name"
            placeholder="Ex: Moda Italiana"
          />

          <Input
            containerStyle={{ maxWidth: 200, marginTop: 0, marginLeft: 16 }}
            icon={FiDollarSign}
            name="price"
            placeholder="Ex: 19.90"
          />
        </InputWrapper>

        <Input icon={FiFileText} name="description" placeholder="Descrição" />

        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddFood;
