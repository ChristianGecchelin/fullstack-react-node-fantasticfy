import React from "react";
const Pagination = (props) => {
  const { users, setList } = props;
  const quantityUserPerPage = 20;
  const numerosPaginas = users / quantityUserPerPage;
  return (
    <>
      <ul>{numerosPaginas.map((pagina) => pagina)}</ul>
    </>
  );
};

export default Pagination;