import Page from '../components/Page';
import { useEffect } from 'react';
import Cookie from 'js-cookie';
import {
  processCookieValue,
  rawCookies,
  cookieToString,
  COOKIE_KEYS,
} from 'src/utils/cookie';
const FormData = require('form-data');

export default function Index({ json }) {
  useEffect(() => {
    if (typeof window === 'object') {
      COOKIE_KEYS.forEach((key) => {
        Cookie.set(key, processCookieValue(key, rawCookies[key]));
      });
      fetch('/api/ajax/react/basket', {
        credentials: 'include',
        method: 'POST',
      })
        .then((body) =>
          body.json().then((json) => {
            console.log(json);
          })
        )
        .catch((error) => {
          console.log({ error });
        });
    }
  }, []);

  return (
    <Page title="Index Page" linkTo="/other">
      {JSON.stringify(json)}
    </Page>
  );
}

export async function getStaticProps() {
  let json = null;
  const formData = new FormData();
  formData.append('PAGEN_1', 0);
  formData.append('perpage', 100);
  formData.append('sectionId', 6505);
  formData.append('filter%5BBRAND%5D%5B%5D', '3162214');
  const url = `${process.env.BASE_URL}/api/ajax/react/productList/`;
  console.log(url);
  const body = await fetch(
    'https://santehnika-online.ru/ajax/react/productList/',
    {
      body: formData,
      credentials: 'include',
      method: 'POST',
      headers: {
        accept: '*/*',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36',
        cookie: cookieToString(rawCookies),
      },
    }
  );
  json = await body.json();

  return { props: { json, initialState: { lastUpdate: Date.now() } } };
}
