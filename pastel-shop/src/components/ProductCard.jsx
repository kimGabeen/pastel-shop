import { Link } from "react-router-dom";

// Shop 페이지에서 상품 목록을 보여주는 카드
// 카드를 누르면 useParams 기반 상세 페이지(/product/:id)로 이동한다.
export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div
        className="product-thumb"
        style={{ backgroundColor: product.color }}
      >
        <span className="product-emoji">{product.emoji}</span>
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">
          {product.price.toLocaleString()}원
        </p>
      </div>
    </Link>
  );
}
