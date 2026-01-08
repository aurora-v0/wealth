import { useLocation, useRouteLoaderData } from '@remix-run/react';
import { useEffect, useState } from 'react';
import { useI18n } from 'remix-i18n';

const SCRIPT =
  'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5059418763237956';

export default function Bootstrap() {
  const { pathname } = useLocation();
  const { user } = useRouteLoaderData('root');
  const [blocked, setBlocked] = useState(false);
  const [hideAd, setHideAd] = useState(false);

  const { t } = useI18n();

  return (
    <>
      {!hideAd && <script async={true} src={SCRIPT} crossOrigin='anonymous' />}
      {blocked && (
        <article>
          <h1>{t('common.adblock')}</h1>
          <p>{t('common.adblock_message')}</p>
        </article>
      )}
    </>
  );
}
