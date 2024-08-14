import {RegisterForm} from "../../entities/form/Form";
import {useParams} from "react-router-dom";
import { useGetProfileQuery, useUpdateUserMutation} from "../../app/api/usersApi";
import {UserForm} from "../../entities/form/userForm";
import {useNavigate} from "react-router-dom";
import { serializeDate } from "../../shared/utils/utils";
import dayjs from "dayjs";

export function ChangeProfile () {
    const {userId} = useParams()
    const id = Number(userId)
    const {data:user = {} , isLoading} = useGetProfileQuery(id)
    const navigate = useNavigate()
    const [changeProfile, ] = useUpdateUserMutation();

  
   
    const defaultValues:UserForm = {
        username: user?.username,
        email: user?.email,
        birthdate: user?.birthdate,
        favorite_food_ids:  Array.isArray(user?.favorite_food_ids) ? user?.favorite_food_ids : [],
        upload_photo: null,
    }
    const userPhoto = user?.photo_id && user?.photo_id

    const onSubmit = async (form: UserForm) => {
        const {username, birthdate, email, favorite_food_ids, upload_photo} = form
        const sirializedBirthday = serializeDate(birthdate)
        const formData = new FormData()

        formData.append('username', username)
        formData.append('birthdate', sirializedBirthday)
        formData.append('email', email)
        favorite_food_ids.forEach((item) => {
            formData.append("favorite_food_ids[]", item);
        });
        formData.append('upload_photo', upload_photo as Blob)
      
        // const res = await changeProfile({id: id, formData:formData}).unwrap()
        // const data = await res
        // navigate(`/user/${data.id}`)
        console.log(form)
    }
    return (
        <main className={'user-change'}>
            <div className={'container'}>
            {isLoading? <h1>Loading...</h1> :
              <RegisterForm 
              defaultValues={defaultValues} 
              onSubmit={onSubmit}
              photoId={userPhoto}
              />}
              
            </div>

        </main>

    )
}
