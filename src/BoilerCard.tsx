import classNames from 'classnames';
import _ from 'lodash';
import React from 'react';

import type { BoilerCard } from './Pagination';

export function BoilerCard(props: BoilerCard) {
  const textUnderPrice = classNames(
    'font-medium',
    props.discount ? 'text-orange-500' : 'text-indigo-800',
  );
  const textPrice = classNames(
    'text-xl font-bold',
    props.discount ? 'text-orange-500' : 'text-indigo-800',
  );

  /* FARE UNO USEEFFECT PER GLI ID E METTERE CHEI CUORI SI FANNO ROSSI SE ATTVO IL V4 CHE SI AGGIUNGE ONCLICK AD UN OGGETTO ~fare qui la gestione front end e su pagination l ogetto e la logica di passaggio delle informazioni sugli attuali~ */
  return (
    <div className="flex flex-col h-96 w-80 mx-3 my-4">
      <div className="flex top-0 z-10 items-center">
        <div
          className={classNames(
            `bg-orange-500 text-white px-2 py-1 mt-2 rounded-r font-medium text-xs`,
            props.discount ? 'visible' : 'invisible',
          )}
        >
          <p>Risparmi il 20%</p>
        </div>
        <div className="flex-grow"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.902 17"
          className="w-5 m-3 cursor-pointer"
        >
          <path
            d="M18.352,1.452a5,5,0,0,0-7.048,0L9.852,2.9,8.4,1.452A4.984,4.984,0,0,0,1.352,8.5L2.8,9.952,9.852,17,16.9,9.952h0L18.352,8.5A5,5,0,0,0,18.352,1.452ZM16.69,6.838,15.238,8.29,9.873,13.655,4.487,8.29,3.035,6.838a2.641,2.641,0,0,1,1.851-4.5,2.547,2.547,0,0,1,1.851.778L8.19,4.566,9.852,6.228l1.662-1.662,1.452-1.452A2.633,2.633,0,1,1,16.69,6.838Z"
            transform="translate(0.1)"
            fill="lightgray"
          />
        </svg>
      </div>

      <img src={props.imageSrc} className="w-full bg-gray-50 -my-10" />

      <div className="mt-10">
        <p className="uppercase font-bold">{props.articleName}</p>
        <p>{props.articleDescription}</p>
        <div className="flex items-center">
          <p className={textPrice}>{props.price.toFixed(2)} €</p>
          {props.oldPrice != null ? (
            <p className="font-bold text-gray-400 line-through ml-3">
              {props.oldPrice.toFixed(2)} €
            </p>
          ) : null}
        </div>
        <p className={textUnderPrice}>Sopralluogo e installazione inclusi</p>
        <hr className="my-2" />
        <div className="flex justify-between">
          <div className="flex">
            {_.times(props.numberStar, () => {
              return (
                <svg
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
          </div>
          <div>
            <label className="flex items-center my-1">
              <p className="uppercase font-medium text-gray-400 mr-1">
                Confronta
              </p>
              <input
                type="checkbox"
                value={5}
                className="ml-2 border-blueGray-200 border-2 w-6 h-6 cursor-pointer"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
