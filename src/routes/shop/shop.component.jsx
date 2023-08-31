import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  setCategories,
  setIsLoading,
} from "../../store/categories/category.reducer";
import { useDispatch } from "react-redux";

import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      dispatch(setIsLoading(true));
      const categoriesArray = await getCategoriesAndDocuments();

      dispatch(setCategories(categoriesArray));
      dispatch(setIsLoading(false));
    };

    getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
