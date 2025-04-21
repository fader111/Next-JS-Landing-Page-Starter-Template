import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Машинное зрение и ИИ агенты"
    description="Дают новый уровень автоматизации и снижения расходов"
  >
    <VerticalFeatureRow
      title="Автоматическое распознавание номеров автотранспорта"
      description="Системы распознавания номеров (ANPR) позволяют автоматизировать контроль доступа на охраняемые территории, а также фиксировать нарушения ПДД."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Автоматическое распознавание объектов"
      description="Системы распознавания объектов позволяют автоматизировать контроль доступа на охраняемые территории, управлять транспортом, персоналом и многое другое."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="ИИ агенты"
      description="ИИ агенты позволяют автоматизировать рутинные задачи, такие как обработка заявок, ответы на часто задаваемые, вести базу знаний и документов."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
