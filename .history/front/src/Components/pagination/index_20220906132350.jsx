import React from "react";
const Pagination = (props) => {
  const { users, setList } = props;
  const quantityUserPerPage = 20;
  const numerosPaginas = users / quantityUserPerPage;
  let arrayPagination = [];
  for (let i = 0; i < numerosPaginas.length; i++) {
    arrayPagination.push(i);
  }
  console.log(numerosPaginas);
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
