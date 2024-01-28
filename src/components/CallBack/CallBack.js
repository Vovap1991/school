import { CallBackWrapper, CallBackForm } from './CallBack.styled';

export const CallBack = () => {
  return (
    <CallBackWrapper>
      <h2>Потрібна консультація?</h2>
      <p>Заповніть форму і ми з Вами зв'яжемося</p>
      <CallBackForm>
        <label>
          Ім'я:
          <input type="text" placeholder="Ваше ім'я" />
        </label>
        <label>
          Телефон:
          <input type="text" placeholder="Ваш номер" />
        </label>
      </CallBackForm>
    </CallBackWrapper>
  );
};
