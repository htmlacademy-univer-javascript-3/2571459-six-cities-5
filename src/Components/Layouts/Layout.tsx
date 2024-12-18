import {Header} from '../Components/Header.tsx';
import {Outlet} from 'react-router-dom';

export function Layout() {
  return (
    <div className='page page--main page--gray'>
      <Header/>
      <main>
        <Outlet/>
      </main>
    </div>);
}
