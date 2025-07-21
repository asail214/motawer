import React from "react";

function Home() {
  return (
    <div className="container mt-5 text-center" dir="rtl">
      <h2 className="text-primary fw-bold mb-4">مرحبًا بك في منصة مطور</h2>

      <h1 className="display-4 fw-bold">ابدأ رحلتك في تعلم React</h1>

      <p className="lead mb-4">
        تعلم مكتبة React باللغة العربية من الصفر حتى الاحتراف. اكتشف الشروحات، وابدأ ببناء تطبيقات الويب باستخدام Bootstrap وReact.
      </p>

      <a href="/learn" className="btn btn-primary btn-lg mb-4">
        ابدأ التعلم الآن
      </a>

      <div>
        <img
          src="/vite.svg"
          alt="شعار فيت"
          className="img-fluid"
          style={{ maxHeight: "200px" }}
        />
      </div>
    </div>
  );
}

export default Home;
