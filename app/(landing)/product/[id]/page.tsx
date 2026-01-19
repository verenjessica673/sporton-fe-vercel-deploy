import Image from "next/image";
import ProductActions from "../../components/product-detail/product-action";
import { getProductDetail } from "@/app/services/product.service";
import { getimageUrl } from "@/app/lib/api";
import priceFormat from "@/app/utils/price";

type TPageProps = {
    params: {
        id: string;
    }
}

const ProductDetail = async ({params}:TPageProps) => {
  const {id} = await params;

  const product = await getProductDetail(id);

  console.log("product stock", product.stock);

    return (
    <main className="container mx-auto py-40 flex gap-12">
      <div className="bg-primary-light aspect-square min-w-140 flex justify-center items-center">
        <Image
          src={getimageUrl(product.imageUrl)}
          width={550}
          height={550}
          alt={product.name}
          className="aspect-square object-contain w-full"
        />
      </div>

      <div className="w-full py-7">
        <h1 className="font-bold text-5xl mb-6">{product.name}</h1>
        <div className="bg-primary-light rounded-full text-primary py-2 px-6 w-fit mb-5">
         {product.category.name}
        </div>
        <p className="text-gray-600 mb-6">
            The SportsOn HyperSoccer v2 is engineered for the player who demands precision, 
            power, and unrivaled speed on the pitch. Featuring a striking, two-toned black 
            and white design with deep crimson accents, these cleats don't just perform—they 
            make a statement. Experience the future of football footwear with v2's enhanced 
            fit and cutting-edge traction.</p>

        <div className="text-primary text-3xl font-semibold mb-12">
         {priceFormat(product.price)}
        </div>
        <ProductActions stock={product.stock} />
      </div>    
    </main>
    );
}

export default ProductDetail;