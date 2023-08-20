import { FC } from 'react';
import classes from './Home.module.css';

export const Home: FC = () => {
  return (
    <div className={classes.img}>
      <center>
        <h2 style={{ color: 'aqua' }}>
          Инфромация по реализации данного проекта
        </h2>
        <span>
          <b>
            Использованное Api -
            <a href='https://social-network.samuraijs.com/api/1.0/'>
              https://social-network.samuraijs.com/api/1.0/
            </a>
          </b>
        </span>
        <br />
        <span style={{ color: 'aliceblue' }}>
          <b style={{ color: 'aqua' }}>Данные тестового аккаунта:</b> <br />
          Email: free@samuraijs.com
          <br />
          Password: free
        </span>
      </center>

      <p className={classes.p} style={{ maxWidth: '600px' }}>
        Сайт написан по Youtube курсу &quot;It-Kamasutra&quot; - Путь Самурая
        1.0 с использованием новых возможностей React библиотеки.
        <br />
        Написано на функциональных компонентах с использованием Хуков.
        <br />
        Api использовано от &quot;It-Kamasutra&quot;, вместо Axios
        использовалось Fetch запросы.
        <br />
        Store реализован через Redux-toolkit, Redux-Thunk, для добавления данных
        о регистрированном пользователе и хранении данных в локальном сторе
        использовался Redux-Persist. Реализован публичный и приватный роут.
      </p>
      <p className={classes.p} style={{ color: '#83ff00' }}>
        При создании компонент использовались частые хуки такие как - useState,
        useEffect, useDispatch, useSelector, React-hook-form.
        <br />
        Для небольшого оформления(акцент делался больше на логику)
        использовались css-module.components, inline styles.
        <br />В проекте реализован TypeScript(базовые вещи).
      </p>
      <p className={classes.p}>
        При переходе на страницу <b>Profile</b> - отображаются данные
        регистрированного пользователя, так же при выборе любого пользователя со
        страницы Users происходит переход на страницу Profile и отображаются
        данные выбранного пользователя.
        <br />
        У регистрированного пользователя по клику на Edit появляется форма с
        фокусом(для формы использовался пакет Zod Form), где можно редактировать
        данные о пользователе.
        <br />
        Так же возможна замена аватара. Посты под данными, реализованы локально
        и не имеют доступа на Api аватарка в сообщениях меняется согласно
        выбранному пользователю. При отсутствии текста в input кнопка не активна
        с надписью Write message, после ввода текста кнопка становиться активной
        с надписью Add message.
        <br />
        Не реализован функционал изменения статуса у регистрированного
        пользователя(дабы не захломлять API разработчика)
        <br />
        Если пользователь не регистрирован - происходит переход со страниц Users
        и Profile(Private route) на страницу Login с формой для заполнения, при
        вводе 5 раз неверного пароля появляется captcha для защиты от бота.
      </p>
      <p className={classes.p} style={{ color: '#83ff00', maxWidth: '600px' }}>
        При переходе на страницу Messages - отображаются сообщения взятые из
        локального стейта. Нет привязки к API и не реализовано разделение
        сообщений на пользователей. Общее представления реализации UseState
      </p>
      <p className={classes.p} style={{ color: '#83ff00', maxWidth: '600px' }}>
        При переходе на страницу Users - отображаются данные всех пользователей
        зарегистрированных на сервере. Подписка и отписка от пользователя, выбор
        количества отображаемых пользователей на странице, возможность указать
        собственное количество отображения пользователей на странице, пагинация
        страниц &nbsp;- всё работает в связке с Api сервера.
      </p>
      <p className={classes.p} style={{ color: '#83ff00', maxWidth: '600px' }}>
        Планирую в дальнейшем добавить страницу News и ToDo List.
      </p>
    </div>
  );
};
