export const formatPrice = (number) => {
  const formatedPrice = new Intl.NumberFormat("en-US", {
    style: "decimal",
    currency: "USD",
    // maximumSignificantDigits: 3,
  }).format(number);
  return "$" + formatedPrice;
};
