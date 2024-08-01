export const delay = async (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

export function calculateDiscountedPrice<T extends number>(
  originalPrice: T,
  discountPercentage: T
): number {
  // Convert both inputs to numbers
  const originalPriceNumber =
    typeof originalPrice === "string"
      ? parseFloat(originalPrice)
      : originalPrice;
  const discountPercentageNumber =
    typeof discountPercentage === "string"
      ? parseFloat(discountPercentage)
      : discountPercentage;

  // Ensure valid numbers are provided
  if (isNaN(originalPriceNumber) || isNaN(discountPercentageNumber)) {
    throw new Error(
      "Invalid input: both original price and discount percentage must be valid numbers or numeric strings."
    );
  }

  // Calculate the discount amount
  const discountAmount = (originalPriceNumber * discountPercentageNumber) / 100;
  const discountedPrice = originalPriceNumber - discountAmount;

  // Return the discounted price
  return discountedPrice;
}

export const updateCartdb = (data: any) => {
  console.log("data update", data);
};

export const formatePrice = (price: number): string => {
  let formattedNumber = price.toLocaleString("en-US");
  return formattedNumber;
};

export const fetchProduct = async (query: any) => {
  let response = await fetch(`https://mern-24.onrender.com/products/data`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    credentials: "include",
    cache: "force-cache",
  });
  let result = await response.json();
  return result;
};
