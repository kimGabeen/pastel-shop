import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

// 상단 네비게이션 바
// Link 컴포넌트로 새로고침 없이 페이지를 이동한다.
export default function Navbar() {
  const { totalCount } = useCart();
  const location = useLocation(); // 현재 경로를 알아내 활성 메뉴 표시에 사용

  const isActive = (path) => location.pathname === path;

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        <span className="logo-mark">✿</span> Mallang
      </Link>

      <nav className="nav-menu">
        <Link to="/" className={isActive("/") ? "nav-link active" : "nav-link"}>
          Home
        </Link>
        <Link
          to="/shop"
          className={isActive("/shop") ? "nav-link active" : "nav-link"}
        >
          Shop
        </Link>
        <Link
          to="/report"
          className={isActive("/report") ? "nav-link active" : "nav-link"}
        >
          보고서
        </Link>
        <Link
          to="/cart"
          className={isActive("/cart") ? "nav-link active cart-link" : "nav-link cart-link"}
        >
          Cart
          {totalCount > 0 && <span className="cart-badge">{totalCount}</span>}
        </Link>
      </nav>
    </header>
  );
}
