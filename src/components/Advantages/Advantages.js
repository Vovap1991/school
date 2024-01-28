import {
  AdvantagesWrapper,
  AdvantList,
  AdvantListItem,
  AdvantListItemTitle,
  AdvantListItemText,
} from './Advantages.styled';

export const Advantages = () => {
  return (
    <AdvantagesWrapper>
      <h2>Як навчання на наших курсах може допомогти саме тобі?</h2>
      <AdvantList>
        <AdvantListItem>
          <AdvantListItemTitle>Перейти на новий рівень</AdvantListItemTitle>
          <AdvantListItemText>
            Старанно навчаючись за 6 місяців Ви опануєте новий рівень
            англійської мови
          </AdvantListItemText>
        </AdvantListItem>
        <AdvantListItem>
          <AdvantListItemTitle>Отримати вищу зарплатню</AdvantListItemTitle>
          <AdvantListItemText>
            Чим вище Ваша англійська - тим вище Ваші доходи
          </AdvantListItemText>
        </AdvantListItem>
        <AdvantListItem>
          <AdvantListItemTitle>Опанувати програмування</AdvantListItemTitle>
          <AdvantListItemText>
            Ви зможете зрозуміти, чи вийде у Вас у сфері IT
          </AdvantListItemText>
        </AdvantListItem>
        <AdvantListItem>
          <AdvantListItemTitle>Поглибити знання</AdvantListItemTitle>
          <AdvantListItemText>
            Працюючи з матеріалом, що виходить за межі базових курсів
          </AdvantListItemText>
        </AdvantListItem>
        <AdvantListItem>
          <AdvantListItemTitle>Заощадити кошти</AdvantListItemTitle>
          <AdvantListItemText>
            Навчання online дешевше ніж зі звичайним репетитором
          </AdvantListItemText>
        </AdvantListItem>
        <AdvantListItem>
          <AdvantListItemTitle>Навчатись online</AdvantListItemTitle>
          <AdvantListItemText>Потрібен лише інтернет</AdvantListItemText>
        </AdvantListItem>
      </AdvantList>
    </AdvantagesWrapper>
  );
};
