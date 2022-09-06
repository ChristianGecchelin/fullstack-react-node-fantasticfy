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
    e.preventDefault();
    console.log(e.target.outerText);
    const indexPage = parseInt(e.target.outerText) - 1;
    setList(arr[indexPage]);
  };
  useEffect(() => {
    getPagination();
  }, [users]);

  return (
    <>
      <ul>
        {arrayPagination.map((pagina) => (
          <li onClick={handlePage}>{pagina}</li>
        ))}
      </ul>
    </>
  );
};

export default Pagination;
