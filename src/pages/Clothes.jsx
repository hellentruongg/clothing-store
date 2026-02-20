import { useRecoilState } from "recoil";
import { clothesState } from "../states/clothes";

import ProductCard from "../components/ProductCard";

export default function ClothesPage() {
  const [clothes, setClothes] = useRecoilState(clothesState);

  function createProductCard(garment) {
    return <ProductCard key={garment.id} garment={garment} />;
  }

  return (
    <>
      <section className="flex flex-wrap gap-2.5 justify-center mt-6">
        {clothes.map((garment) => createProductCard(garment))}
      </section>
    </>
  );
}
