import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="/">Sign in</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'На вас работает\n'}
            <span className="text-primary-500">Искусственный Интеллект</span>
          </>
        }
        description="Позволит снизить расходы и увеличить прибыль вашего бизнеса"
        button={
          <Link href="./">
            <Button xl>Посмотреть проекты</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
