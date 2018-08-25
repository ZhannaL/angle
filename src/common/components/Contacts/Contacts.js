import React from 'react';
import './Contacts.scss';
// import SimpleExample from './Map.js'

const Contacts = () => (
  <div className="contacts">
    <div>
      <p><b>Как с нами связаться:</b></p>
      <br />
      <p>Телефон:</p>
      <p>+7(960)226-51-01</p>
      <p>+7(960)226-51-12</p>
      <p>+7(960)226-51-19</p>
      <br />
      <p>Факс:</p>
      <p>+7(960)226-52-02</p>
      <p>+7(960)226-51-03</p>
      <br />
      <p><b>Как нас найти:</b></p>
      <br />
      <p>Адрес:</p>
      <p>308510</p>
      <p>Белгородский район, Белгородская область</p>
      <p>пгт. Разумное</p>
      <p>ул.Чехова д.1а</p>
      <p>ООО &quot;УголОК&quot; </p>
      <br />
    </div>
    <div className="map">
      <p className="maptext"><b>Как до нас добраться:</b></p>
      <iframe
        src="https://api-maps.yandex.ru/frame/v1/-/C6aK4N0A"
        title="This is a unique title"
        width="560"
        height="400"
        frameBorder="0"
      />
    </div>
  </div>
);

export default Contacts;
