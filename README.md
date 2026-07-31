# SENIOR.AI Retro OS — Polished v0.2

Bản này đã bổ sung:

- Avatar trước scan và sau scan
- Scan beam + grid + trạng thái nhận diện
- Flash reveal và dấu `IDENTITY VERIFIED`
- Metric hierarchy rõ hơn:
  - Elite
  - Strong
  - Resilient
  - Anomaly
  - Legendary
- Màu, badge và effect riêng cho `98%`, `128%`, `Critical`, `404`, `SSS`
- Window polish và status update

## Thay avatar thật

Đặt ảnh vuông vào thư mục `assets/`:

```text
assets/avatar-prescan.jpg
assets/avatar-final.jpg
```

Sau đó trong `index.html`, đổi:

```html
src="./assets/avatar-prescan.svg"
src="./assets/avatar-final.svg"
```

thành:

```html
src="./assets/avatar-prescan.jpg"
src="./assets/avatar-final.jpg"
```

Bạn cũng có thể dùng **một ảnh duy nhất** cho cả hai vị trí. Prescan tự được blur, grayscale và phủ scan grid bằng CSS.

Khuyến nghị:

- 800 × 800 px
- JPG/WebP
- mặt ở gần trung tâm
- crop còn vai
- mỗi ảnh dưới khoảng 500 KB

## Cá nhân hóa

Sửa `CONFIG` ở đầu `script.js`.
