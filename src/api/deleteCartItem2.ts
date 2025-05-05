export const deleteCartItem2 = async (cartId: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/records/carts/${cartId}`,
        {
          method: "DELETE",
          headers: {
            api_key: process.env.NEXT_PUBLIC_API_KEY as string,
          },
        }
      );
      const result = await response.json();
      return { success: response.ok, message: result.message || result };
    } catch (err) {
      console.error(`خطا در حذف آیتم با آیدی ${cartId}:`, err);
      return { 
        success: false, 
        message: err instanceof Error ? err.message : 'خطای ناشناخته در حذف آیتم' 
      };
    }
  };