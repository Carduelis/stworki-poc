export const COOKIE_KEYS = [
  'ipp_uid2',
  'ipp_uid1',
  'ipp_key',
  'PHPSESSID',
  'rerf',
];

export const rawCookies = {
  // ipp_key: 'v1599902791002/v3394bd400b5e53a13cfc65163aeca6afa04ab3/iB77IAyozCTJ8e4Ok5dZkg',
  ipp_key:
    'v1599914579241/v3394bd400b5e53a13cfc65163aeca6afa04ab3/zRkOJQQhOlvKKlTO9K5m5g==', // the main key
  ipp_uid2: 'RMfURVgS0LQCIGGf/OGiNgE6uomP6etaXbg/QUA==',
  ipp_uid1: '1599914579241',
  device: 'desktop',
  _laddr: 'город+Москва,+Московская+область',
  _llocality: 'Москва',
  _lcname: 'Москва',
  _lregname: 'Московская+область',
  notFirstVisit: '2',
  PHPSESSID: '0180u31com5588b6fbd2rdaqa3',
  BITRIX_SM2_SALE_UID: '1173194707',
  rerf: 'AAAAAF9cwlMvqwZrAzwOAg==',
  popmechanic_sbjs_migrations:
    'popmechanic_1418474375998=1|||1471519752600=1|||1471519752605=1',
  section_view_6505: 'big-tiles',
  section_sort_field: 'SORT',
  section_sort_order: 'DESC',
  lastViewCategory: '[6505,5572,5590]',
  section_limit_6505: '18',
  a_user_interesting: '[]',
  lastView: '[3487983,2038713,3540496,2787441,3359039,2118981,3358788]',
  view_banners:
    'a:2:{s:21:"index_part_banner_big";a:1:{i:159680;s:6:"159680";}s:28:"index_part_banner_big_bottom";a:1:{i:159684;s:6:"159684";}}',
  selectedShowcaseTabs: '{"Сантехника":"136102"}',
};

export const processCookieValue = (key, value) => {
  if (COOKIE_KEYS.includes(key)) {
    return value;
  }
  return encodeURIComponent(value);
};

export const cookieToString = (cookie) =>
  Object.entries(cookie)
    .map(([key, value]) => {
      return [key, processCookieValue(key, value)].join('=');
    })
    .join('; ');
