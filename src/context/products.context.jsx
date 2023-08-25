import { createContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "../store/categories/category.types";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap };
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments("categories");
      setCategoriesMap(categoryMap);

      dispatch(
        createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoryMap)
      );
    };

    getCategoriesMap();
  }, [dispatch]);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
