import { CategoriesContext } from "../../context/products.context";
import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategoriesMap } from "../../store/categories/category.selector";

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);

  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    // tanda <> </> adalah shorthand dari react fragment jadi tawnpa perlu mengimport modulenya
    <>
      {/* object.keys berfungsi untuk mengambil property nilai paling luar/pertama di sebuah object */}
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
