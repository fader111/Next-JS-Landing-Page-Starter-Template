import type { ReactNode } from 'react';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="flex flex-col rounded-md bg-primary-100 p-4 text-center sm:flex-row sm:items-center sm:justify-between sm:p-12 sm:text-left">
    <div className="text-lg font-semibold">
      <div className="text-gray-900">{props.title}</div>
      <div className="text-primary-500">
        {props.subtitle.split('\n').map((line, idx, arr) => (
          <span key={idx}>
            {line}
            {idx < arr.length - 1 && <br />}
          </span>
        ))}
      </div>
    </div>

    <div className="mt-3 flex w-full flex-col sm:ml-2 sm:mt-0 sm:flex-row sm:items-center sm:justify-end">
      <div className="mb-2 flex w-full flex-col items-center justify-center sm:mb-0 sm:mr-6 sm:w-auto sm:flex-row sm:justify-start">
        <div className="flex w-full flex-col items-center sm:w-auto sm:items-start">
          <div className="mb-2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 size-6 text-primary-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 4.5A1 1 0 013 3.5h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
            </svg>
            <a
              href="tel:+79267233629"
              className="text-base text-primary-700 hover:underline"
              style={{ lineHeight: '1.5' }}
            >
              +7 926 723-36-29
            </a>
          </div>
          <a
            href="https://t.me/dev_console"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-base text-primary-700 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 size-5 text-primary-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9.036 16.569c-.363 0-.3-.137-.425-.484l-1.062-3.497 8.684-5.15" />
              <path d="M9.036 16.569c.277 0 .399-.127.553-.28l1.484-1.43 3.081 2.267c.564.312.97.15 1.112-.522l2.014-9.49c.206-.93-.355-1.294-.908-1.08l-13.2 5.08c-.902.355-.892.86-.154 1.08l3.377 1.055 7.837-4.94c.369-.238.705-.106.428.132" />
            </svg>
            t.me/dev_console
          </a>
          <a
            href="mailto:fader@mail.ru"
            className="mt-2 flex items-center text-base text-primary-700 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 size-5 text-primary-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            fader@mail.ru
          </a>
        </div>
      </div>
    </div>
  </div>
);

export { CTABanner };
