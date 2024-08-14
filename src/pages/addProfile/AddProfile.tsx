import { RegisterForm } from '../../entities/form/Form';
import { defaultValues, UserForm } from '../../entities/form/userForm';
import { useAddProfileMutation } from '../../app/api/usersApi';
import { useNavigate } from 'react-router-dom';
import { serializeDate } from '../../shared/utils/utils';

export function AddProfile() {
  const [addProfile] = useAddProfileMutation();
  const navigate = useNavigate();

  const onSubmit = async (form: UserForm) => {
    const { username, birthdate, email, favorite_food_ids, upload_photo } =
      form;

    const sirializedBirthday = serializeDate(birthdate);
    const formData = new FormData();
    formData.append('username', username);
    formData.append('birthdate', sirializedBirthday);
    formData.append('email', email);
    // favorite_food_ids.forEach(item => {
    //   formData.append('favorite_food_ids[]', item);
    // });

    formData.append('upload_photo', upload_photo as Blob);

    // const res =  await addProfile(formData).unwrap();
    // const data = await res
    // navigate(`/user/${data.id}`)
    console.log(form);
  };

  return (
    <main className={'user-new'}>
      <div className={'container'}>
        <RegisterForm defaultValues={defaultValues} onSubmit={onSubmit} />
      </div>
    </main>
  );
}
