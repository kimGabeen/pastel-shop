import { createContext, useContext, useState } from "react";

// 장바구니 상태를 여러 페이지에서 공유하기 위한 Context
const CartContext = createContext();

export function CartProvider({ children }) {
  // cart 배열의 각 항목: { ...product, qty }
  const [cart, setCart] = useState([]);

  // 상품을 장바구니에 추가 (이미 있으면 수량 +1)
  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // 수량 변경 (delta: +1 또는 -1)
  const changeQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty + delta } : item
        )
        .filter((item) => item.qty > 0) // 수량이 0이 되면 제거
    );
  };

  // 특정 상품 삭제
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // 장바구니 비우기
  const clearCart = () => setCart([]);

  // 총 수량 / 총 금액 계산
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        changeQty,
        removeFromCart,
        clearCart,
        totalCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// 편하게 쓰기 위한 커스텀 훅
export function useCart() {
  return useContext(CartContext);
}
