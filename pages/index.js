import Page from '../components/Page';
import { useEffect } from 'react';
const FormData = require('form-data');

export default function Index({ json }) {
  useEffect(() => {
    const formData = new FormData();
    formData.append('PAGEN_1', 0);
    formData.append('perpage', 100);
    formData.append('sectionId', 6505);
    formData.append('filter%5BBRAND%5D%5B%5D', '3162214');
    window
      .fetch('https://santehnika-online.ru/ajax/react/productList/', {
        body: formData,
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
  }, []);
  return (
    <Page title="Index Page" linkTo="/other">
      {JSON.stringify(json)}
    </Page>
  );
}

const rawCookies = {
  device: 'desktop',
  _laddr:
    '%D0%B3%D0%BE%D1%80%D0%BE%D0%B4+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C+%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C',
  _llocality: '%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0',
  _lcname: '%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0',
  _lregname:
    '%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C',
  notFirstVisit: '2',
  PHPSESSID: '8ua9to9qvkklrbgt4iiodrdfp4',
  BITRIX_SM2_SALE_UID: '1148723941',
  rerf: 'AAAAAF9SJU9O10FkAyEfAg',
  ipp_uid2: 'MLvfxaaGHGxs9FPe/Uw6K+7z6+fFKqoLLFDjaSw', // maximum redirect reached at
  ipp_uid1: '1599219022743', // maximum redirect reached at
  popmechanic_sbjs_migrations:
    'popmechanic_1418474375998%3D1%7C%7C%7C1471519752600%3D1%7C%7C%7C1471519752605%3D1',
  section_view_6505: 'big-tiles',
  section_sort_field: 'SORT',
  section_sort_order: 'DESC',
  lastViewCategory: '%5B6505%2C5572%2C5590%5D',
  section_limit_6505: '18',
  a_user_interesting: '%5B%5D',
  lastView:
    '%5B3487983%2C2038713%2C3540496%2C2787441%2C3359039%2C2118981%2C3358788%5D',
  ipp_key:
    'v1599902791002/v3394bd400b5e53a13cfc65163aeca6afa04ab3/iB77IAyozCTJ8e4Ok5dZkg', // makes it json
  view_banners:
    'a%3A2%3A%7Bs%3A21%3A%22index_part_banner_big%22%3Ba%3A1%3A%7Bi%3A159680%3Bs%3A6%3A%22159680%22%3B%7Ds%3A28%3A%22index_part_banner_big_bottom%22%3Ba%3A1%3A%7Bi%3A159684%3Bs%3A6%3A%22159684%22%3B%7D%7D',
  selectedShowcaseTabs:
    '%7B%22%D0%A1%D0%B0%D0%BD%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B0%22%3A%22136102%22%7D',
};

export async function getStaticProps() {
  const formData = new FormData();
  formData.append('PAGEN_1', 0);
  formData.append('perpage', 100);
  formData.append('sectionId', 6505);
  formData.append('filter%5BBRAND%5D%5B%5D', '3162214');
  const body = await fetch(
    'https://santehnika-online.ru/ajax/react/productList/',
    {
      credentials: 'include',
      method: 'POST',
      allowForbiddenHeaders: true,
      origin: 'https://santehnika-online.ru',
      referrer: 'https://santehnika-online.ru/?utm_referrer=',
      referrerPolicy: 'no-referrer-when-downgrade',
      mode: 'cors',
      headers: {
        accept: '*/*',
        'accept-language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,nl;q=0.6',
        'cache-control': 'no-cache',
        pragma: 'no-cache',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36',
        cookie: Object.entries(rawCookies)
          .map((pair) => pair.join('='))
          .join('; '),
      },
    }
  );
  console.log(body);
  const json = await body.json();

  return { props: { json, initialState: { lastUpdate: Date.now() } } };
}
