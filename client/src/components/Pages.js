import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Pagination } from "react-bootstrap";

const Pages = observer(() => {
  const { tender } = useContext(Context);
  const pageCount = Math.ceil(tender.totalCount / tender.limit);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }
  console.log(pageCount);
  console.log(pages);
  return (
    <Pagination className="mt-3">
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          active={tender.page === page}
          onClick={() => tender.setPage(page)}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
});

export default Pages;
