import "./category.styles.scss";
import { useParams } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import { useState, useEffect } from "react";
import { selectIsLoading } from "../../store/categories/category.selector";
import ProductCard from "../..//components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";

const Category = () => {
  // use params digunakan untuk mengambil aprameter di url shop/...
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);

  // use context mengambil data dari google secara async
  // const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [products, categoriesMap]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {/* maka dari itu kita perlu menggunakan ternary operator && untuk memastikan bahwa jika product sudah terdefiisi baru di render */}
        {isLoading ? (
          <Spinner />
        ) : (
          products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </>
  );
};

export default Category;
