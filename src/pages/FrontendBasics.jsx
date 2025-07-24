import React from "react";
import { Container } from "react-bootstrap";

function FrontendBasics() {
  return (
    <>
    <Container className="my-5" dir="rtl">
      <h1 className="text-primary fw-bold mb-4">أساسيات تطوير الواجهات الأمامية</h1>
      
      <p>
        تطوير الواجهات الأمامية (Front-End Development) هو الجزء المسؤول عن عرض الموقع وتفاعل المستخدم معه.
        يشمل ذلك تصميم الصفحات باستخدام HTML، CSS، و JavaScript.
      </p>

      <h4 className="mt-4">📌 ما هي تقنيات تطوير الواجهة؟</h4>
      <ul>
        <li><strong>HTML:</strong> لغة لبناء هيكل صفحات الويب.</li>
        <li><strong>CSS:</strong> لتنسيق وتجميل مظهر الصفحة.</li>
        <li><strong>JavaScript:</strong> لجعل الصفحة تفاعلية (مثل القوائم، التنقل، النماذج...)</li>
      </ul>

      <h4 className="mt-4">🚀 لماذا React؟</h4>
      <p>
        React هي مكتبة JavaScript تم تطويرها بواسطة Facebook، تُستخدم لبناء واجهات مستخدم تفاعلية بطريقة سهلة وسريعة.
        تسمح لنا بإعادة استخدام المكونات وتحسين الأداء وتجربة المستخدم.
      </p>

      <div className="alert alert-info mt-4">
        سيتم في الصفحات التالية التعمق في React خطوة بخطوة ✨
      </div>
    </Container>
    </>
  );
}

export default FrontendBasics;
