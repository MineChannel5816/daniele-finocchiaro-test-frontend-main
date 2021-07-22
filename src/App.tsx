import React, { useState, useEffect } from 'react';

import __ from 'lodash/fp';
import _ from 'lodash';

import * as Blueprint from '@blueprintjs/core';

import './App.css';

import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

import { Pagination } from './Pagination';

import { SideBar } from './SideBar';

function App() {
  let toaster: Blueprint.Toaster;
  let refHandlers = (ref: Blueprint.Toaster) => {
    toaster = ref;
  };

  let addToast = () => {
    toaster.show({ message: 'Added!', intent: 'success' });
  };

  return (
    <>
      <Blueprint.Toaster position={Blueprint.Position.TOP} ref={refHandlers} />
      <div className="flex">
        <SideBar />
        {/* <Pagination data={dataTransaction} pageLimit={5} dataLimit={8} /> */}
      </div>

      <hr />
      <h1 className="text-8xl text-center p-8" onClick={() => addToast()}>
        Emit transaction
      </h1>
      {/* <TransactionEmissionPanel handleToast={addToast} /> */}
    </>
  );
}

export default App;
