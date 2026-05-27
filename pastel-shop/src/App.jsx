import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Report from "./pages/Report";
import "./App.css";

// 앱 전체 구조
// CartProvider로 장바구니 상태를 전역 공유하고,
// BrowserRouter로 앱을 감싸 라우팅 기능을 활성화한다.
export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <main className="content">
          {/* Routes: 모든 경로 정의를 담는 컨테이너 */}
          <Routes>
            {/* path와 element를 매핑한다 */}
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            {/* URL 매개변수 :id 를 받는 동적 라우팅 */}
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/report" element={<Report />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>© 2026 Mallang · 강원대학교 웹프로그래밍 실습 과제</p>
        </footer>
      </BrowserRouter>
    </CartProvider>
  );
}
