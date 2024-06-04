ТЕСТОВОЕ ЗАДАНИЕ - ОНЛАЙН ПОКУПКА ТОВАРА/УСЛУГ


Готово : Frontend + Backend


Цель проекта: Написание небольшого онлайн магазина услуг и товаров

Стек технологий : Java Spring , React , MongoDB

Описание проекта: Был реализован в Бэкенд CRUD , поиск , и поиск по корзине.Главное меню в которое разделено на 2 компоненты --главное меню и шапка , где главное меню привязана к контроллеру - PurchaseController(поиск) , а главное меню ProductController(каталог) , так же там есть другие компоненты в виде страницы каждого товара , которая работает путем загрузи метода контроллера - getProductById , а параметр для него извлекает из строки поиска , /:id . Так же есть Корзина , в которую складываются все товары ,  при нажатий на кнопку(добавить в корзину) , точно так же при повторном нажатий оно снимается.Было решено его сделать пока что через значение boolean , вместо дополнительного хранение в БД из за отсутствия Авторизации в целом(можно легко добавить) , так же работает поисковик , который нахордит все элементы путем использования метода из контроллера searchProduct -- которая принимает ключнвое частичное слово , если онн совпадает хотя бы на малость , то он выведет товар/услугу. 

<img width="483" alt="image" src="https://github.com/Mukash-Erasyl/ShopTest-Spring/assets/136822472/708436cc-4477-4e4b-8c28-d6353821ec90">
