import React, { useEffect, useState } from "react";
import "./index.css";

const Pagination = (props) => {
  const { users, setList } = props;
  const quantityUserPerPage = 20;
  const numerosPaginas = users.length / quantityUserPerPage;
  let arrayPagination = [];

  if (numerosPaginas !== 0) {
    for (let i = 0; i < numerosPaginas; i++) {
      arrayPagination.push(i + 1);
    }
  }

  const copiaUsers = [...users];
  let miau;
  let arr = [];

  const getPagination = () => {
    if (users) {
      for (let i = 0; i < numerosPaginas; i++) {
        miau = copiaUsers.slice(0, quantityUserPerPage);
        arr.push(miau);
        copiaUsers.splice(0, 20);
      }
    }
  };

  const handlePage = (e) => {
    getPagination();
    e.preventDefault();
    const indexPage = parseInt(e.target.outerText) - 1;
    console.log(arr);
    console.log(arr[indexPage]);
    setList(arr[indexPage]);
  };
  useEffect(() => {
    setList(arr[0]);
  }, []);

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
