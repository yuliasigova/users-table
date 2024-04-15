import {RegisterForm} from "../../entities/form/Form";
import {useParams} from "react-router-dom";
import { useGetProfileQuery, useUpdateUserMutation} from "../../app/api/usersApi";
import {UserForm} from "../../entities/form/userForm";
import dayjs from "dayjs";
import {useNavigate} from "react-router-dom";

export function ChangeProfile ():JSX.Element {
    const {userId} = useParams()
    const id = Number(userId)
    const {data:user = {}} = useGetProfileQuery(id)
    const navigate = useNavigate()
    const [changeProfile, ] = useUpdateUserMutation();

    const defaultValues = {
        username: user?.username,
        email: user?.email,
        birthdate: user?.birthdate,
        favorite_food_ids:  Array.isArray(user?.favorite_food_ids) ? user?.favorite_food_ids : [],
        upload_photo: null
    } as UserForm

    const onSubmit = async (form: UserForm) => {
        const {username, birthdate, email, favorite_food_ids, upload_photo} = form
        form.birthdate = dayjs(birthdate).format('DD.MM.YYYY')
        form.upload_photo = upload_photo !== null ? upload_photo : null
        const formData = new FormData()

        formData.append('username', username)
        formData.append('birthdate', dayjs(birthdate).format('DD.MM.YYYY'))
        formData.append('email', email)
     // @ts-ignore
        formData.append('favorite_food_ids', favorite_food_ids)
        // @ts-ignore
        formData.append('upload_photo', upload_photo)
      
        const res = await changeProfile({id: id, formData:formData}).unwrap()
        const data = await res
        return navigate(`/user/${data.id}`)
    }
    return (
        <main className={'user-change'}>
            <div className={'container'}>

                <RegisterForm 
                defaultValues={defaultValues} 
                onSubmit={onSubmit}
                photoId = {user?.photo_id}/>
            </div>

            </main>

    )
}
