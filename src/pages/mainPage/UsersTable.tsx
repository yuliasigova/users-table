import {Button} from "@mui/material";
import { useGetUsersQuery, useDeleteProfileMutation} from "../../app/api/usersApi";
import { Link } from "react-router-dom";
import {UserInfo} from "../../entities/user/UserCard";
import { User} from "../../entities/user/user";
import {SortForm} from "../../entities/sort/SortForm";
import {useSelector} from "react-redux";
import {SearchForm} from "../../entities/searchForm/SearchForm";
import {selectSort, selectSearch} from "../../app/api/userSlice";
import {AppRoute} from "../../app/types";
import './users.scss'

export function UsersTable ():JSX.Element {
    const sortType = useSelector(selectSort)
    const search = useSelector(selectSearch)
    const [deleteProfile] = useDeleteProfileMutation();
    const {data:users = [], isLoading} = useGetUsersQuery({sort:sortType, UserSearch:{...search}})
    
    return (
        <main className={'main'}>
            <div className={'container'}>
                <h1 className={'main__title'}>Пользователи</h1>
            
                    <section className={'users'}>
                        <div className={'users__search'}>
                        <Button variant="contained" href={AppRoute.AddProfile}>Добавить пользователя</Button>
                        <SearchForm/>
                        </div>
                          
                        <div className={'users__catalog'}>
                            <SortForm ></SortForm>
                            {users?.length > 0  ?
                            <ul className={'users__list'}>
                                {users?.map((user:User) => {
                                    return (
                                        <UserInfo user={user} key={user.id}>
                                            <div className={'users__buttons'}>
                                                <Link 
                                                className={'users__btn'} to={`/user/${user.id}`}>Профиль</Link>
                                                <Link 
                                                className={'users__btn'} to={`/change-profile/${user.id}`}>Изменить</Link>
                                                <Link to={''}
                                                className={'users__btn'} 
                                                onClick={() => deleteProfile(user?.id)}>Удалить</Link>
                                            </div>
                                        </UserInfo>

                                    )
                                })}
                            </ul>
                            : <h2 className="users__title"> Пользователи не найдены</h2>}
                        </div>

                    </section>
                
            </div>

        </main>

    )
}
