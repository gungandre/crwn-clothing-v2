import "./category.styles.scss";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../context/products.context";
import ProductCard from "../..//components/product-card/product-card.component";

const Category = () => {
  // use params digunakan untuk mengambil aprameter di url shop/...
  const { category } = useParams();
  // use context mengambil data dari google secara async
  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categoriesMap[category]);
  console.log("pro", category);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [products, categoriesMap]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {/* maka dari itu kita perlu menggunakan ternary operator && untuk memastikan bahwa jika product sudah terdefiisi baru di render */}
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;