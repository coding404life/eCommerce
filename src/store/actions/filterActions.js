import { filterTypes } from "../action-types/filterTypes";

export const loadProducts = (products) => {
  return {
    type: filterTypes.FILTER_PRODUCTS,
    payload: products,
  };
};

export const inputValue = (inputName) => {
  const cleanText = inputName.trim().toLowerCase();
  return {
    type: filterTypes.FILTER_INPUT,
    payload: cleanText,
  };
};

export const filterCategory = (category) => {
  return {
    type: filterTypes.FILTER_CATEGORY,
    payload: category,
  };
};

export const filterCompany = (company) => {
  return {
    type: filterTypes.FILTER_COMPANY,
    payload: company,
  };
};

export const filterPrice = (priceRange) => {
  return {
    type: filterTypes.FILTER_PRICE,
    payload: priceRange,
  };
};
