// import React from "react";

const Home = () => {
  return (
    <div className=" mt-20  ">
      <section className="bg-hero-pattern pt-9 pb-16">
        <div className="flex gap-12 justify-center container mx-auto px-4">
          <div>
            <img src="/image2.png" alt="" />
            <div className="flex align-middle justify-between pt-4">
              <p className=" font-medium text-textColor">Уход для лица</p>
              <img src="/image7.svg" alt="" />
            </div>
          </div>
          <div className="flex flex-col items-center pt-14 ">
            <p className=" text-6xl pb-7 font-medium text-textColor">MAROON</p>
            <p
              className=" text-lg pb-10 text-center  text-textColor"
              style={{ maxWidth: "274px" }}
            >
              Натуральная косметика для бережного ухода за кожей
            </p>
            <button
              className=" rounded-sm px-6 py-3 text-textColor font-medium"
              style={{ border: "1px solid #B3BAC1" }}
            >
              Подробнее
            </button>
          </div>
          <div>
            <img src="/image3.png" alt="" />
            <div className="flex align-middle justify-between pt-4">
              <p className="font-medium text-textColor">Уход для лица</p>
              <img src="/image7.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className=" pt-32 pb-32 bg-bgHeader">
        <div className=" flex items-center gap-2 justify-between container mx-auto">
          <div>
            <p className="text-3xl text-textColor pb-6 font-medium">
              Бестселлеры
            </p>
            <p
              style={{ maxWidth: "204px" }}
              className="pb-9 text-lg text-textColor"
            >
              Легендарные продукты, завоевавшие любовь наших клиентов
            </p>
            <button
              className=" rounded-sm px-6 py-3 text-textColor font-medium"
              style={{ border: "1px solid #B3BAC1" }}
            >
              Смотреть все
            </button>
          </div>
          <div className="relative">
            <img src="/image10.png" alt="" />
            <div className=" absolute start-16 bottom-8 flex flex-col items-center">
              <p className=" text-textColor font-medium leading-5 ">High</p>
              <p className=" text-textColor2 text-sm leading-5 pb-1">
                крем для лица
              </p>
              <p className=" text-textColor">Подробнее</p>
            </div>
          </div>
          <div className="relative">
            <img src="/image9.png" alt="" />
            <div className=" absolute start-16 bottom-8 flex flex-col items-center">
              <p className=" text-textColor font-medium leading-5 ">Rest</p>
              <p className=" text-textColor2 text-sm leading-5 pb-1">
                крем для лица
              </p>
              <p className=" text-textColor">Подробнее</p>
            </div>
          </div>
          <div className="relative">
            <img src="/image8.png" alt="" />
            <div className=" absolute start-16 bottom-8 flex flex-col items-center">
              <p className=" text-textColor font-medium leading-5 ">Rose</p>
              <p className=" text-textColor2 text-sm leading-5 pb-1">
                крем для лица
              </p>
              <p className=" text-textColor">Подробнее</p>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-hero-pattern2 bg-cover  bg-no-repeat">
        <div className="py-20 container mx-auto flex flex-col items-end pr-48">
          <p
            className="text-3xl font-medium text-textColor pb-7"
            style={{ maxWidth: "277px" }}
          >
            Встречайте весну вместе с нами
          </p>
          <p
            className="text-lg pb-10 text-textColor"
            style={{ maxWidth: "270px" }}
          >
            Попробуйте новую коллекцию ухаживающих средств для лица с SPF
            защитой
          </p>
          <button
            className=" rounded-sm px-6 py-3 text-textColor font-medium"
            style={{ border: "1px solid #B3BAC1" }}
          >
            Подробнее
          </button>
        </div>
      </section>
      <section className=" bg-bgHeader">
        <div className="container py-32 mx-auto ">
          <div
            className=" bg-bgHeader2 p-24 relative"
            style={{ maxWidth: "670px" }}
          >
            <p className=" text-textColor text-3xl font-middle pb-9">
              Индивидуальный уход
            </p>
            <p
              className="text-3lg text-textColor pb-10"
              style={{ maxWidth: "329px" }}
            >
              Не всегда очевидно, какие элементы и минералы необходимы коже, а
              многочисленные эксперименты с разными средствами только ухудшают
              ее качество. Заполните анкету, и мы подберем уход, подходящий
              именно вам, учитывая ваш образ жизни, место жительства и другие
              факторы.{" "}
            </p>
            <button
              className=" rounded-sm px-6 py-3 text-textColor font-medium"
              style={{ border: "1px solid #B3BAC1" }}
            >
              Заполнить анкету
            </button>
            <div className="absolute top-14  -end-3/4">
              <img src="/image12.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-hero-pattern3 py-28">
        <div className="container mx-auto flex flex-col items-center ">
          <p className=" text-textColor text-3xl pb-12  font-medium max-w-3xl text-center">
            “Мы стремимся сделать уход за кожей доступным и приятным ритуалом
            для всех, кто хочет заботиться о себе и своем теле”{" "}
          </p>
          <button
            className=" rounded-sm px-6 py-3 text-textColor font-medium"
            style={{ border: "1px solid #B3BAC1" }}
          >
            Наша история
          </button>
        </div>
      </section>
      <section className=" py-32 bg-bgHeader">
        <div className="container mx-auto flex gap-3  justify-between items-center">
          <div>
            <div className="flex">
              <img src="/image14.png" alt="" />
              <img src="/image15.png" alt="" />
              <img src="/image16.png" alt="" />
            </div>
            <div className="flex">
              <img src="/image17.png" alt="" />
              <img src="/image18.png" alt="" />
              <img src="/image19.png" alt="" />
            </div>
          </div>
          <div>
            <p className="text-2xl font-medium text-textColor pb-5">
              Присоединяйтесь к нам
            </p>
            <p
              className="text-lg  text-textColor pb-8"
              style={{ maxWidth: "371px" }}
            >
              Подпишитесь на наш аккаунт @marooncare и узнавайте о новиках и
              акциях первыми
            </p>
            <button
              className=" rounded-sm px-6 py-3 text-textColor font-medium"
              style={{ border: "1px solid #B3BAC1" }}
            >
              Подписаться
            </button>
          </div>
        </div>
      </section>
      <section className=" bg-bgHeader">
        <div className="container py-32 mx-auto ">
          <div
            className=" bg-bgHeader2 p-24 relative"
            style={{ maxWidth: "670px" }}
          >
            <p className=" text-textColor text-3xl font-medium pb-8">
              Контакты
            </p>
            <p className=" text-textColor text-lg font-medium pb-2">Адрес</p>
            <p
              className=" text-textColor text-lg pb-6"
              style={{ maxWidth: "256px" }}
            >
              Санкт-Петербург, ул. Большая Конюшенная, 19
            </p>
            <p className=" text-textColor text-lg font-medium pb-2">Телефон</p>
            <p
              className=" text-textColor text-lg pb-6"
              style={{ maxWidth: "256px" }}
            >
              +7 (923) 888-90-60
            </p>
            <p className=" text-textColor text-lg font-medium pb-2">E-mail</p>
            <p
              className=" text-textColor text-lg pb-6"
              style={{ maxWidth: "256px" }}
            >
              info@maroon.ru
            </p>
            <div className="flex gap-x-7">
              <img src="/image21.svg" alt="" />
              <img src="/image22.svg" alt="" />
              <img src="/image23.svg" alt="" />
            </div>

            <div className="absolute top-20  -end-3/4">
              <img src="/image20.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
