import {RegisterForm} from "../../entities/form/Form";
import {defaultValues, UserForm} from "../../entities/form/userForm";
import dayjs from "dayjs";
import {useAddProfileMutation} from "../../app/api/usersApi";
import {useNavigate} from "react-router-dom";


export function AddProfile ():JSX.Element {
    const [addProfile, {isError, isSuccess }] = useAddProfileMutation();
    const navigate = useNavigate()
    const onSubmit = async (form: UserForm) => {
        const { username, birthdate, email, favorite_food_ids, upload_photo} = form
        form.birthdate = dayjs(form.birthdate).format('DD.MM.YYYY')
        // const photo = upload_photo !== null ? upload_photo["0"] : null
        const formData = new FormData()

        formData.append('username', username)
        formData.append('birthdate', dayjs(birthdate).format('DD.MM.YYYY'))
        formData.append('email', email)
        formData.append('favorite_food_ids', favorite_food_ids)
        formData.append('upload_photo', upload_photo)
       
        try {
            await addProfile(formData);
          } catch (e) {
            console.log(e);
          }
         
        // const data = await res
        // if (isSuccess) return navigate(`/user/${data.id}`)
        console.log( form, formData.get('upload_photo'))

    }
    return (
        <main className={'user-new'}>
            <div className={'container'}>

                <RegisterForm defaultValues={defaultValues} onSubmit={onSubmit}/>

            </div>

        </main>

    )
}
