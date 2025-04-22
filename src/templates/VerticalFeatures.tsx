import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <div id="vertical-features">
    <Section
      title="Машинное зрение и ИИ агенты"
      description="Дают новый уровень автоматизации и снижения расходов"
    >
      <VerticalFeatureRow
        title="Автоматическое распознавание номеров автотранспорта"
        description="Системы распознавания номеров (ANPR) позволяют автоматизировать контроль доступа на охраняемые территории, управлять работой ворот и шлагбаумов, а также фиксировать нарушения ПДД."
        image="/assets/images/license_plate.png"
        imageAlt="Licence plate recognition"
      />
      <VerticalFeatureRow
        title="Автоматическое распознавание и трекинг объектов"
        description="Системы распознавания объектов позволяют автоматизировать контроль доступа на охраняемые территории, управлять транспортом, персоналом, создавать видоаналитику и многое другое."
        // image="/assets/images/yoloV8.webp"
        image="/assets/images/bus.jpg"
        imageAlt="Second feature alt text"
        reverse
      />
      <VerticalFeatureRow
        title="ИИ агенты"
        description="ИИ агенты позволяют автоматизировать рутинные задачи, такие как обработка заявок, ответы на часто задаваемые вопросы, быстро искать документы в базе компании."
        image="/assets/images/bot.png"
        imageAlt="Third feature alt text"
      />
      <VerticalFeatureRow
        title="Встраиваемые системы управления"
        description="Разработаем систему автоматического управления с удобным интерфейсом для управления производством, цехом, станком, дорожным объектом."
        image="/assets/images/dk_web.png"
        imageAlt="Second feature alt text"
        reverse
      />
      <VerticalFeatureRow
        title="О нас"
        description="Мы разрабатываем системы автоматизации, в том числе на основе систем машинного зрения и искусственного интеллекта. Наши инженеры имеют опыт в построении систем промышленной автоматизации, зданий, систем управления дорожной инфраструктурой."
        image="/assets/images/logo1.png"
        imageAlt="Third feature alt text"
      />
    </Section>
  </div>
);

export { VerticalFeatures };
