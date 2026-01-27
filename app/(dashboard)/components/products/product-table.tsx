import { getImageUrl } from "@/app/lib/api";
import { Product } from "@/app/types";
import priceFormat from "@/app/utils/price";
import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

type TProductTableProps = {
  products: Product[];
  onDelete?: (id: string) => void;
  onEdit?: (product: Product) => void;
};

const ProductTable = ({ products, onDelete, onEdit }: TProductTableProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-6 py-4 font-semibold">Product</th>
            <th className="px-6 py-4 font-semibold">Category</th>
            <th className="px-6 py-4 font-semibold">Price</th>
            <th className="px-6 py-4 font-semibold">Stock</th>
            <th className="px-6 py-4 font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((data) => {
            // Fallback aman untuk image & category
            const imageSrc = data.imageUrl ? getImageUrl(data.imageUrl) : "/placeholder.png";
            const categoryName =
              typeof data.category === "object"
                ? (data.category as any)?.name ?? "-"
                : String(data.category ?? "-");

            return (
              <tr key={data._id} className="border-b border-gray-200 last:border-b-0">
                <td className="px-6 py-4 font-medium">
                  <div className="flex gap-2 items-center">
                    <div className="w-[52px] h-[52px] bg-gray-100 rounded-md overflow-hidden">
                      <Image
                        src={imageSrc}
                        width={52}
                        height={52}
                        alt={data.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <span>{data.name}</span>
                  </div>
                </td>

                <td className="px-6 py-4 font-medium">
                  <div className="rounded-md bg-gray-200 px-2 py-1 w-fit">
                    {categoryName}
                  </div>
                </td>

                <td className="px-6 py-4 font-medium">{priceFormat(data.price)}</td>
                <td className="px-6 py-4 font-medium">{data.stock} units</td>

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    {/* ✅ Perbaikan: panggil onEdit dengan product */}
                    <button
                      type="button"
                      onClick={() => onEdit?.(data)}
                      className="p-2 rounded hover:bg-gray-100"
                      aria-label={`Edit ${data.name}`}
                      title="Edit"
                    >
                      <FiEdit2 />
                    </button>

                    <button
                      type="button"
                      onClick={() => onDelete?.(data._id)}
                      className="p-2 rounded hover:bg-gray-100 text-red-600"
                      aria-label={`Delete ${data.name}`}
                      title="Delete"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;