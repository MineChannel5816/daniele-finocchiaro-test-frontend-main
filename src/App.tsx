import React, { useEffect, useState } from 'react';

import * as Blueprint from '@blueprintjs/core';

import './App.css';

import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

import boiler from './assets/boiler.png';

import { Pagination } from './Pagination';

import { SideBar } from './SideBar';

import { v4 } from 'uuid';
import { Footer } from './Footer';

export interface BoilerInfo {
  id: string;
  discount: boolean;
  imageSrc: string;
  articleName: string;
  articleDescription: string;
  numberStar: number;
  price: number;
  oldPrice?: number;
}

const dataBoiler: BoilerInfo[] = [
  {
    id: v4(),
    discount: true,
    imageSrc: boiler,
    articleName: 'Ariston',
    articleDescription:
      'Matis condens - Condensing Boiler 24 kW Methane - Indoor',
    numberStar: 5,
    price: 1350,
    oldPrice: 1570,
  },
  {
    id: v4(),
    discount: false,
    imageSrc: boiler,
    articleName: 'Baxi',
    articleDescription: 'Genus One Condensing Boiler - 24 kW',
    numberStar: 2,
    price: 960,
  },
  {
    id: v4(),
    discount: true,
    imageSrc: boiler,
    articleName: 'Ariston',
    articleDescription:
      'Matis condens - Condensing Boiler 24 kW Methane - Indoor',
    numberStar: 5,
    price: 1350,
    oldPrice: 1570,
  },
  {
    id: v4(),
    discount: false,
    imageSrc: boiler,
    articleName: 'Baxi',
    articleDescription: 'Genus One Condensing Boiler - 24 kW',
    numberStar: 2,
    price: 960,
  },
  {
    id: v4(),
    discount: true,
    imageSrc: boiler,
    articleName: 'Ariston',
    articleDescription:
      'Matis condens - Condensing Boiler 24 kW Methane - Indoor',
    numberStar: 5,
    price: 1350,
    oldPrice: 1570,
  },
  {
    id: v4(),
    discount: false,
    imageSrc: boiler,
    articleName: 'Baxi',
    articleDescription: 'Genus One Condensing Boiler - 24 kW',
    numberStar: 2,
    price: 960,
  },
  {
    id: v4(),
    discount: true,
    imageSrc: boiler,
    articleName: 'Ariston',
    articleDescription:
      'Matis condens - Condensing Boiler 24 kW Methane - Indoor',
    numberStar: 5,
    price: 1350,
    oldPrice: 1570,
  },
  {
    id: v4(),
    discount: false,
    imageSrc: boiler,
    articleName: 'Baxi',
    articleDescription: 'Genus One Condensing Boiler - 24 kW',
    numberStar: 2,
    price: 960,
  },
  {
    id: v4(),
    discount: true,
    imageSrc: boiler,
    articleName: 'Ariston',
    articleDescription:
      'Matis condens - Condensing Boiler 24 kW Methane - Indoor',
    numberStar: 5,
    price: 1350,
    oldPrice: 1570,
  },
  {
    id: v4(),
    discount: false,
    imageSrc: boiler,
    articleName: 'Baxi',
    articleDescription: 'Genus One Condensing Boiler - 24 kW',
    numberStar: 2,
    price: 960,
  },
  {
    id: v4(),
    discount: true,
    imageSrc: boiler,
    articleName: 'Ariston',
    articleDescription:
      'Matis condens - Condensing Boiler 24 kW Methane - Indoor',
    numberStar: 5,
    price: 1350,
    oldPrice: 1570,
  },
  {
    id: v4(),
    discount: false,
    imageSrc: boiler,
    articleName: 'Baxi',
    articleDescription: 'Genus One Condensing Boiler - 24 kW',
    numberStar: 2,
    price: 960,
  },
  {
    id: v4(),
    discount: true,
    imageSrc: boiler,
    articleName: 'Ariston',
    articleDescription:
      'Matis condens - Condensing Boiler 24 kW Methane - Indoor',
    numberStar: 5,
    price: 1350,
    oldPrice: 1570,
  },
  {
    id: v4(),
    discount: false,
    imageSrc: boiler,
    articleName: 'Baxi',
    articleDescription: 'Genus One Condensing Boiler - 24 kW',
    numberStar: 2,
    price: 960,
  },
  {
    id: v4(),
    discount: true,
    imageSrc: boiler,
    articleName: 'Ariston',
    articleDescription:
      'Matis condens - Condensing Boiler 24 kW Methane - Indoor',
    numberStar: 5,
    price: 1350,
    oldPrice: 1570,
  },
  {
    id: v4(),
    discount: false,
    imageSrc: boiler,
    articleName: 'Baxi',
    articleDescription: 'Genus One Condensing Boiler - 24 kW',
    numberStar: 2,
    price: 960,
  },
  {
    id: v4(),
    discount: true,
    imageSrc: boiler,
    articleName: 'Ariston',
    articleDescription:
      'Matis condens - Condensing Boiler 24 kW Methane - Indoor',
    numberStar: 5,
    price: 1350,
    oldPrice: 1570,
  },
  {
    id: v4(),
    discount: false,
    imageSrc: boiler,
    articleName: 'Baxi',
    articleDescription: 'Genus One Condensing Boiler - 24 kW',
    numberStar: 2,
    price: 960,
  },
];

function App() {
  let toaster: Blueprint.Toaster;
  let refHandlers = (ref: Blueprint.Toaster) => {
    toaster = ref;
  };

  let addToast = () => {
    toaster.show({ message: 'Added!', intent: 'success' });
  };

  const [cartItems, setCartItems] = useState<BoilerInfo[]>([]);

  useEffect(() => {
    console.log(cartItems, cartItems.length);
  }, [cartItems]);

  return (
    <>
      <Blueprint.Toaster position={Blueprint.Position.TOP} ref={refHandlers} />
      <div className="flex mb-12">
        <SideBar />
        <Pagination
          data={dataBoiler}
          cart={cartItems}
          onClickItems={setCartItems}
          pageLimit={3}
          dataLimit={12}
        />
      </div>
      {cartItems.length > 0 ? <Footer cartItems={cartItems} /> : null}

      {/* <TransactionEmissionPanel handleToast={addToast} /> */}
    </>
  );
}

export default App;
