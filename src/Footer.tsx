import React from 'react';
import type { BoilerInfo } from './App';

export function Footer(props: { comparisonItems: BoilerInfo[] }) {
  return (
    <div className="bg-indigo-600 fixed bottom-0 w-full h-16 flex z-10">
      {props.comparisonItems.length > 0 ? (
        props.comparisonItems.length < 2 ? (
          <p className="text-lg text-white p-4 flex-grow">
            Seleziona altri {3 - props.comparisonItems.length} prodotti per
            confrontarli
          </p>
        ) : props.comparisonItems.length < 3 ? (
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
        className="rounded-r-full rounded-l-full py-1 px-8 uppercase text-white font-medium border-2 border-white m-2 mx-10 disabled:opacity-25"
        disabled={props.comparisonItems.length <= 2}
      >
        CONFRONTA
      </button>
    </div>
  );
}
