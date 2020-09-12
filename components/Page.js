import { useObserver } from 'mobx-react-lite';
import Link from 'next/link';
import { useContext, useEffect } from 'react';
import { StoreContext, start, stop } from '../store';
import Clock from './Clock';
import { Layout } from './Layout';

function Page({ linkTo, title, children }) {
  const store = useContext(StoreContext);

  useEffect(() => {
    start();
    return stop;
  }, []);

  return (
    <Layout>
      <h1>{title}</h1>
      {useObserver(() => (
        <Clock lastUpdate={store.lastUpdate} light={store.light} />
      ))}
      <nav>
        <Link href={linkTo}>
          <a>Navigate</a>
        </Link>
      </nav>
      {children}
    </Layout>
  );
}

export default Page;
