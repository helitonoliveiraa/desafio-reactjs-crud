import React, { useRef, useCallback } from 'react';

import {
  FiCheckSquare,
  FiDollarSign,
  FiFileText,
  FiLink2,
} from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { IoFastFoodOutline } from 'react-icons/io5';
import { Form, InputWrapper } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface IFoodPlate {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  available: boolean;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateFood: (food: Omit<IFoodPlate, 'id' | 'available'>) => void;
  editingFood: IFoodPlate;
}

interface IEditFoodData {
  name: string;
  image: string;
  price: string;
  description: string;
}

const ModalEditFood: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  editingFood,
  handleUpdateFood,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: IEditFoodData) => {
      // EDIT A FOOD PLATE AND CLOSE THE MODAL
      handleUpdateFood(data);

      setIsOpen();
    },
    [handleUpdateFood, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
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

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditFood;
