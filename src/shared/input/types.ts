import { UserForm } from '../../entities/form/userForm';
import { Control } from 'react-hook-form';

export type Input = {
  name:
    | 'username'
    | 'email'
    | 'birthdate'
    | 'favorite_food_ids'
    | 'upload_photo';
  label?: string;
  type?: string;
  control: Control<UserForm>;
};

export const foods = {
  '1': 'Капуста',
  '2': 'Сосиска',
  '3': 'Морковка',
  '4': 'Пирожок',
  '5': 'Яблоко',
}