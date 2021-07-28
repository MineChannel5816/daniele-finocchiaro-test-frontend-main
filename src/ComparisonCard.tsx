import _ from 'lodash';
import React from 'react';
import { v4 } from 'uuid';
import type { BoilerInfo } from './App';

export function ComparisonCard(props: BoilerInfo) {
  return (
    <div className="flex mb-2 shadow-md p-2">
      <img
        src={props.imageSrc}
        loading="lazy"
        className="border-r-2 object-contain"
      />
      <div className="flex flex-col">
        <h1 className="font-medium text-3xl p-2">
          {props.articleBrand} |{' '}
          <span className="font-normal">{props.articleName}</span>
        </h1>
        <hr />
        <div className="flex flex-col flex-wrap justify-around h-52">
          <p className="p-2 text-lg">
            <span className="font-medium">Costo: </span>
            {props.price} €
          </p>
          <p className="p-2 text-lg">
            <span className="font-medium">Utilizzo: </span>
            {props.locationType === 'ext'
              ? 'Esterno'
              : props.locationType === 'int'
              ? 'Interno'
              : 'Esterno/Interno'}
          </p>
          <p className="p-2 text-lg">
            <span className="font-medium">Tipologia: </span>
            {props.tipology === 'condensation'
              ? 'A Condensazione'
              : props.tipology === 'openCam'
              ? 'Camera Aperta'
              : 'Camera Stagna'}
          </p>
          <p className="p-2 text-lg flex">
            <span className="font-medium">Qualità: </span>
            {_.times(props.numberStar, () => {
              return (
                <svg
                  key={v4()}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 42 42"
                  className="w-4 mx-1"
                  fill="#461E7D"
                >
                  <path
                    id="Path_2755"
                    data-name="Path 2755"
                    d="M35.431,33.585l-.492-3.015L45,20.2,31.123,18.077,25,5,18.877,18.077,5,20.2,15.062,30.538,12.692,45,25,38.169,37.277,45l-1.385-8.554"
                    transform="translate(-4 -4)"
                  />
                </svg>
              );
            })}
            {_.times(5 - props.numberStar, () => {
              return (
                <svg
                  key={v4()}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 42 42"
                  className="w-4 mx-1"
                  stroke="black"
                  strokeWidth="2"
                  fill="none"
                >
                  <path
                    id="Path_2755"
                    data-name="Path 2755"
                    d="M35.431,33.585l-.492-3.015L45,20.2,31.123,18.077,25,5,18.877,18.077,5,20.2,15.062,30.538,12.692,45,25,38.169,37.277,45l-1.385-8.554"
                    transform="translate(-4 -4)"
                  />
                </svg>
              );
            })}
          </p>
          <p className="p-2 text-lg">
            <span className="font-medium">Sconto: </span>
            {props.discount ? 'Si' : 'No'}
          </p>
          <p className="p-2 text-lg">
            <span className="font-medium">Potenza Nominale: </span>
            {props.power} kW
          </p>
          <p className="p-2 text-lg">
            <span className="font-medium">Alimentazione: </span>
            {props.powerType === 'electric' ? 'Elettrica' : 'Metano'}
          </p>
          <p className="p-2 text-lg">
            <span className="font-medium">Montaggio Garantito: </span>
            {props.installation ? 'Si' : 'No'}
          </p>
        </div>
      </div>
    </div>
  );
}
