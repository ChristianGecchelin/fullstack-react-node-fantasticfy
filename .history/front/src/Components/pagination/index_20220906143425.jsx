import React from "react";
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
  const copiaUsers = users;
  let miau;
  let arr = [];
  for (let i = 0; i < numerosPaginas; i++) {
    debugger;
    miau = copiaUsers.slice(0, quantityUserPerPage - 1);
    arr.push(miau);
    copiaUsers.splice(0, 19);
    console.log(copiaUsers);
  }
  console.log(miau);
  console.log(arr);
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
