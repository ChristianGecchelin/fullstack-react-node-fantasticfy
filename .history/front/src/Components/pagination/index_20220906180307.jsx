import React, { useEffect, useState } from "react";
import "./index.css";

const Pagination = (props) => {
  const { users, setList } = props;

  const quantityUserPerPage = 20;
  const pages = users.length / quantityUserPerPage;
  let arrayPagination = [];

  if (pages !== 0) {
    for (let i = 0; i < pages; i++) {
      arrayPagination.push(i + 1);
    }
  }

  const copiaUsers = [...users];
  let miau;
  let arr = [];

  const getPagination = () => {
    if (users) {
      for (let i = 0; i < pages; i++) {
        miau = copiaUsers.slice(0, quantityUserPerPage);
        arr.push(miau);
        copiaUsers.splice(0, 20);
      }
    }
  };

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
