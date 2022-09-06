import React from "react";
const Pagination = (props) => {
  const { users, setList } = props;
  const quantityUserPerPage = 20;
  const numerosPaginas = users.length / quantityUserPerPage;
  let arrayPagination = [];
  if (numerosPaginas !== 0) {
    debugger;
    for (let i = 0; i < numerosPaginas; i++) {
      debugger;
      arrayPagination.push(i);
    }
  }

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
