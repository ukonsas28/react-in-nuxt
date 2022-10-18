const start = async () => {
  /*инициализация модуля для загрузки 
  вместо {} можно попробывать передать объект shared с зависимостями 
  для подключаемого модуля, что то типа такого
  {
      'react-router-dom': {
        requiredVersion: '6.2.1',
        eager: false,
        singleton: true,
      },
      'react-dom': {
        requiredVersion: deps['react-dom'],
        eager: false,
        singleton: true,
      },
      'react': {
        requiredVersion: deps.react,
        eager: false,
        singleton: true,
      },
    },
  но как это правильно сделать ¯\_(ツ)_/¯ */
  // await reactApp.init({});
  /*получаем модуль и запускаем его выполнение
  result - это вроде фабрика которая создаст объект с модулем и запустит его */
  // const result = await reactApp.get("./ReactApp");
  // result();
};

start();
