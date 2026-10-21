# NHẬT KÝ PROMPT ENGINEERING (VIBE CODING LOG)
- **Họ và tên:** Phạm Thành Danh
- **MSSV:** 125001055
- **Tên đề tài Website:** Portfolio Cá Nhân - Sinh viên Fullstack Developer Năm 2
- **Công cụ AI đã sử dụng:** Gemini (Antigravity AI Assistant)

---

## 1. Yêu cầu ban đầu (System/Initial Prompt)
> *"Hãy đóng vai trò là Senior Frontend Architect. Hãy giúp tôi tạo một trang web Portfolio cá nhân dành cho sinh viên năm 2 chuyên ngành Công nghệ Thông tin trường Đại học Lạc Hồng (LHU), tên là 'Phạm Thành Danh', định hướng 'Fullstack Developer'.*
> *Yêu cầu bắt buộc:*
> *1. Cấu trúc chuẩn Semantic HTML5 (tối thiểu 5 thẻ: `<header>`, `<nav>`, `<main>`, `<section>` hoặc `<article>`, `<footer>`), tuyệt đối không lạm dụng thẻ `<div>` bừa bãi.*
> *2. Sử dụng hệ thống CSS Variables (`:root`) để quản lý toàn bộ màu sắc, typography, spacing, border-radius và bóng đổ.*
> *3. Dàn trang hiện đại bằng CSS Flexbox và CSS Grid, hỗ trợ responsive hoàn chỉnh trên thiết bị di động, tablet và máy tính.*
> *4. Tích hợp thư viện Animate.css cho tiêu đề Hero và nút CTA; thư viện AOS (Animate On Scroll) cho các khối nội dung cuộn trang.*
> *5. Tự viết hiệu ứng `:hover`, `:focus` mượt mà cho các button, card và form liên hệ.*
> *6. Tạo file PROMPT_LOG.md ghi lại toàn bộ quá trình Vibe Coding theo đúng định dạng mẫu đề bài yêu cầu."*

---

## 2. Quá trình tinh chỉnh & Giải quyết sự cố (Iteration Iterations)

### Lần 1: Dựng khung Semantic HTML & CSS Variable
- **Prompt đã dùng:**
  > *"Hãy xây dựng khung cấu trúc HTML và hệ thống biến CSS `:root` cho trang Portfolio. Lưu ý: Sử dụng đúng chuẩn ngữ nghĩa Semantic HTML5, bao gồm thẻ `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<figure>`, `<address>`, `<footer>`. Không dùng thẻ `<div>` vô nghĩa khi đã có thẻ ngữ nghĩa phù hợp."*
- **Kết quả AI tạo ra:**
  - AI khởi tạo cấu trúc HTML tương đối tốt nhưng vẫn sử dụng một số thẻ `<div>` cho các card kỹ năng, avatar và phần thông tin liên hệ.
  - File CSS khai báo biến `:root` cơ bản cho 3 màu chính nhưng còn thiếu biến quản lý gradient, spacing scale, font và radius.
- **Nhận xét & Tinh chỉnh của SV:**
  - Đã nhắc AI rà soát và thay thế các khối nội dung thẻ con thành `<article class="skill-group-card">`, `<article class="project-card">` và `<address>` cho thông tin liên hệ.
  - Yêu cầu bổ sung đầy đủ hệ thống CSS Variables: `--primary-color`, `--accent-color`, `--gradient-primary`, `--bg-body`, `--bg-card`, `--space-xs` đến `--space-3xl`, `--radius-sm` đến `--radius-xl` để toàn bộ trang có một Design System nhất quán.

---

### Lần 2: Tích hợp thư viện Animate.css & AOS (Animate On Scroll)
- **Prompt đã dùng:**
  > *"Hãy tích hợp CDN Animate.css v4 và AOS (Animate On Scroll) vào trang web. Áp dụng hiệu ứng `animate__fadeInDown` cho tiêu đề Hero, `animate__pulse animate__infinite` cho nút CTA ở header, và gắn thuộc tính `data-aos="fade-up"` cho các section Giới thiệu, Kỹ năng, Dự án, Học vấn, Liên hệ."*
- **Thách thức gặp phải:**
  - Sau khi thêm thuộc tính `data-aos`, khi cuộn chuột thử nghiệm trên trình duyệt, các thẻ section xuất hiện đột ngột hoặc không kích hoạt hiệu ứng cuộn mượt mà; một số phần tử bị giật layout do thiếu cấu hình khởi tạo JavaScript `AOS.init()`.
- **Cách sửa prompt (Debug prompt):**
  > *"Sự cố: Thư viện AOS chưa kích hoạt chuyển động mượt mà khi người dùng cuộn trang. Hãy tạo file `script.js`, import đúng thứ tự script AOS trước `script.js`, sau đó khởi tạo `AOS.init()` bên trong sự kiện `DOMContentLoaded` với các thông số tối ưu: `duration: 800`, `easing: 'ease-out-cubic'`, `once: true`, `offset: 60`. Đồng thời viết thêm code xử lý sticky header và nút cuộn nhanh lên đầu trang (Back To Top)."*
- **Kết quả sau sửa:**
  - Hiệu ứng xuất hiện khi cuộn trang của các card và section chạy vô cùng mượt mà, không bị giật lag và chỉ kích hoạt một lần duy nhất (`once: true`) giúp người dùng không bị mỏi mắt.

---

### Lần 3: Dàn trang Flexbox/Grid, Responsive & Bộ lọc Dự án (Project Filter)
- **Prompt đã dùng:**
  > *"Hãy tối ưu hóa giao diện với CSS Flexbox cho thanh Navigation và Hero Section, dùng CSS Grid cho danh sách Kỹ năng và Dự án. Bổ sung tính năng bộ lọc dự án (Tất cả, Fullstack, Frontend, Backend) bằng JavaScript thuần và thêm validation form liên hệ chuẩn UX."*
- **Kết quả AI tạo ra:**
  - Giao diện lưới hiển thị 3 cột trên Desktop và co giãn 1 cột trên Mobile rất đẹp mắt.
  - Bộ lọc hoạt động tốt, ẩn/hiện dự án kèm hiệu ứng mờ dần `animate__fadeIn`.
  - Form kiểm tra đầy đủ các trường: Họ tên, định dạng Email (Regex), Chủ đề và Nội dung tin nhắn (tối thiểu 10 ký tự) cùng thông báo phản hồi trực quan.
- **Nhận xét & Tinh chỉnh của SV:**
  - Tinh chỉnh thêm trạng thái `:focus-visible` với viền sáng neon tinh tế để đáp ứng chuẩn tiếp cận người dùng (Accessibility - A11y).
  - Tối ưu menu Hamburger trên mobile với hiệu ứng chuyển động mượt mà bằng CSS `clip-path` và thuộc tính `aria-expanded`.

### Lần 4: Cập nhật thông tin thực tế, Avatar cá nhân & Nâng cấp Micro-animations
- **Prompt đã dùng:**
  > *"1: Đổi avatar 'ảnh tôi gửi' thành đúng định dạng yêu cầu đề thi và thay vào cho tôi. 2: Cập nhật SĐT: 0345905101. 3: Facebook: facebook.com/danh.thanh.808007. 4: Cập nhật link GitHub Pages 'https://phamthanhdanh-125001055.github.io/Danh_PhamThanh_125001055/' vào phần README. 5: Sửa đúng link GitHub profile: https://github.com/PhamThanhDanh-125001055. 6: Email: phamthanhdanh140407@gmail.com. 7: Thêm hiệu ứng animation mượt mà cho web trông thuận mắt hơn."*
- **Kết quả AI tạo ra:**
  - AI đã tích hợp ảnh chân dung thật `avatar.png` với khung viền gradient 3 màu phát sáng đồng điệu với tone màu ấm của ảnh.
  - Cập nhật đồng bộ các thông tin liên hệ chính xác (Email, SĐT, Facebook, GitHub Profile, GitHub Pages preview) trên toàn bộ `index.html`, `README.md` và `script.js`.
  - Bổ sung hiệu ứng quét ánh sáng lấp lánh (Shimmer / Light Beam) khi hover lên nút CTA, hiệu ứng hào quang nhịp thở (Pulse Aura) quanh Avatar, và animation nổi bồng bềnh mượt mà cho các Floating Badges.
- **Nhận xét & Tinh chỉnh của SV:**
  - Giao diện có chiều sâu thị giác (Visual Depth) hơn hẳn, thể hiện đúng phong cách một Fullstack Developer chuyên nghiệp, tự tin và hiện đại.

---

## 3. Đánh giá cá nhân về quá trình Vibe Coding
- **AI đã giúp bạn tiết kiệm thời gian ở phần nào nhất?**
  - **Dựng khung giao diện & Viết CSS Boilerplate:** AI giúp tạo nhanh chóng hệ thống CSS Variables, bảng màu Gradient hiện đại, các class tiện ích và mã HTML đúng cấu trúc chuẩn Semantic chỉ trong vài phút thay vì phải gõ thủ công từng dòng.
  - **Tích hợp thư viện & Debug mã lỗi:** Quá trình tìm kiếm CDN, kết nối Animate.css và viết script khởi tạo AOS cùng thuật toán lọc dự án diễn ra trơn tru, chuẩn xác.
  - **Sáng tạo nội dung mẫu:** Giúp điền đầy đủ thông tin đồ án thực tế, lộ trình học tập tại ĐH Lạc Hồng một cách chuyên nghiệp và mang tính thực tiễn cao.

- **Bài học rút ra khi đặt câu hỏi (Prompt) cho AI trong thiết kế web?**
  - **Cần cụ thể và có ràng buộc kỹ thuật rõ ràng:** Nếu chỉ yêu cầu chung chung "Làm cho tôi một portfolio", AI thường có xu hướng dùng thẻ `<div>` lồng nhau vô tội vạ và CSS tùy tiện. Khi ta đưa ra tiêu chí cụ thể như *"Chuẩn Semantic HTML5"*, *"Dùng CSS Grid/Flexbox"*, *"Khai báo biến trong `:root`"*, AI sẽ cho ra kết quả chất lượng cao đúng chuẩn bài thi.
  - **Chia nhỏ bài toán theo từng vòng lặp (Iteration):** Không nên bắt AI làm toàn bộ mọi thứ trong một lần prompt duy nhất. Quy trình hiệu quả nhất là: Dựng khung xương Semantic -> Hoàn thiện Design System & CSS -> Tích hợp hiệu ứng (AOS, Animate.css) -> Kiểm thử Responsive & Viết script tương tác.
  - **Người lập trình luôn giữ vai trò kiến trúc sư:** Dù AI rất mạnh, sinh viên vẫn phải là người hiểu sâu kiến thức môn học để kiểm tra ngữ nghĩa thẻ, rà soát code, phát hiện sự cố thư viện và chỉ đạo AI điều chỉnh đúng hướng.
