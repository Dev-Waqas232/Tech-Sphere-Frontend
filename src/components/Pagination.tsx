import { ProductMetaData } from "../types";

export default function Pagination({
  meta,
  currentPage,
  onPageChange,
}: {
  meta: ProductMetaData;
  currentPage: number;
  onPageChange: (page: number) => void;
}) {
  const limit = 1;
  const totalPages = Math.ceil(meta.totalProducts / limit);

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="mt-4 text-gray-500 flex justify-between">
      <div>
        Showing {(meta.currentPage - 1) * limit + 1} -{" "}
        {meta.currentPage * limit > meta.totalProducts
          ? meta.totalProducts
          : meta.currentPage * limit}{" "}
        from {meta.totalProducts} products
      </div>
      <div className="me-4 flex gap-4">
        {pageNumbers.map((page, index) => (
          <button
            className={`${
              typeof page !== "number"
                ? "bg-none"
                : page === currentPage
                ? "bg-gray-500 text-white"
                : "bg-main text-white"
            } py-1 px-2 rounded-md`}
            key={index}
            onClick={() => typeof page === "number" && onPageChange(page)}
            disabled={page === currentPage || page === "..."}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
