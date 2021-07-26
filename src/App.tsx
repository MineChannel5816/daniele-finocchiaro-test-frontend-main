import React, { useEffect, useState } from 'react';

import { Intent, Position, Toaster } from '@blueprintjs/core';

import { v4 } from 'uuid';

import './App.css';

import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

import boiler from './assets/boiler.png';

import { Pagination } from './Pagination';

import { SideBar } from './SideBar';

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

export interface ToastMessage {
  message: string;
  type: Intent;
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
  let toaster: Toaster;
  let refHandlers = (ref: Toaster) => {
    toaster = ref;
  };

  let addToast = (props: ToastMessage) => {
    toaster.show({ message: props.message, intent: props.type });
  };

  const [cartItems, setCartItems] = useState<BoilerInfo[]>([]);
  const [comparisonItems, setComparisonItems] = useState<BoilerInfo[]>([]);

  /*   useEffect(() => {
    console.log(cartItems, cartItems.length);
    console.log(comparisonItems, comparisonItems.length);
  }, [cartItems, comparisonItems]);
 */
  return (
    <>
      <Toaster position={Position.TOP} ref={refHandlers} />
      <div className="flex mb-12">
        <SideBar />
        <Pagination
          data={dataBoiler}
          cart={cartItems}
          comparisonList={comparisonItems}
          onClickItemsHearts={setCartItems}
          onClickItemsComparison={setComparisonItems}
          handleToast={addToast}
          pageLimit={3}
          dataLimit={12}
        />
      </div>
      {comparisonItems.length > 0 ? (
        <Footer comparisonItems={comparisonItems} />
      ) : null}
    </>
  );
}

export default App;
