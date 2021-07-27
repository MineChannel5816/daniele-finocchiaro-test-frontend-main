import React, { useState } from 'react';
import type { BoilerInfo, ToastMessage } from './App';

import { Transition } from '@tailwindui/react';
import { Modal } from './Modal';

export function Footer(props: {
  cart: BoilerInfo[];
  comparisonList: BoilerInfo[];
  onClickItemsHearts: (val: BoilerInfo[]) => void;
  onClickItemsComparison: (val: BoilerInfo[]) => void;
  handleToast: (props: ToastMessage) => void;
}) {
  const [modalState, setModalState] = useState(false);

  return (
    <>
      <Transition
        show={props.comparisonList.length > 0}
        enter="duration-1000 "
        enterFrom="opacity-0 translate-y-16"
        enterTo="opacity-100 -translate-y-0"
        leave="duration-1000"
        leaveFrom="opacity-100 -translate-y-0"
        leaveTo="opacity-0 translate-y-16"
      >
        <div className="bg-indigo-600 fixed bottom-0 w-full h-16 flex z-10 transform">
          {props.comparisonList.length > 0 ? (
            props.comparisonList.length < 2 ? (
              <p className="text-lg text-white p-4 flex-grow">
                Seleziona altri {3 - props.comparisonList.length} prodotti per
                confrontarli
              </p>
            ) : props.comparisonList.length < 3 ? (
              <p className="text-lg text-white p-4 flex-grow">
                Seleziona ancora un prodotto per un confronto più dettagliato
              </p>
            ) : (
              <p className="text-lg text-white p-4 flex-grow">
                Confronta i modelli selezionati
              </p>
            )
          ) : null}

          <button
            className="rounded-r-full rounded-l-full py-1 px-8 uppercase text-white font-medium border-2 border-white m-2 mx-10 disabled:opacity-25 disabled:cursor-not-allowed"
            disabled={props.comparisonList.length <= 2}
            onClick={() => setModalState(true)}
          >
            CONFRONTA
          </button>
          <Modal isOpen={modalState} setModal={setModalState} {...props} />
        </div>
      </Transition>
    </>
  );
}
