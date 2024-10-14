import { CiFilter } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import AdminTopbar from "../../components/AdminTopbar";
import AdminLayout from "./AdminLayout";
import { useGetProductsQuery } from "../../features/products/productApi";
import { findCategory } from "../../utils/findCaetgory";

export default function AdminProducts() {
  const navigate = useNavigate();

  const { isLoading, data } = useGetProductsQuery({});

  return (
    <AdminLayout>
      <AdminTopbar title="Products"></AdminTopbar>
      <section className="md:px-5 px-2 font-primary font-medium">
        <div className="bg-white mt-3 md:mt-6 w-full rounded-md">
          <div className="flex justify-between px-4">
            <div className="py-4">
              <p>Products list</p>
            </div>
            <div className="flex items-center md:gap-4 gap-2">
              <button className="flex items-center gap-1 text-sm border border-secondary py-2 px-3 rounded-md">
                <CiFilter size={18} />
                Filter
              </button>
              <button
                className="flex items-center gap-1 text-white text-sm bg-main py-2 px-3 rounded-md"
                onClick={() => navigate("/admin/add-product")}
              >
                <IoIosAdd size={18} />
                Add
              </button>
            </div>
          </div>
        </div>

        {!isLoading ? (
          <table className="table bg-white mt-3 md:mt-6 w-full rounded-md">
            <thead>
              <tr className=" text-gray-500 border-b">
                <td className="py-2 px-6">Name</td>
                <td>Category</td>
                <td>Price</td>
                <td>Stock</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {data?.data?.products.map((product) => (
                <tr className="border-b" key={product._id}>
                  <td className="py-2 px-6">{product.title}</td>
                  <td>{findCategory(product.category)}</td>
                  <td>$ {product.price}</td>
                  <td>0</td>
                  <td>Actions</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>Loading...</div>
        )}

        {data?.data?.products && (
          <div className="mt-4 text-gray-500">
            Showing {(data.data.meta.currentPage - 1) * 10 + 1} -{" "}
            {data.data.meta.currentPage * 10 > data.data.meta.totalProducts
              ? data.data.meta.totalProducts
              : data.data.meta.currentPage * 10}{" "}
            from {data.data.meta.totalProducts} products
          </div>
        )}
      </section>
    </AdminLayout>
  );
}
