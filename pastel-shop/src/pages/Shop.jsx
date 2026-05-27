import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

// Shop 페이지 - 전체 상품 목록 + 카테고리 필터
export default function Shop() {
  const [category, setCategory] = useState("전체");

  // 카테고리 목록 (중복 제거)
  const categories = ["전체", ...new Set(products.map((p) => p.category))];

  // 선택된 카테고리에 따라 필터링
  const filtered =
    category === "전체"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div className="page shop">
      <div className="page-head">
        <h1 className="page-title">Shop</h1>
        <p className="page-sub">전체 {filtered.length}개의 상품</p>
      </div>

      {/* 카테고리 필터 버튼 */}
      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={category === cat ? "filter-btn active" : "filter-btn"}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
