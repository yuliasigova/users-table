import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {changeSort, selectSort} from "../../app/api/userSlice";
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
        return (
            <div className={'sort'}>
                <p className={'sort__title'}>Сортировать:</p>
                <ul className={'sort__list'}>
                    {SortType.map(sortName => {
                        return (
                            <li key={sortName.key} className={'sort__item'}>
                                <Link to={'#'}  
                                className={`${sortName.key === sortValue ? 'sort__link--active' : 'sort__link'}`}
                                      onClick={() => {
                                          sortName.key === sortValue ? dispatch(changeSort(`-${sortName.key}`)) :
                                          dispatch(changeSort(sortName.key))}}>
                                    {sortName.title}</Link>
                            </li>
                        )
                    })}
                </ul>

            </div>
        )

}



