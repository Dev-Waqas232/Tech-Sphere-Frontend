import { CiFilter } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";

import AdminTopbar from "../../components/AdminTopbar";
import AdminLayout from "./AdminLayout";

export default function AdminProducts() {
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
              <button className="flex items-center gap-1 text-white text-sm bg-main py-2 px-3 rounded-md">
                <IoIosAdd size={18} />
                Add
              </button>
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}
