import {Header} from './Components/Header.tsx';
import {Main} from './Components/Main.tsx';

interface AppProps {
  backgroundColor: string;
  placesToStayCount: number;
}

export function App(props: AppProps) {
  return (
    <div className='page page--main' style={{
      backgroundColor: props.backgroundColor
    }}
    >
      <Header/>
      <Main placesToStayCount={props.placesToStayCount}/>
    </div>
  );
}
