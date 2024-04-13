import {Link} from "react-router-dom";
import React  from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeSort, selectSort} from "../../app/api/userSlice";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import './sort.scss'


const SortType =[
    {title: 'Id', key: 'id'},
    {title: 'Имя', key: 'username'},
    {title: 'Email', key: 'email'},
    {title:'Дата рождения', key: 'birthdate'},
    {title:'Любимая еда', key:'favorite_food_ids'}
]


export function SortForm() {
    const dispatch = useDispatch();
    const sortValue = useSelector(selectSort)
    console.log(sortValue)
        return (
            <div className={'sort'}>
                <p className={'sort__title'}>Сортировать:</p>
                <ul className={'sort__list'}>
                    {SortType.map(sortName => {
                        return (
                            <li key={sortName.key} className={'sort__item'}>
                                <Link to={'#'}  className={'sort__link'}
                                      onClick={() => {
                                          sortName.key === sortValue ? dispatch(changeSort(`-${sortName.key}`)) :
                                          dispatch(changeSort(sortName.key))}}>
                                    {sortName.title}</Link>
                            </li>
                        )
                    })}
                    <ArrowDropUpIcon fontSize="large"/>
                    <ArrowDropDownIcon fontSize="large"/>

                </ul>

            </div>
        )

}



