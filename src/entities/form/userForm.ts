export interface UserForm {
  username: string;
  email: string;
  birthdate: string;
  favorite_food_ids: Array<string> | [];
  upload_photo: Blob | null;
}

export const defaultValues: UserForm = {
  username: '',
  email: '',
  birthdate: '',
  favorite_food_ids: [],
  upload_photo: null,
};
