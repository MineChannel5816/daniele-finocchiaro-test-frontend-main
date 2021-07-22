import React from 'react';

export function SideBar(props: {}) {
  return (
    <div className="flex flex-col m-24 border-r-2 border-gray-100 p-4 w-72">
      <div>
        <h4 className="text-base font-bold uppercase">Categorie</h4>
        <ul>
          <li>Riscaldamento</li>
          <li>Casa e acqua</li>
          <li>Casa</li>
          <li>Acqua</li>
        </ul>
      </div>

      <hr className="border my-3 opacity-50" />

      <div className="flex-col flex">
        <h3 className="text-base font-bold uppercase">Scegli Per</h3>

        <label className="flex items-center my-1">
          <input
            type="checkbox"
            value="Available"
            className="mr-2 border-blueGray-200 border-2 w-6 h-6 cursor-pointer"
          />
          Disponibili
        </label>

        <label className="flex items-center my-1">
          <input type="checkbox" value="Promotion " className="mr-2 " />
          In Promozione
          <span className="checkmark"></span>
        </label>
      </div>

      <div className="flex-col flex">
        <h3 className="text-base font-bold uppercase">Marche</h3>

        <label className="flex items-center my-1">
          <input type="checkbox" value="Available" className="mr-2 " />
          Disponibili
        </label>

        <label className="flex items-center my-1">
          <input type="checkbox" value="Promotion" className="mr-2 " />
          In Promozione
        </label>
      </div>
    </div>
  );
}
