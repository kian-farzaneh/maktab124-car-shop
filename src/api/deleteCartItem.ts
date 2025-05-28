export const deleteCartItem = async (cartId: string) => {
  try {
    const response = await fetch(
      `/api/proxy?url=/api/records/carts/${cartId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await response.json();
    return result;
  } catch (err) {
    console.error(`خطا در حذف آیتم با آیدی ${cartId}:`, err);
  }
};