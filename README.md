# 🍜 Ăn gì đây? — Advanced Web Design Final Project

Trang web chọn món ăn giúp bạn khi không biết ăn gì (6 nền ẩm thực × 6 món = 36 món).

## Cấu trúc dự án

```
├── index.html        Trang chủ (lời chào theo giờ, 2 nút lớn + khung ảnh món ăn lớn)
├── cuisines.html     Ẩm thực (lưới 6 thẻ ẩm thực + Máy quay xèng 2 cuộn "Bất ngờ đi!")
├── result.html       Kết quả (Hiệu ứng quay tên món A, Tìm quán gần đây, Quay lần nữa)
├── dishes.html       Tất cả món ăn (bộ lọc Ẩm thực & Bữa ăn, đếm số món, nút Bỏ lọc)
├── about.html        Giới thiệu (Về dự án, Mood board, Wireframe, Màu sắc, Font chữ, Nguồn ảnh)
├── css/
│   ├── themes.css    Biến màu + chủ đề theo [data-cuisine] (Fraunces + Be Vietnam Pro)
│   └── style.css     Bố cục đáp ứng (<640px, 640–1023px, ≥1024px) & 2 hiệu ứng
├── js/
│   ├── data.js       Dữ liệu bữa ăn, 6 nền ẩm thực, 36 món ăn
│   ├── main.js       Header/footer dùng chung, menu [=] mobile, lời chào theo giờ
│   ├── cuisines.js   Lưới ẩm thực + Máy quay xèng 2 cuộn "Bất ngờ đi!" (Hiệu ứng B)
│   ├── result.js     Hiệu ứng quay tên món 1,6s (Hiệu ứng A) + Google Maps
│   └── dishes.js     Bộ lọc món ăn (dropdown mobile + pill desktop)
└── images/
    └── logo.svg
```
