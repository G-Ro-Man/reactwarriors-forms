Выполненное задание.

Задание. Форма

Форма с 4 шагами: 3 шага заполнение данных, последняя отображение заполненныx данных

Шаг 1 (Basic)
Поля	Тип инпута	Валидация
firstname	text	Must be 5 characters or more
lastname	text	Must be 4 characters or more
password	password	Must be 6 characters or more
repeatPassword	password	Must be equal password
gender	radio	Required
Шаг 2 (Contacts)
Поля	Тип инпута	Валидация
email	text	Invalid email address
mobile	text	Invalid mobile
country	select	Required
city	select	Required
При выборе опредленной страны должны отображаться список городов только этой страны, связь по id
Шаг 3 (Avatar)
Поля	Тип инпута	Валидация
avatar	file	Required
После загрузки аватара пользователя должно показывать его превью ("img src='base64'")

На каждом шаге (кроме 4-го шага) должны отображаться кнопки Назад - Вперед

При нажатии на кнопку Вперед должна проходить валидация:

если валидно, показывать поля следующего шага
если невлидно, показываться ошибки под полями и подсвечивать border
При нажатии на кнопку Назад должно отображаться предыдущий шаг

Последний 4 шаг это оторажение всех полей, которые ввел пользователь
