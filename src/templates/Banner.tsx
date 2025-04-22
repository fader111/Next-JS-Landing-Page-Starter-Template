import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <div id="contacts-banner">
    <Section>
      <CTABanner
        title="Контакты"
        subtitle={`Мы находимся по адресу:\n ул. Станиславского, 21, стр. 3, Москва, Бизнес центр Фабрика Станиславского`}
        button={
          <Link href="https://t.me/dev_console">
            <Button>Связаться</Button>
          </Link>
        }
      />
      {/* <div className="mt-4 flex items-center justify-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6 text-primary-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.684l1.518 4.554a1 1 0 01-.217.976l-2.1 2.1a16.001 16.001 0 006.586 6.586l2.1-2.1a1 1 0 01.976-.217l4.554 1.518A1 1 0 0121 18.72V22a2 2 0 01-2 2h-1C9.163 24 0 14.837 0 3V2a2 2 0 012-2h1z"
          />
        </svg>
        <a
          href="tel:+79267233629"
          className="text-lg text-primary-700 hover:underline"
        >
          +7 926 723-36-29
        </a>
      </div> */}
    </Section>
  </div>
);

export { Banner };
