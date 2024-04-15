import {RegisterForm} from "../../entities/form/Form";
import {defaultValues, UserForm} from "../../entities/form/userForm";
import dayjs from "dayjs";
import {useAddProfileMutation} from "../../app/api/usersApi";
import {useNavigate} from "react-router-dom";


export function AddProfile ():JSX.Element {
    const [addProfile] = useAddProfileMutation();
    const navigate = useNavigate()

    const onSubmit = async (form: UserForm) => {
        const { username, birthdate, email, favorite_food_ids, upload_photo} = form
        form.birthdate = dayjs(birthdate).format('DD.MM.YYYY');
        const formData = new FormData()
        formData.append('username', username)
        formData.append('birthdate', dayjs(birthdate).format('DD.MM.YYYY'))
        formData.append('email', email)
        // @ts-ignore
        formData.append('favorite_food_ids', favorite_food_ids)
        // @ts-ignore
        formData.append('upload_photo', upload_photo)
    
        const res =  await addProfile(formData).unwrap();
         
        const data = await res
        return navigate(`/user/${data.id}`)
    }

    return (
        <main className={'user-new'}>
            <div className={'container'}>

                <RegisterForm defaultValues={defaultValues} onSubmit={onSubmit}/>
           
            </div>

        </main>

    )
}
