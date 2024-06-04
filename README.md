ТЕСТОВОЕ ЗАДАНИЕ - ОНЛАЙН ПОКУПКА ТОВАРА/УСЛУГ


Сделал : Frontend + Backend


Цель проекта: Написание небольшого онлайн магазина услуг и товаров

Стек технологий : Java Spring , React , MongoDB

Описание проекта: Был реализован в Бэкенд CRUD , поиск , и поиск по корзине.Главное меню в которое разделено на 2 компоненты --главное меню и шапка , где главное меню привязана к контроллеру - PurchaseController(поиск) , а главное меню ProductController(каталог) , так же там есть другие компоненты в виде страницы каждого товара , которая работает путем загрузи метода контроллера - getProductById , а параметр для него извлекает из строки поиска , /:id . Так же есть Корзина , в которую складываются все товары ,  при нажатий на кнопку(добавить в корзину) , точно так же при повторном нажатий оно снимается.Было решено его сделать пока что через значение boolean , вместо дополнительного хранение в БД из за отсутствия Авторизации в целом(можно легко добавить) , так же работает поисковик , который нахордит все элементы путем использования метода из контроллера searchProduct -- которая принимает ключнвое частичное слово , если онн совпадает хотя бы на малость , то он выведет товар/услугу. 


!!!Процесс покупки товара сделал просто через alert -- для простоты понятия , можно исправить когда добавим авторизацию

Меню
<img width="1186" alt="image" src="https://github.com/Mukash-Erasyl/ShopTest-Spring/assets/136822472/d801d8a2-b6e4-45f8-83d4-f5935dae311b">


Корзина
<img width="1439" alt="image" src="https://github.com/Mukash-Erasyl/ShopTest-Spring/assets/136822472/7ecb7e5b-fe37-4b45-b96f-25a7700eec2a">

Покупка
<img width="1291" alt="image" src="https://github.com/Mukash-Erasyl/ShopTest-Spring/assets/136822472/e69e079e-9b51-4c51-8a6d-636da124512c">

Кнопки

<img width="485" alt="image" src="https://github.com/Mukash-Erasyl/ShopTest-Spring/assets/136822472/d51ed977-199c-4329-9d6b-84d17118dc51">




POSTMAN


getid : <img width="1026" alt="image" src="https://github.com/Mukash-Erasyl/ShopTest-Spring/assets/136822472/efbe9d83-50b0-4d08-8281-6833b6d61b72">


get : <img width="1067" alt="image" src="https://github.com/Mukash-Erasyl/ShopTest-Spring/assets/136822472/7046e932-536c-4c2b-ba9f-7d03c372b8ac">


post : <img width="1063" alt="image" src="https://github.com/Mukash-Erasyl/ShopTest-Spring/assets/136822472/8da59cd4-45cd-4955-8bff-b1a53b1e55d9">


update : <img width="641" alt="image" src="https://github.com/Mukash-Erasyl/ShopTest-Spring/assets/136822472/6741e7c3-9a66-46d7-bf08-b8ac8382cc52"> 


delete : <img width="588" alt="image" src="https://github.com/Mukash-Erasyl/ShopTest-Spring/assets/136822472/8e7c2302-3604-4a1d-ac1d-8a360470929b">







