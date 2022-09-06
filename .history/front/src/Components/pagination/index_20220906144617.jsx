import React, { useEffect } from "react";
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
  const copiaUsers = ...users
  let miau;
  let arr = [];
  const getPagination = () => {
    copiaUsers=...users
    if (users) {
      for (let i = 0; i < numerosPaginas; i++) {
        debugger;
        miau = copiaUsers.slice(0, quantityUserPerPage);
        arr.push(miau);
        copiaUsers.splice(0, 20);
      }
    }
    console.log(arr);
  };
  useEffect(() => {
    getPagination();
  }, [users]);

  return (
    <>
      <ul>
        {arrayPagination.map((pagina) => (
          <li>{pagina}</li>
        ))}
      </ul>
    </>
  );
};

export default Pagination;
