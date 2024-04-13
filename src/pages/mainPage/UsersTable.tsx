import {Button} from "@mui/material";
import { useGetUsersQuery, useDeleteProfileMutation} from "../../app/api/usersApi";
import {UserInfo} from "../../entities/user/UserCard";
import { User} from "../../entities/user/user";
import {SortForm} from "../../entities/sort/SortForm";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {ButtonGroup} from "@mui/material";
import {SearchForm} from "../../shared/searchForm/SearchForm";
import {selectSort, selectSearch} from "../../app/api/userSlice";
import {AppRoute} from "../../app/types";
import './users.scss'


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export function UsersTable ():JSX.Element {
    const sortType = useSelector(selectSort)
    const search = useSelector(selectSearch)
   console.log(search, sortType)
  
    const [deleteProfile] = useDeleteProfileMutation();
    const {data:users } = useGetUsersQuery({sort:sortType, UserSearch:{...search}})

    return (
        <main className={'main'}>
            <div className={'container'}>
                <h1 className={'main__title'}>Пользователи</h1>
                <Button variant="contained" href={AppRoute.AddProfile}>Добавить пользователя</Button>
                {users?.length > 0 ?
                    <section className={'users'}>
                        <SearchForm/>
                          
                        <div className={'users__catalog'}>
                            <SortForm ></SortForm>

                            <ul className={'users__list'}>
                                {users?.map((user:User) => {
                                    return (
                                        <UserInfo user={user} key={user.id}>
                                            <ButtonGroup size="small" aria-label="Small button group" variant="contained">
                                                <Button   href={`/user/${user.id}`}>Профиль</Button>
                                                <Button href={`/change-profile/${user.id}`}>Изменить</Button>
                                                <Button onClick={() => deleteProfile(user?.id)}>Удалить</Button>
                                            </ButtonGroup>
                                        </UserInfo>

                                    )
                                })}
                            </ul>
                        </div>

                    </section>
                : <p> Нет пользователей</p>}


            </div>

        </main>

    )
}
