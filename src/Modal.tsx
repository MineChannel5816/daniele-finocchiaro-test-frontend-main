import { Dialog } from '@blueprintjs/core';
import React from 'react';
import type { BoilerInfo, ToastMessage } from './App';
import type { BoilerCard as TypeCard } from './Pagination';
import { BoilerCard } from './BoilerCard';
import _ from 'lodash';
import { ComparisonCard } from './ComparisonCard';

export function Modal(props: {
  isOpen: boolean;
  setModal: (val: boolean) => void;
  cart: BoilerInfo[];
  comparisonList: BoilerInfo[];
  onClickItemsHearts: (val: BoilerInfo[]) => void;
  onClickItemsComparison: (val: BoilerInfo[]) => void;
  handleToast: (props: ToastMessage) => void;
}) {
  const minPrice: BoilerInfo =
    _.minBy(props.comparisonList, 'price') ?? props.comparisonList[0];
  const maxPrice: BoilerInfo =
    _.maxBy(props.comparisonList, 'price') ?? props.comparisonList[0];

  return (
    <Dialog
      className="w-7/12 flex"
      isOpen={props.isOpen}
      autoFocus={true}
      canEscapeKeyClose={true}
      canOutsideClickClose={true}
      enforceFocus={true}
      isCloseButtonShown={true}
      title={'Confronta'}
      transitionDuration={400}
      onClose={() => props.setModal(false)}
    >
      <div className="flex flex-wrap justify-around">
        {props.comparisonList.map((cardData, i) => {
          let propsToCard: TypeCard = {
            ...cardData,
            cart: props.cart,
            comparisonList: props.comparisonList,
            windowComparison: true,
            setToCart: props.onClickItemsHearts,
            setToComparison: props.onClickItemsComparison,
            handleToast: props.handleToast,
          };

          return <BoilerCard key={i} {...propsToCard} />;
        })}
      </div>

      <h1 className="font-medium text-5xl mt-2 p-2">Più costoso</h1>
      <ComparisonCard {...maxPrice} />
      <h1 className="font-medium text-5xl mt-2 p-2">Meno costoso</h1>
      <ComparisonCard {...minPrice} />
    </Dialog>
  );
}
