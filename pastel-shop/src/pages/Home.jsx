import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

// 메인(Home) 페이지
export default function Home() {
  // 추천 상품 4개만 미리보기로 노출
  const featured = products.slice(0, 4);

  return (
    <div className="page home">
      {/* 히어로 영역 */}
      <section className="hero">
        <div className="hero-text">
          <p className="hero-tag">SPRING COLLECTION</p>
          <h1 className="hero-title">
            부드럽게,
            <br />
            나답게 입는 하루
          </h1>
          <p className="hero-desc">
            파스텔 무드의 데일리 의류 편집샵, Mallang입니다.
            <br />
            오늘의 기분에 어울리는 옷을 만나보세요.
          </p>
          <Link to="/shop" className="btn btn-primary">
            컬렉션 둘러보기 →
          </Link>
        </div>
        <div className="hero-visual">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
          <span className="hero-emoji">🌸</span>
        </div>
      </section>

      {/* 추천 상품 */}
      <section className="featured">
        <div className="section-head">
          <h2 className="section-title">추천 상품</h2>
          <Link to="/shop" className="section-more">
            전체보기
          </Link>
        </div>
        <div className="product-grid">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
