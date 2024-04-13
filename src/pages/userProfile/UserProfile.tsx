import {UserInfo} from "../../entities/user/UserCard";
import {useParams} from "react-router-dom";
import {useGetProfileQuery} from "../../app/api/usersApi";
import {Button} from "@mui/material";
import {useDeleteProfileMutation} from "../../app/api/usersApi";
import {AppRoute} from "../../app/types";
import {useNavigate} from "react-router-dom";
import './user-profile.scss'


export function UsersProfile ():JSX.Element {
    const {userId} = useParams()
    const id = Number(userId)
    const {data:user} = useGetProfileQuery(id)
    const [deleteProfile] = useDeleteProfileMutation();
    const navigate = useNavigate()

    const handleButtonClick = () => {
        deleteProfile(id);
        navigate(AppRoute.Main)
    };

    return (
        <main className={'user-profile'}>
            <div className={'container'}>

                {user && <UserInfo user={user}/>}
                <div className={'user-profile__buttons'}>
                    <Button variant="contained" size='large' href={`/change-profile/${id}`}>Изменить</Button>
                    <Button  variant="contained" size='large' onClick={handleButtonClick}>Удалить</Button>
                </div>

            </div>
        </main>

    )
}
