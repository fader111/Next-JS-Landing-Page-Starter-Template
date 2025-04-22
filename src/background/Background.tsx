import type { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color?: string;
  backgroundImage?: string;
};

const Background = (props: IBackgroundProps) => (
  <div
    className={props.color}
    style={
      props.backgroundImage
        ? {
            backgroundImage: `url('${props.backgroundImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }
        : undefined
    }
  >
    {props.children}
  </div>
);

export { Background };
