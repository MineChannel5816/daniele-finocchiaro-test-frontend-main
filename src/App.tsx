import React from 'react';

import _ from 'lodash';

import * as Blueprint from '@blueprintjs/core';

import './App.css';

import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

import boiler from './assets/boiler.png';

import { Pagination } from './Pagination';

import { SideBar } from './SideBar';

import { v4 } from 'uuid';

function App() {
  let toaster: Blueprint.Toaster;
  let refHandlers = (ref: Blueprint.Toaster) => {
    toaster = ref;
  };

  let addToast = () => {
    toaster.show({ message: 'Added!', intent: 'success' });
  };

  const dataBoiler = [
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

  return (
    <>
      <Blueprint.Toaster position={Blueprint.Position.TOP} ref={refHandlers} />
      <div className="flex">
        <SideBar />
        <Pagination data={dataBoiler} pageLimit={3} dataLimit={12} />
      </div>

      <hr />
      {/* <TransactionEmissionPanel handleToast={addToast} /> */}
    </>
  );
}

export default App;
