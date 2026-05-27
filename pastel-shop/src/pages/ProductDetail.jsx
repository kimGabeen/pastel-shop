import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import { useCart } from "../context/CartContext";

// 상품 상세 페이지
// URL 매개변수(:id)를 useParams로 받아 해당 상품을 찾는다.
export default function ProductDetail() {
  const { id } = useParams(); // URL의 :id 값을 추출
  const navigate = useNavigate(); // 프로그래밍 방식 페이지 이동
  const { addToCart } = useCart();
  const [message, setMessage] = useState("");

  // URL의 id로 상품 검색 (useParams가 주는 값은 문자열이므로 Number 변환)
  const product = products.find((p) => p.id === Number(id));

  // 존재하지 않는 상품일 경우
  if (!product) {
    return (
      <div className="page detail">
        <div className="not-found">
          <h2>상품을 찾을 수 없습니다 😢</h2>
          <Link to="/shop" className="btn btn-primary">
            Shop으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  // 장바구니 담기 후 메시지 표시
  const handleAddToCart = () => {
    addToCart(product);
    setMessage("🛒 장바구니에 담았습니다!");
    setTimeout(() => setMessage(""), 2000);
  };

  // 바로 구매 - 장바구니에 담고 Cart 페이지로 강제 이동 (useNavigate)
  const handleBuyNow = () => {
    addToCart(product);
    navigate("/cart"); // 로직 처리 후 페이지 강제 이동
  };

  return (
    <div className="page detail">
      <button className="back-link" onClick={() => navigate(-1)}>
        ← 뒤로
      </button>

      <div className="detail-layout">
        <div
          className="detail-image"
          style={{ backgroundColor: product.color }}
        >
          <span className="detail-emoji">{product.emoji}</span>
        </div>

        <div className="detail-info">
          <span className="detail-category">{product.category}</span>
          <h1 className="detail-name">{product.name}</h1>
          <p className="detail-price">{product.price.toLocaleString()}원</p>
          <p className="detail-desc">{product.desc}</p>

          {message && <p className="detail-message">{message}</p>}

          <div className="detail-actions">
            <button className="btn btn-outline" onClick={handleAddToCart}>
              장바구니 담기
            </button>
            <button className="btn btn-primary" onClick={handleBuyNow}>
              바로 구매하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
