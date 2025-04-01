import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../app/types';
import '../layout/layout.scss';

export function Layout(): JSX.Element {
  return (
    <div className={'body__root'}>
      <header className={'header'}>
        <nav className={'header__container container'}>
          <Link to={AppRoute.Main} className={'header__link'}>
            Главная
          </Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
