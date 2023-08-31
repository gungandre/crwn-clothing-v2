import { createSelector } from "reselect";

// useselector digunakan untuk mengoptimalkan suatu function yang jika dijalankan akan mengembalikan nilai yang sama
// contoh fucntion a + b = 2, jika dijalankan dan mendapatkan hasil yang sama akan membuang resourse atau menghambat peprforma karna dijalan kan lagi tetapi hasil nya sama

const selectCategoryReducer = (state) => {
  console.log("selected 1");
  return state.categories;
};
// kenapa di pisah anatara variable selectCategories dan selectCategoriesMap?
// karena jika data yang di ambil dari selectCategories yang ada di store redux tidak berubah maka selectCategoriesMap tidak dijalankan

// kenapa tidak dijadikan 1 selector saja? karena function selectCategories untuk mengecek apakah data yang ada di store redux berubah atau tidak, maka dari itu dibuatkan 2 selector yaitu selectCategories untuk engecek data di redux store apakah berubah, dan selectCategoriesMap untuk mengeksekusi nya jika berubah maka di kalkulasi ulang jika tidak maka nalai sebelimnya di pakai
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    console.log("selected 2");
    return categoriesSlice.categories;
  }
);

// maksud dari menggunakan reselect adalaah kita harus mendefiisikan dlu selector dari redux untuk mengambil data dari store dengan createSelect dengan parameter pertama adalah selector dari redux dan parmater kedua adalah fungsi nya

// karna di variable selectCategories hanya menreturn object categories, kitaharus reselect lagi selectCategoriesMap dan melakukan kalkulasi yg kita inginkan
// ini sangat berguna karna reselect hanya menjalankan function kalkulasi reduce jika data berubah dan dapat iptimosiasi

//! saat 1 object di store redux di perbaharui maka objectn lain yang datanya masih sama seperti sebelumnya juga akan di render ulang di komponent, maka dari itu menggunakan reselect agar data sebelumnya yang tidak berubah tidak diperbaharui dan tidak di render ulang lagi

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((acc, category) => {
      console.log("selected 3");
      const { title, items } = category;

      acc[title.toLowerCase()] = items;

      return acc;
    }, {});
  }
);

export const selectIsLoading = createSelector(
  [selectCategoryReducer],
  (state) => {
    return state.isLoading;
  }
);
