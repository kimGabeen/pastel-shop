# 🌸 Mallang - 파스텔 쇼핑몰

강원대학교 웹프로그래밍 실습 과제 — React Router를 이용한 다중 페이지 쇼핑몰

## 기술 스택
- React 19 + Vite
- react-router-dom

## 페이지 구성
| 페이지 | 경로 | 설명 |
|--------|------|------|
| Home | `/` | 메인 + 추천 상품 |
| Shop | `/shop` | 전체 상품 + 카테고리 필터 |
| 상품 상세 | `/product/:id` | useParams 활용 |
| Cart | `/cart` | 장바구니 + 주문 |

## 실행 방법
```bash
npm install
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드
```

## 배포
Vercel을 통해 배포 (vercel.json으로 SPA 라우팅 처리)
