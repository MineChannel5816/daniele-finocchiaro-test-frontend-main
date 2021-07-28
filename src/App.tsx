import React, { useEffect, useState } from 'react';

import { Intent, Position, Toaster } from '@blueprintjs/core';

import { v4 } from 'uuid';

import './App.css';

import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

import faker from 'faker';

import boiler from './assets/boiler.png';

import { Pagination } from './Pagination';

import { SideBar } from './SideBar';

import { Footer } from './Footer';

export interface BoilerInfo {
  id: string;
  discount: boolean;
  imageSrc: string;
  articleBrand: string;
  articleDescription: string;
  articleName: string;
  numberStar: number;
  price: number;
  oldPrice?: number;
  discountAmount?: number;
  installation: boolean;
  tipology: string;
  powerType: string;
  locationType: string;
  power: number;
  available: boolean;
}

export interface ToastMessage {
  message: string;
  type: Intent;
}

/* Function to Generate Random Data */
function generateData() {
  const BoilerInfo: BoilerInfo[] = new Array(60).fill({}).map(() => {
    let prod = faker.commerce.product();
    let prodDesc = prod + ' ' + faker.lorem.words();
    let discount = faker.random.boolean();

    let location = ['ext', 'int', 'ext/int'];
    let powerType = ['electric', 'methane'];
    let tipology = ['condensation', 'openCam', 'closeCam'];

    let generate: BoilerInfo = {
      articleBrand: faker.company.companyName(),
      articleDescription: prodDesc,
      articleName: prod,
      discount: discount,
      id: v4(),
      imageSrc: boiler,
      installation: faker.random.boolean(),
      locationType: location[faker.random.number({ min: 0, max: 2 })],
      price: Number(faker.finance.amount(620)),
      numberStar: faker.random.number({ min: 1, max: 5 }),
      power: faker.random.number({ min: 19, max: 34, precision: 0.5 }),
      powerType: powerType[faker.random.number({ min: 0, max: 1 })],
      tipology: tipology[faker.random.number({ min: 0, max: 2 })],
      available: faker.random.boolean(),
    };
    if (discount) {
      generate = {
        ...generate,
        oldPrice: Number(faker.finance.amount(620, generate.price)),
        discountAmount: faker.random.number({ min: 10, max: 70 }),
      };
    }
    return generate;
  });
  return BoilerInfo;
}

const dataBoiler: BoilerInfo[] = generateData();

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
      {/* {comparisonItems.length == 0 ? ( */}
      <Footer
        cart={cartItems}
        comparisonList={comparisonItems}
        onClickItemsHearts={setCartItems}
        onClickItemsComparison={setComparisonItems}
        handleToast={addToast}
      />
      {/*  ) : null} */}
    </>
  );
}

export default App;
