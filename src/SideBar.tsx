import React from 'react';
import {
  CategoryChooseMenu,
  FilterMenu,
  FilterMenuBrand,
  FilterMenuLocation,
  FilterMenuPower,
  FilterMenuPowerType,
  FilterMenuReviews,
  FilterMenuTipology,
} from './SideBarComponents';

const categoryList = ['Riscaldamento', 'Casa e acqua', 'Casa', 'Acqua'];
const FilterMenuOption = {
  FilterMenuName: ['Disponibili', 'In Promozione'],
  FilterMenuValue: ['Available', 'Promotion'],
};

const FilterMenuBrandOption = {
  FilterMenuBrandName: ['Ariston', 'Baxi', 'Ariston'],
  FilterMenuBrandValue: ['Ariston', 'Baxi', 'Ariston'],
};

const FilterMenuTipologyOption = {
  FilterMenuTipologyName: ['A Condensazione', 'Camera Aperta', 'Camera Stagna'],
  FilterMenuTipologyValue: ['ACondensazione', 'CameraAperta', 'CameraStagna'],
};

const FilterMenuPowerTypeOption = {
  FilterMenuPowerTypeName: ['Elettrica', 'Metano'],
  FilterMenuPowerTypeValue: ['Elettric', 'Methane'],
};
const FilterMenuPowerOption = {
  FilterMenuPowerName: ['19.5', '24', '25', 'da 30 a 34'],
  FilterMenuPowerValue: ['19.5', '24', '25', '>30'],
};

const FilterMenuLocationOption = {
  FilterMenuLocationName: ['Esterno', 'Interno'],
  FilterMenuLocationValue: ['Esterno', 'Interno'],
};

export function SideBar(props: {}) {
  return (
    <div className="flex flex-col ml-24 border-r-2 border-gray-100 p-4 w-72">
      <CategoryChooseMenu categoryList={categoryList} />
      <hr className="border my-3 opacity-50" />
      <FilterMenu
        FilterMenuName={FilterMenuOption.FilterMenuName}
        FilterMenuValue={FilterMenuOption.FilterMenuValue}
      />
      <FilterMenuBrand
        FilterMenuBrandName={FilterMenuBrandOption.FilterMenuBrandName}
        FilterMenuBrandValue={FilterMenuBrandOption.FilterMenuBrandValue}
      />
      <FilterMenuTipology
        FilterMenuTipologyName={FilterMenuTipologyOption.FilterMenuTipologyName}
        FilterMenuTipologyValue={
          FilterMenuTipologyOption.FilterMenuTipologyValue
        }
      />
      <FilterMenuPowerType
        FilterMenuPowerTypeName={
          FilterMenuPowerTypeOption.FilterMenuPowerTypeName
        }
        FilterMenuPowerTypeValue={
          FilterMenuPowerTypeOption.FilterMenuPowerTypeValue
        }
      />
      <FilterMenuPower
        FilterMenuPowerName={FilterMenuPowerOption.FilterMenuPowerName}
        FilterMenuPowerValue={FilterMenuPowerOption.FilterMenuPowerValue}
      />
      <FilterMenuLocation
        FilterMenuLocationName={FilterMenuLocationOption.FilterMenuLocationName}
        FilterMenuLocationValue={
          FilterMenuLocationOption.FilterMenuLocationValue
        }
      />
      <FilterMenuReviews />
    </div>
  );
}
