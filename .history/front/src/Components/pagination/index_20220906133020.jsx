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
  const array = copiaUsers.slice(0, quantityUserPerPage);
  console.log(array);
  console.log(arrayPagination);
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
