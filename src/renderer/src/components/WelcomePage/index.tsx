import RevenoteLogo from '../RevenoteLogo';
import { Twitter, Github, Coffee, Cat, FolderPlus, FileType, Palette } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function WelcomeContent() {
  const { t } = useTranslation();

  return (
    <div className="revenote-welcome-page w-full h-full flex pt-20 justify-center text-slate-400">
      <div className="content w-2/3 h-5/6 overflow-scroll">
        <div className="flex items-end mb-6">
          <RevenoteLogo size="large" url="https://revenote.com" />
        </div>
        <p className="mb-6 text-base">{t('welcome.productDesc')}</p>
        <p className="mb-6 text-base  text-slate-500">{t('welcome.operationTip')}</p>
        <div className="mb-6">
          <h2 className="mb-2 text-base">{t('welcome.operationGuide')}</h2>
          <p className="mb-2">{t('welcome.operationDetailDesc')}</p>
          <ul>
            <li className="mb-2 list-disc list-inside">
              <FolderPlus className="mr-2 w-4" />
              {t('operation.addFolder')}
            </li>
            <li className="mb-2 list-disc list-inside">
              <FileType className="mr-2 w-4" />
              {t('operation.addNote')}
            </li>
            <li className="mb-2 list-disc list-inside">
              <Palette className="mr-2 w-4" />
              {t('operation.addBoard')}
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-2 text-base">{t('links.title')}</h2>
          <p className="mb-2">
            <a href="https://github.com/revenote/revenote" target="_blank" rel="noreferrer">
              <Github className="w-4 h-4" /> {t('links.github')}
            </a>
          </p>
          <p className="mb-2">
            <a href="https://twitter.com/TheReveNote" target="_blank" rel="noreferrer">
              <Twitter className="w-4 h-4" /> {t('links.twitter')}
            </a>
          </p>
          <p className="mb-2">
            <a href="https://www.buymeacoffee.com/korbinzhao" target="_blank" rel="noreferrer">
              <Coffee className="w-4 h-4" /> {t('links.buyMeACoffee')}
            </a>
          </p>
          <p className="mb-2">
            <a href="https://afdian.net/a/wantian" target="_blank" rel="noreferrer">
              <Cat className="w-4 h-4" /> {t('links.feedMyCat')}
            </a>
          </p>
          <p className="mb-2">
            <a href="https://twitter.com/korbinzhao" target="_blank" rel="noreferrer">
              <Twitter className="w-4 h-4" /> {t('links.followTheAuthor')}
            </a>
          </p>
        </div>
      </div>
      <div className="absolute bottom-10">
        Copyright © 2023{' '}
        <a href="https://twitter.com/korbinzhao" target="_blank" rel="noreferrer">
          Korbin Zhao
        </a>
        . All rights reserved.
      </div>
    </div>
  );
}

export default function WelcomePage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  return !loading ? <WelcomeContent /> : null;
}