import { ITEMS_PER_PAGE } from "@/lib/settings";

const Pagination = ({ page, count }: { page: number; count: number }) => {
  const totalPage = Math.ceil(count / ITEMS_PER_PAGE);
  const getPageLink = (pageNumber: number) => `?page=${pageNumber}`;

  return (
    <div className="p-4 flex items-center justify-between text-gray-500">
      <a
        href={getPageLink(page - 1)}
        className={`py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold ${
          page <= 1 ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        Prev
      </a>
      <div className="flex items-center gap-2 text-sm">
        {Array.from({ length: totalPage }, (_, index) => {
          const pageIndex = index + 1;
          return (
            <a
              key={pageIndex}
              href={getPageLink(pageIndex)}
              className={`px-2 rounded-sm ${
                page === pageIndex ? "bg-lamaSky" : ""
              }`}
            >
              {pageIndex}
            </a>
          );
        })}
      </div>
      <a
        href={getPageLink(page + 1)}
        className={`py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold ${
          page >= totalPage ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        Next
      </a>
    </div>
  );
};

export default Pagination;
