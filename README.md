# ĐỒ ÁN KIỂM TRA GIỮA KỲ - MÔN THIẾT KẾ WEB
**Khoa Công nghệ Thông tin - Trường Đại học Lạc Hồng (LHU)**

---

## 📌 THÔNG TIN SINH VIÊN
- **Họ và tên:** Phạm Thành Danh
- **MSSV:** 125001055
- **Lớp / Khóa:** Sinh viên Năm 2 - Khoa Công nghệ Thông tin
- **Chủ đề website:** Portfolio cá nhân - Fullstack Web Developer
- **Tên Repository theo quy chuẩn:** `Danh_PhamThanh_125001055`
- **Live Preview (GitHub Pages):** *(Cập nhật link GitHub Pages của bạn tại đây sau khi kích hoạt)*

---

## 🛠️ CÔNG NGHỆ ÁP DỤNG & ĐÁP ỨNG TIÊU CHÍ ĐỀ BÀI

### 1. Chuẩn Semantic HTML5 (Điểm tối đa 2.0đ)
- Sử dụng đầy đủ các thẻ ngữ nghĩa chuẩn HTML5: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<figure>`, `<address>`, `<footer>`.
- Tuyệt đối không lạm dụng thẻ `<div>` vô nghĩa. Mỗi khối thông tin (Bio, Skills, Projects, Education, Contact) đều được đóng gói bằng thẻ ngữ nghĩa tương ứng.

### 2. Kỹ thuật CSS & CSS Variables (Điểm tối đa 2.5đ)
- Sử dụng triệt để hệ thống biến CSS trong `:root` (`--primary-color`, `--accent-color`, `--gradient-primary`, `--bg-body`, `--bg-card`, `--space-scale`, `--radius-scale`,...).
- Layout hiện đại kết hợp **CSS Grid** (danh sách Kỹ năng & Dự án) và **CSS Flexbox** (Header, Hero, Timeline, Footer).
- Responsive hoàn chỉnh trên mọi kích thước màn hình (Desktop, Tablet, Mobile).
- Hiệu ứng `:hover`, `:focus`, `:focus-visible` tự viết bằng CSS thuần với hiệu ứng viền sáng neon tinh tế cho nút bấm, card và form.

### 3. Tương tác & Hiệu ứng Thư viện (Điểm tối đa 1.5đ)
- **Animate.css (v4.1.1):** Tích hợp hiệu ứng xuất hiện cho tiêu đề Hero (`animate__fadeInDown`), mô tả (`animate__fadeInUp`) và nút CTA pulse.
- **AOS (Animate On Scroll v2.3.4):** Hiệu ứng cuộn mượt mà `fade-up`, `zoom-in` cho toàn bộ các section nội dung, mượt mà và không gây rối mắt.

### 4. Nhật ký Prompt Engineering - Vibe Coding (Điểm tối đa 3.0đ)
- File [PROMPT_LOG.md](PROMPT_LOG.md) được trình bày đầy đủ, chi tiết theo đúng cấu trúc 3 phần chuẩn của đề bài:
  - Yêu cầu ban đầu (System Prompt).
  - Quá trình tinh chỉnh & Giải quyết sự cố qua các vòng lặp (Iteration).
  - Đánh giá cá nhân về quá trình Vibe Coding.

---

## 📂 CẤU TRÚC THƯ MỤC
```text
Danh_PhamThanh_125001055/
├── assets/
│   └── avatar.svg          # Ảnh đại diện vector SVG sắc nét
├── index.html              # Trang chính chuẩn Semantic HTML5
├── style.css               # Toàn bộ CSS & hệ thống CSS Variables
├── script.js               # Logic điều khiển AOS, filter, responsive menu & form
├── PROMPT_LOG.md           # Nhật ký Prompt Engineering (3.0 điểm)
└── README.md               # Tài liệu giới thiệu đồ án
```
