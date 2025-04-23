import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image?: string;
  imageAlt: string;
  video?: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3 className="text-3xl font-semibold leading-tight text-gray-900">
          {props.title}
        </h3>
        <div className="mt-6 text-xl leading-7">{props.description}</div>
      </div>

      <div className="flex w-full items-center justify-center p-6 sm:w-1/2">
        {props.video ? (
          <video
            src={props.video}
            controls
            autoPlay
            loop
            muted
            className="h-auto max-w-full rounded"
          />
        ) : (
          <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
        )}
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
