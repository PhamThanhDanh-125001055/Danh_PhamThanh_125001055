/**
 * PORTFOLIO JAVASCRIPT - PHẠM THÀNH DANH (MSSV: 125001055)
 * Khoa CNTT - Trường Đại học Lạc Hồng (LHU)
 * Tích hợp: AOS, Navigation Scrollspy, Mobile Menu, Project Filter, Form Validation
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. KHỞI TẠO THƯ VIỆN AOS (ANIMATE ON SCROLL)
     ========================================================================== */
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,       // Thời gian chuyển động (ms)
      easing: 'ease-out-cubic',
      once: true,          // Chỉ animate 1 lần khi cuộn tới
      offset: 60,          // Khoảng cách kích hoạt trước khi chạm tới
      delay: 50,
    });
  }

  /* ==========================================================================
     2. STICKY HEADER & SCROLL EFFECT
     ========================================================================== */
  const siteHeader = document.getElementById('site-header');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Header đổi style khi cuộn
    if (scrollPos > 50) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }

    // Hiển thị nút Back To Top khi cuộn qua 300px
    if (scrollPos > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }

    // Cập nhật active menu khi scroll
    updateActiveNavLink();
  });

  // Sự kiện nút Back To Top
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ==========================================================================
     3. MOBILE NAVIGATION MENU TOGGLE
     ========================================================================== */
  const mobileToggle = document.getElementById('mobile-toggle');
  const mainNav = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      const icon = mobileToggle.querySelector('i');
      if (isOpen) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });

    // Tự động đóng menu mobile khi nhấn vào một nav-link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (mainNav.classList.contains('open')) {
          mainNav.classList.remove('open');
          mobileToggle.setAttribute('aria-expanded', 'false');
          const icon = mobileToggle.querySelector('i');
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });
  }

  /* ==========================================================================
     4. SCROLLSPY - ACTIVE NAVIGATION LINK KHI CUỘN
     ========================================================================== */
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetLink = document.querySelector(`.main-nav a[href*="${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
        if (targetLink) {
          targetLink.classList.add('active');
        }
      }
    });
  }

  /* ==========================================================================
     5. BỘ LỌC DỰ ÁN (PROJECT FILTER TABS)
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active state cho buttons
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      // Lọc danh sách dự án
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.classList.add('animate__animated', 'animate__fadeIn');
        } else {
          card.style.display = 'none';
          card.classList.remove('animate__animated', 'animate__fadeIn');
        }
      });
    });
  });

  /* ==========================================================================
     6. XỬ LÝ FORM LIÊN HỆ & VALIDATION
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const fullName = document.getElementById('fullName');
      const email = document.getElementById('email');
      const subject = document.getElementById('subject');
      const message = document.getElementById('message');
      const submitBtn = document.getElementById('submit-btn');

      let isValid = true;

      // Xóa các lỗi cũ
      clearErrors();

      // Kiểm tra Họ tên
      if (!fullName.value.trim()) {
        showError(fullName, 'Vui lòng nhập họ và tên của bạn.');
        isValid = false;
      }

      // Kiểm tra Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim()) {
        showError(email, 'Vui lòng nhập địa chỉ email.');
        isValid = false;
      } else if (!emailRegex.test(email.value.trim())) {
        showError(email, 'Địa chỉ email không đúng định dạng hợp lệ.');
        isValid = false;
      }

      // Kiểm tra Chủ đề
      if (!subject.value.trim()) {
        showError(subject, 'Vui lòng nhập chủ đề liên hệ.');
        isValid = false;
      }

      // Kiểm tra Nội dung
      if (!message.value.trim()) {
        showError(message, 'Vui lòng nhập nội dung tin nhắn.');
        isValid = false;
      } else if (message.value.trim().length < 10) {
        showError(message, 'Nội dung tin nhắn cần tối thiểu 10 ký tự.');
        isValid = false;
      }

      // Nếu tất cả hợp lệ, hiển thị phản hồi gửi thành công
      if (isValid) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Đang gửi tin nhắn...</span>';

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>Gửi tin nhắn ngay</span> <i class="fa-solid fa-paper-plane"></i>';

          formFeedback.className = 'form-feedback success';
          formFeedback.innerHTML = `
            <i class="fa-solid fa-circle-check"></i>
            <strong>Cảm ơn ${fullName.value.trim()}!</strong> Tin nhắn của bạn đã được gửi thành công đến Phạm Thành Danh. Tôi sẽ phản hồi sớm nhất qua email <em>${email.value.trim()}</em>.
          `;
          contactForm.reset();

          // Tự ẩn thông báo sau 6 giây
          setTimeout(() => {
            formFeedback.style.display = 'none';
            formFeedback.className = 'form-feedback';
          }, 6000);
        }, 800);
      }
    });
  }

  function showError(inputEl, message) {
    const formGroup = inputEl.closest('.form-group');
    if (formGroup) {
      formGroup.classList.add('has-error');
      const errorMsg = formGroup.querySelector('.error-msg');
      if (errorMsg) {
        errorMsg.textContent = message;
      }
    }
  }

  function clearErrors() {
    const errorGroups = document.querySelectorAll('.form-group.has-error');
    errorGroups.forEach(group => {
      group.classList.remove('has-error');
      const errorMsg = group.querySelector('.error-msg');
      if (errorMsg) {
        errorMsg.textContent = '';
      }
    });
    if (formFeedback) {
      formFeedback.style.display = 'none';
      formFeedback.className = 'form-feedback';
    }
  }

  console.log('✅ Portfolio Phạm Thành Danh (125001055) - ĐH Lạc Hồng đã sẵn sàng!');
});
