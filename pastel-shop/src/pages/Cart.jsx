import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";

// 장바구니(Cart) 페이지
export default function Cart() {
  const { cart, changeQty, removeFromCart, clearCart, totalPrice } = useCart();
  const navigate = useNavigate();
  const [ordered, setOrdered] = useState(false);

  // 주문하기 - 데모용. 주문 완료 메시지 표시 후 장바구니 비우기
  const handleOrder = () => {
    setOrdered(true);
    clearCart();
    // 2초 후 Home으로 강제 이동 (useNavigate)
    setTimeout(() => navigate("/"), 2500);
  };

  // 주문 완료 화면
  if (ordered) {
    return (
      <div className="page cart">
        <div className="empty-cart">
          <span className="empty-emoji">🎉</span>
          <h2>주문이 완료되었습니다!</h2>
          <p>잠시 후 홈으로 이동합니다...</p>
        </div>
      </div>
    );
  }

  // 장바구니가 비어있을 때
  if (cart.length === 0) {
    return (
      <div className="page cart">
        <div className="empty-cart">
          <span className="empty-emoji">🛒</span>
          <h2>장바구니가 비어있어요</h2>
          <p>마음에 드는 상품을 담아보세요.</p>
          <Link to="/shop" className="btn btn-primary">
            쇼핑하러 가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page cart">
      <div className="page-head">
        <h1 className="page-title">Cart</h1>
        <p className="page-sub">{cart.length}개의 상품</p>
      </div>

      <div className="cart-list">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div
              className="cart-thumb"
              style={{ backgroundColor: item.color }}
            >
              <span>{item.emoji}</span>
            </div>

            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p className="cart-item-price">
                {item.price.toLocaleString()}원
              </p>
            </div>

            <div className="qty-control">
              <button onClick={() => changeQty(item.id, -1)}>−</button>
              <span>{item.qty}</span>
              <button onClick={() => changeQty(item.id, 1)}>+</button>
            </div>

            <p className="cart-item-subtotal">
              {(item.price * item.qty).toLocaleString()}원
            </p>

            <button
              className="cart-remove"
              onClick={() => removeFromCart(item.id)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="cart-total">
          <span>총 결제금액</span>
          <strong>{totalPrice.toLocaleString()}원</strong>
        </div>
        <button className="btn btn-primary btn-block" onClick={handleOrder}>
          주문하기
        </button>
      </div>
    </div>
  );
}
