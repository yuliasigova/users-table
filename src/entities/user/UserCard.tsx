import { ReactNode} from "react";
import {User} from "./user";
import {ImageAvatar} from "../../shared/imageAvatar/ImageAvatar";
import { useFoodsList } from "../../shared/hooks/useFoodsList";
import './user-card.scss'

type Props = {
    user: User
    children?: ReactNode;
}
export function UserInfo({user, children}: Props) {
    const {id, username, email, favorite_food_ids, photo_id, birthdate} = user;
    const foodList = useFoodsList()

    const foods = favorite_food_ids?.map(food => foodList && foodList[food]).join(', ')
    
    return (
    <article className={'user-card'}>

        <ImageAvatar className={'user-card__photo'} width={150} height={150} photoId={photo_id}></ImageAvatar>
        <div className="user-card__wrapper">
        <dl className={'user-card__table'}>
            <dt className={'user-card__name'}> ID </dt>
            <dd className={'user-card__value'}>{id}</dd>
            <dt className={'user-card__name'}> Имя </dt>
            <dd className={'user-card__value'}>{username}</dd>
            <dt className={'user-card__name'}> Email </dt>
            <dd className={'user-card__value user-card__value--email'}>{email}</dd>
            <dt className={'user-card__name'}> Дата рождения </dt>
            <dd className={'user-card__value'}>{birthdate}</dd>
            <dt className={'user-card__name'}> Любимая еда </dt>
            <dd className={'user-card__value'}>{foods}</dd>
        </dl>

        {children}
        </div>
       

    </article>)
}
