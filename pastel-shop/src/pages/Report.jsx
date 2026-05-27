import { Link } from "react-router-dom";

// 제작 보고서 페이지
// 과제 제출용 보고서를 사이트 내 한 페이지로 구성한다.
export default function Report() {
  return (
    <div className="page report">
      <div className="report-head">
        <span className="report-badge">PROJECT REPORT</span>
        <h1 className="report-title">제작 보고서</h1>
        <p className="report-subtitle">
          React Router를 이용한 파스텔 쇼핑몰 「Mallang」 제작
        </p>
        <p className="report-meta">강원대학교 AI융합학과 · 김가빈</p>
      </div>

      {/* 1. 개요 */}
      <section className="report-section">
        <h2>1. 프로젝트 개요</h2>
        <p>
          본 프로젝트는 React Router(v6 기준)를 활용하여 페이지 새로고침 없이
          여러 화면을 전환하는 단일 페이지 애플리케이션(SPA) 형태의 쇼핑몰을
          제작하는 것을 목표로 한다. 의류·패션을 판매 품목으로 설정하였으며,
          부드러운 파스텔 톤의 디자인을 적용하여 사용자에게 편안한 쇼핑 경험을
          제공하고자 하였다.
        </p>
        <p>
          완성된 애플리케이션은 GitHub 원격 저장소에 코드를 업로드하고, 정적 웹
          호스팅 플랫폼인 Vercel을 통해 배포하여 누구나 접속 가능한 도메인
          주소로 서비스된다.
        </p>

        <h3>개발 환경</h3>
        <table className="report-table">
          <tbody>
            <tr>
              <th>프레임워크</th>
              <td>React 19 (Vite 빌드 도구)</td>
            </tr>
            <tr>
              <th>라우팅</th>
              <td>react-router-dom</td>
            </tr>
            <tr>
              <th>언어</th>
              <td>JavaScript (JSX), CSS</td>
            </tr>
            <tr>
              <th>형상 관리 / 배포</th>
              <td>GitHub / Vercel</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 2. 페이지 구성 */}
      <section className="report-section">
        <h2>2. 페이지 구성 및 라우팅 설계</h2>
        <p>
          애플리케이션은 다음 다섯 개의 페이지로 구성되며, 각 페이지는 URL
          경로와 1:1로 매핑된다.
        </p>
        <table className="report-table">
          <thead>
            <tr>
              <th>페이지</th>
              <th>경로(path)</th>
              <th>설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Home</td>
              <td><code>/</code></td>
              <td>메인 화면, 추천 상품 노출</td>
            </tr>
            <tr>
              <td>Shop</td>
              <td><code>/shop</code></td>
              <td>전체 상품 목록 + 카테고리 필터</td>
            </tr>
            <tr>
              <td>상품 상세</td>
              <td><code>/product/:id</code></td>
              <td>선택 상품의 상세 정보 (동적 라우팅)</td>
            </tr>
            <tr>
              <td>Cart</td>
              <td><code>/cart</code></td>
              <td>장바구니 및 주문</td>
            </tr>
            <tr>
              <td>제작 보고서</td>
              <td><code>/report</code></td>
              <td>본 보고서 페이지</td>
            </tr>
          </tbody>
        </table>
        <p>
          여기서 상품 상세 페이지의 경로 <code>/product/:id</code>는 URL 매개변수를
          사용하는 동적 라우팅으로, 어떤 상품을 선택했는지에 따라 같은 컴포넌트가
          서로 다른 내용을 보여준다.
        </p>
      </section>

      {/* 3. 핵심 구현 */}
      <section className="report-section">
        <h2>3. React Router 핵심 구현</h2>

        <h3>3.1 라우터 기본 구조 (App.jsx)</h3>
        <p>
          BrowserRouter로 앱 전체를 감싸 라우팅 기능을 활성화하고, Routes 컨테이너
          안에 각 경로를 Route로 정의하였다. 상단의 Navbar는 Routes 바깥에 두어
          모든 페이지에서 공통으로 표시되도록 하였다.
        </p>
        <pre className="report-code">
{`<BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/product/:id" element={<ProductDetail />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/report" element={<Report />} />
  </Routes>
</BrowserRouter>`}
        </pre>

        <h3>3.2 Link를 이용한 페이지 이동</h3>
        <p>
          HTML의 <code>&lt;a&gt;</code> 태그를 사용하면 페이지 전체가 새로고침되어
          장바구니 등의 상태가 초기화된다. 이를 막기 위해 네비게이션 메뉴와 상품
          카드 등 모든 화면 이동에는 Link 컴포넌트를 사용하여 새로고침 없이
          부드럽게 전환되도록 구현하였다.
        </p>
        <pre className="report-code">
{`<Link to="/shop">Shop</Link>
<Link to={\`/product/\${product.id}\`}> ... </Link>`}
        </pre>

        <h3>3.3 useParams – URL 매개변수 활용</h3>
        <p>
          상품 상세 페이지에서는 useParams 훅으로 URL의 <code>:id</code> 값을 읽어와,
          해당 id를 가진 상품을 데이터 배열에서 찾아 화면에 표시한다. useParams가
          반환하는 값은 문자열이므로 숫자형 id와 비교하기 위해 Number로
          변환하였다.
        </p>
        <pre className="report-code">
{`const { id } = useParams();
const product = products.find((p) => p.id === Number(id));`}
        </pre>

        <h3>3.4 useNavigate – 프로그래밍 방식 이동</h3>
        <p>
          단순 링크 이동 외에, 특정 로직을 처리한 뒤 페이지를 강제로 이동시켜야
          하는 경우에는 useNavigate 훅을 사용하였다. 예를 들어 ‘바로 구매하기’
          버튼은 상품을 장바구니에 담은 뒤 Cart 페이지로 이동하고, 주문 완료
          후에는 일정 시간 뒤 자동으로 Home으로 이동한다.
        </p>
        <pre className="report-code">
{`const navigate = useNavigate();
// 장바구니에 담은 뒤 강제 이동
navigate("/cart");`}
        </pre>

        <h3>3.5 장바구니 상태 공유 (Context API)</h3>
        <p>
          장바구니는 여러 페이지에서 함께 접근해야 하는 데이터이므로, React의
          Context API를 사용하여 전역 상태로 관리하였다. CartProvider가 상품
          추가·수량 변경·삭제·합계 계산 기능을 제공하며, 각 페이지는 useCart
          커스텀 훅을 통해 손쉽게 장바구니에 접근한다. 이로써 상품 상세 페이지에서
          담은 상품이 네비게이션 바의 배지와 Cart 페이지에 실시간으로 반영된다.
        </p>
      </section>

      {/* 4. 빌드 및 배포 */}
      <section className="report-section">
        <h2>4. 빌드 및 배포</h2>
        <p>
          개발 중에는 <code>npm run dev</code> 명령으로 코드 수정이 즉시 반영되는
          개발 서버를 사용하였고, 배포를 위해 <code>npm run build</code> 명령으로
          프로덕션 빌드를 수행하였다. 빌드 과정에서는 번들링, 트랜스파일, 코드
          압축, 트리 쉐이킹이 이루어지며, 그 결과 브라우저가 빠르게 읽을 수 있는
          정적 파일(HTML, CSS, JS)이 dist 폴더에 생성된다.
        </p>
        <h3>배포 절차</h3>
        <ol className="report-list">
          <li>프로젝트 코드를 GitHub 원격 저장소에 업로드</li>
          <li>Vercel에 가입하고 GitHub 계정을 연동</li>
          <li>해당 저장소를 Vercel 프로젝트로 가져오기(Import)</li>
          <li>빌드 설정을 확인하고 배포(Deploy) 실행</li>
          <li>발급된 도메인(https://프로젝트이름.vercel.app)으로 접속 확인</li>
        </ol>
        <p>
          SPA 특성상 <code>/</code>가 아닌 경로에서 새로고침할 경우 발생하는 404
          오류를 방지하기 위해, 모든 요청을 index.html로 연결하는 vercel.json
          설정을 추가하였다.
        </p>

        <h3>제출 주소</h3>
        <table className="report-table">
          <tbody>
            <tr>
              <th>GitHub 저장소</th>
              <td>https://github.com/__________________</td>
            </tr>
            <tr>
              <th>배포 도메인</th>
              <td>https://__________________.vercel.app</td>
            </tr>
          </tbody>
        </table>
        <p className="report-note">
          (위 주소는 GitHub 업로드 및 Vercel 배포 완료 후 기입한다.)
        </p>
      </section>

      {/* 5. 마무리 */}
      <section className="report-section">
        <h2>5. 느낀 점 및 정리</h2>
        <p>
          이번 실습을 통해 React Router의 핵심 구성 요소인 BrowserRouter, Routes,
          Route, Link와 useParams·useNavigate 훅의 역할을 직접 구현하며 익힐 수
          있었다. 특히 SPA에서 <code>&lt;a&gt;</code> 태그 대신 Link를 써야 상태가
          유지된다는 점, URL 매개변수로 하나의 컴포넌트가 여러 상품을 표현할 수
          있다는 점이 인상적이었다. 또한 개발 환경과 프로덕션 빌드의 차이를
          이해하고, GitHub와 Vercel을 연동하여 실제 인터넷에 서비스를 배포해 보는
          전체 과정을 경험할 수 있었다.
        </p>
      </section>

      <div className="report-footer-nav">
        <Link to="/" className="btn btn-primary">
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
