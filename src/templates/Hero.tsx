import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  // <Background color="bg-gray-100">
  <Background color="bg-gray-100" backgroundImage="/assets/images/net12.png">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <span
            onClick={() => {
              const el = document.getElementById('about-section');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            style={{ cursor: 'pointer' }}
          >
            О компании
          </span>
        </li>
        <li>
          <span
            onClick={() => {
              const el = document.getElementById('vertical-features');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            style={{ cursor: 'pointer' }}
          >
            Проекты
          </span>
        </li>
        <li>
          <span
            onClick={() => {
              const el = document.getElementById('contacts-banner');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            style={{ cursor: 'pointer' }}
          >
            Контакты
          </span>
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
          <span
            onClick={() => {
              const el = document.getElementById('vertical-features');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            style={{ display: 'inline-block', cursor: 'pointer' }}
          >
            <Button xl>Посмотреть проекты</Button>
          </span>
        }
      />
    </Section>
  </Background>
);

export { Hero };
