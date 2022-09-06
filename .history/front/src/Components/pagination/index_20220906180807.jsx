import React, { useEffect, useState } from "react";
import "./index.css";

const Pagination = (props) => {
  const { users, setList } = props;

  //Obtengo la cantidad de paginas en funcion de la cantidad de usuarios
  const quantityUserPerPage = 20;
  const pages = users.length / quantityUserPerPage;
  let arrayPagination = [];

  if (pages !== 0) {
    for (let i = 0; i < pages; i++) {
      arrayPagination.push(i + 1);
    }
  }

  // Hago una copia de los usuarios para manipular el array sin modificar el original
  const copiaUsers = [...users];
  let miau;
  let arr = [];

  // getPagination divide el array original en partes iguales segun la cantidad que queremos mostrar, determinada anteriormente
  const getPagination = () => {
    if (users) {
      for (let i = 0; i < pages; i++) {
        miau = copiaUsers.slice(0, quantityUserPerPage);
        arr.push(miau);
        copiaUsers.splice(0, 20);
      }
    }
  };

  // handlePage es la funcion que va ligada al boton y nos renderiza los users que se encuentran en el array correspondiente a la posición de la página clickeada
  const handlePage = (e) => {
    getPagination();
    const indexPage = parseInt(e.target.outerText) - 1;
    setList(arr[indexPage]);
  };

  return (
    <>
      <ul className="container-pagination">
        {arrayPagination.map((pagina) => (
          <li>
            <button className="pagination--li" onClick={handlePage}>
              {pagina}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Pagination;
