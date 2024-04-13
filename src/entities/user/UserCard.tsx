import { ReactNode} from "react";
import {User} from "./user";
import {useGetFoodListQuery} from "../../app/api/usersApi";
import {ImageAvatar} from "../../shared/imageAvatar/ImageAvatar";
import './user-card.scss'

type Props = {
    user: User
    children?: ReactNode;
}
export function UserInfo({user, children}: Props) {
    const {id, username, email, favorite_food_ids, photo_id, birthdate} = user;
    // const {data: foodList} = useGetFoodListQuery('')
    // const foods = favorite_food_ids.map(food => foodList && foodList[food]).join(', ')

    return (
    <article className={'user-card'}>

        <ImageAvatar className={'user-card__photo'} width={150} height={150} photoId={photo_id}></ImageAvatar>

        <dl className={'user-card__table'}>
            <dt> ID </dt>
            <dd className={'user-card__value'}>{id}</dd>
            <dt> Имя </dt>
            <dd className={'user-card__value'}>{username}</dd>
            <dt> Email </dt>
            <dd className={'user-card__value'}>{email}</dd>
            <dt> Дата рождения </dt>
            <dd className={'user-card__value'}>{birthdate}</dd>
            <dt > Любимая еда </dt>
            {/* <dd className={'user-card__value'}>{foods}</dd> */}
        </dl>

        {children}

    </article>)
}
