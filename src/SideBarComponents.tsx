import React from 'react';

interface CategoryChooseMenu {
  categoryList: string[];
}

interface FilterMenu {
  FilterMenuName: string[];
  FilterMenuValue: string[];
}

interface FilterMenuBrand {
  FilterMenuBrandName: string[];
  FilterMenuBrandValue: string[];
}

interface FilterMenuTipology {
  FilterMenuTipologyName: string[];
  FilterMenuTipologyValue: string[];
}

interface FilterMenuPowerType {
  FilterMenuPowerTypeName: string[];
  FilterMenuPowerTypeValue: string[];
}

interface FilterMenuPower {
  FilterMenuPowerName: string[];
  FilterMenuPowerValue: string[];
}

interface FilterMenuLocation {
  FilterMenuLocationName: string[];
  FilterMenuLocationValue: string[];
}

export function CategoryChooseMenu(props: CategoryChooseMenu) {
  return (
    <div className="my-2">
      <h4 className="text-base font-bold uppercase">Categorie</h4>
      <ul>
        {props.categoryList.map((elem, i) => {
          return <li key={i}>{elem}</li>;
        })}
      </ul>
    </div>
  );
}

export function FilterMenu(props: FilterMenu) {
  return (
    <div className="flex-col flex my-2">
      <h3 className="text-base font-bold uppercase">Scegli Per</h3>
      {props.FilterMenuName.map((elem, i) => {
        return (
          <label key={i} className="flex items-center my-1">
            <input
              type="checkbox"
              value={props.FilterMenuValue[i]}
              className="mr-2 border-blueGray-200 border-2 w-6 h-6 cursor-pointer"
            />
            {elem}
          </label>
        );
      })}
    </div>
  );
}

export function FilterMenuBrand(props: FilterMenuBrand) {
  return (
    <div className="flex-col flex my-2">
      <h3 className="text-base font-bold uppercase">Marche</h3>
      {props.FilterMenuBrandName.map((elem, i) => {
        return (
          <label key={i} className="flex items-center my-1">
            <input
              type="checkbox"
              value={props.FilterMenuBrandValue[i]}
              className="mr-2 border-blueGray-200 border-2 w-6 h-6 cursor-pointer"
            />
            {elem}
          </label>
        );
      })}
    </div>
  );
}

export function FilterMenuTipology(props: FilterMenuTipology) {
  return (
    <div className="flex-col flex my-2">
      <h3 className="text-base font-bold uppercase">Tipologia</h3>
      {props.FilterMenuTipologyName.map((elem, i) => {
        return (
          <label key={i} className="flex items-center my-1">
            <input
              type="checkbox"
              value={props.FilterMenuTipologyValue[i]}
              className="mr-2 border-blueGray-200 border-2 w-6 h-6 cursor-pointer"
            />
            {elem}
          </label>
        );
      })}
    </div>
  );
}

export function FilterMenuPowerType(props: FilterMenuPowerType) {
  return (
    <div className="flex-col flex my-2">
      <h3 className="text-base font-bold uppercase">Alimentazione</h3>
      {props.FilterMenuPowerTypeName.map((elem, i) => {
        return (
          <label key={i} className="flex items-center my-1">
            <input
              type="checkbox"
              value={props.FilterMenuPowerTypeValue[i]}
              className="mr-2 border-blueGray-200 border-2 w-6 h-6 cursor-pointer"
            />
            {elem}
          </label>
        );
      })}
    </div>
  );
}

export function FilterMenuPower(props: FilterMenuPower) {
  return (
    <div className="flex-col flex my-2">
      <h3 className="text-base font-bold uppercase">Potenza Nominale (kW)</h3>
      {props.FilterMenuPowerName.map((elem, i) => {
        return (
          <label key={i} className="flex items-center my-1">
            <input
              type="checkbox"
              value={props.FilterMenuPowerValue[i]}
              className="mr-2 border-blueGray-200 border-2 w-6 h-6 cursor-pointer"
            />
            {elem}
          </label>
        );
      })}
    </div>
  );
}

export function FilterMenuLocation(props: FilterMenuLocation) {
  return (
    <div className="flex-col flex my-2">
      <h3 className="text-base font-bold uppercase">Utilizzo</h3>
      {props.FilterMenuLocationName.map((elem, i) => {
        return (
          <label key={i} className="flex items-center my-1">
            <input
              type="checkbox"
              value={props.FilterMenuLocationValue[i]}
              className="mr-2 border-blueGray-200 border-2 w-6 h-6 cursor-pointer"
            />
            {elem}
          </label>
        );
      })}
    </div>
  );
}

export function FilterMenuReviews() {
  return (
    <div className="flex-col flex my-2">
      <h3 className="text-base font-bold uppercase">Recensioni</h3>
      <label className="flex items-center my-1">
        <input
          type="checkbox"
          value={5}
          className="mr-2 border-blueGray-200 border-2 w-6 h-6 cursor-pointer"
        />
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
      </label>
      <label className="flex items-center my-1">
        <input
          type="checkbox"
          value={4}
          className="mr-2 border-blueGray-200 border-2 w-6 h-6 cursor-pointer"
        />
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.5 19.5"
          className="w-4 mx-1"
        >
          <path
            d="M18.694,17.863l-.222-1.357L23,11.84l-6.245-.955L14,5l-2.755,5.885L5,11.84l4.528,4.652L8.462,23,14,19.926,19.525,23,18.9,19.151"
            transform="translate(-4.25 -4.25)"
            fill="none"
            stroke="black"
            strokeWidth="1"
          />
        </svg>
      </label>
      <label className="flex items-center my-1">
        <input
          type="checkbox"
          value={3}
          className="mr-2 border-blueGray-200 border-2 w-6 h-6 cursor-pointer"
        />
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.5 19.5"
          className="w-4 mx-1"
        >
          <path
            d="M18.694,17.863l-.222-1.357L23,11.84l-6.245-.955L14,5l-2.755,5.885L5,11.84l4.528,4.652L8.462,23,14,19.926,19.525,23,18.9,19.151"
            transform="translate(-4.25 -4.25)"
            fill="none"
            stroke="black"
            strokeWidth="1"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.5 19.5"
          className="w-4 mx-1"
        >
          <path
            d="M18.694,17.863l-.222-1.357L23,11.84l-6.245-.955L14,5l-2.755,5.885L5,11.84l4.528,4.652L8.462,23,14,19.926,19.525,23,18.9,19.151"
            transform="translate(-4.25 -4.25)"
            fill="none"
            stroke="black"
            strokeWidth="1"
          />
        </svg>
      </label>
      <label className="flex items-center my-1">
        <input
          type="checkbox"
          value={2}
          className="mr-2 border-blueGray-200 border-2 w-6 h-6 cursor-pointer"
        />
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.5 19.5"
          className="w-4 mx-1"
        >
          <path
            d="M18.694,17.863l-.222-1.357L23,11.84l-6.245-.955L14,5l-2.755,5.885L5,11.84l4.528,4.652L8.462,23,14,19.926,19.525,23,18.9,19.151"
            transform="translate(-4.25 -4.25)"
            fill="none"
            stroke="black"
            strokeWidth="1"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.5 19.5"
          className="w-4 mx-1"
        >
          <path
            d="M18.694,17.863l-.222-1.357L23,11.84l-6.245-.955L14,5l-2.755,5.885L5,11.84l4.528,4.652L8.462,23,14,19.926,19.525,23,18.9,19.151"
            transform="translate(-4.25 -4.25)"
            fill="none"
            stroke="black"
            strokeWidth="1"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.5 19.5"
          className="w-4 mx-1"
        >
          <path
            d="M18.694,17.863l-.222-1.357L23,11.84l-6.245-.955L14,5l-2.755,5.885L5,11.84l4.528,4.652L8.462,23,14,19.926,19.525,23,18.9,19.151"
            transform="translate(-4.25 -4.25)"
            fill="none"
            stroke="black"
            strokeWidth="1"
          />
        </svg>
      </label>
      <label className="flex items-center my-1">
        <input
          type="checkbox"
          value={1}
          className="mr-2 border-blueGray-200 border-2 w-6 h-6 cursor-pointer"
        />
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.5 19.5"
          className="w-4 mx-1"
        >
          <path
            d="M18.694,17.863l-.222-1.357L23,11.84l-6.245-.955L14,5l-2.755,5.885L5,11.84l4.528,4.652L8.462,23,14,19.926,19.525,23,18.9,19.151"
            transform="translate(-4.25 -4.25)"
            fill="none"
            stroke="black"
            strokeWidth="1"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.5 19.5"
          className="w-4 mx-1"
        >
          <path
            d="M18.694,17.863l-.222-1.357L23,11.84l-6.245-.955L14,5l-2.755,5.885L5,11.84l4.528,4.652L8.462,23,14,19.926,19.525,23,18.9,19.151"
            transform="translate(-4.25 -4.25)"
            fill="none"
            stroke="black"
            strokeWidth="1"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.5 19.5"
          className="w-4 mx-1"
        >
          <path
            d="M18.694,17.863l-.222-1.357L23,11.84l-6.245-.955L14,5l-2.755,5.885L5,11.84l4.528,4.652L8.462,23,14,19.926,19.525,23,18.9,19.151"
            transform="translate(-4.25 -4.25)"
            fill="none"
            stroke="black"
            strokeWidth="1"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.5 19.5"
          className="w-4 mx-1"
        >
          <path
            d="M18.694,17.863l-.222-1.357L23,11.84l-6.245-.955L14,5l-2.755,5.885L5,11.84l4.528,4.652L8.462,23,14,19.926,19.525,23,18.9,19.151"
            transform="translate(-4.25 -4.25)"
            fill="none"
            stroke="black"
            strokeWidth="1"
          />
        </svg>
      </label>
    </div>
  );
}
