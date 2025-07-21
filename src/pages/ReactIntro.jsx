import React from "react";
import { Container } from "react-bootstrap";
import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

function ReactIntro() {
  const reactFeatures = [
    {
      title: "Component-Based",
      description: "بناء واجهات من مكونات منفصلة وقابلة لإعادة الاستخدام",
      icon: "🧩"
    },
    {
      title: "Virtual DOM",
      description: "أداء عالي من خلال تحديث ذكي للصفحة",
      icon: "⚡"
    },
    {
      title: "JSX",
      description: "كتابة HTML داخل JavaScript بطريقة سهلة ومفهومة",
      icon: "💻"
    },
    {
      title: "Hooks",
      description: "إدارة الحالة والتأثيرات الجانبية بطريقة حديثة",
      icon: "🪝"
    }
  ];

  return (
    <Container className="my-5 fade-in">
      <Row>
        <Col>
          <div className="text-center mb-5">
            <div style={{fontSize: '4rem', marginBottom: '1rem'}}>⚛️</div>
            <h1 className="mb-3" style={{color: '#61DAFB'}}>
              مقدمة عن React
            </h1>
            <p className="lead text-secondary">
              اكتشف قوة React ولماذا أصبحت المكتبة الأشهر في تطوير الواجهات
            </p>
          </div>
        </Col>
      </Row>

      {/* What is React Section */}
      <Row className="mb-5">
        <Col>
          <div className="learning-card">
            <h3 className="mb-4" style={{color: '#61DAFB'}}>
              ما هو React؟ 🤔
            </h3>
            <p className="mb-3">
              <strong>React</strong> هي مكتبة JavaScript مفتوحة المصدر تم تطويرها بواسطة Facebook (Meta الآن) 
              في عام 2013. تُستخدم لبناء واجهات المستخدم التفاعلية، خاصة للتطبيقات أحادية الصفحة (SPA).
            </p>
            <p className="mb-3">
              React ليس إطار عمل (Framework) كامل، بل مكتبة تركز على شيء واحد وتقوم به بشكل ممتاز: 
              <span style={{color: '#61DAFB'}}> بناء واجهات المستخدم</span>.
            </p>
            <Alert variant="info">
              💡 <strong>نصيحة:</strong> React يمكن استخدامه مع مكتبات أخرى لبناء تطبيقات كاملة، 
              مثل React Router للتنقل و Redux لإدارة الحالة.
            </Alert>
          </div>
        </Col>
      </Row>

      {/* React History */}
      <Row className="mb-5">
        <Col>
          <div className="learning-card">
            <h3 className="mb-4" style={{color: '#61DAFB'}}>
              تاريخ React 📜
            </h3>
            <Row>
              <Col md={6}>
                <div className="mb-4">
                  <h5>🎯 2013 - الولادة</h5>
                  <p className="text-secondary">
                    Jordan Walke في Facebook ينشئ React لحل مشاكل الأداء في تطبيقات Facebook
                  </p>
                </div>
                <div className="mb-4">
                  <h5>🚀 2015 - React Native</h5>
                  <p className="text-secondary">
                    إطلاق React Native لبناء تطبيقات الجوال
                  </p>
                </div>
                <div className="mb-4">
                  <h5>🪝 2018 - Hooks</h5>
                  <p className="text-secondary">
                    ثورة في كتابة React مع إدخال Hooks
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="mb-4">
                  <h5>⚡ 2020 - Concurrent Mode</h5>
                  <p className="text-secondary">
                    تحسينات هائلة في الأداء والاستجابة
                  </p>
                </div>
                <div className="mb-4">
                  <h5>🌟 2022 - React 18</h5>
                  <p className="text-secondary">
                    Automatic Batching, Suspense, وميزات جديدة
                  </p>
                </div>
                <div className="mb-4">
                  <h5>🔥 2024 - React 19</h5>
                  <p className="text-secondary">
                    React Compiler وتحسينات الأداء الجديدة
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      {/* React Features */}
      <Row className="mb-5">
        <Col>
          <h3 className="text-center mb-4" style={{color: '#61DAFB'}}>
            لماذا نستخدم React؟ ✨
          </h3>
          <Row>
            {reactFeatures.map((feature, index) => (
              <Col md={6} lg={3} className="mb-4" key={index}>
                <Card className="card-custom h-100 text-center">
                  <Card.Body>
                    <div style={{fontSize: '3rem', marginBottom: '1rem'}}>
                      {feature.icon}
                    </div>
                    <Card.Title className="h6 mb-3" style={{color: '#61DAFB'}}>
                      {feature.title}
                    </Card.Title>
                    <Card.Text className="text-secondary">
                      {feature.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* React vs Others */}
      <Row className="mb-5">
        <Col>
          <div className="learning-card">
            <h3 className="mb-4" style={{color: '#61DAFB'}}>
              React مقابل البدائل الأخرى 🥊
            </h3>
            <Row>
              <Col md={4} className="mb-3">
                <h5>⚛️ React</h5>
                <ul className="text-secondary">
                  <li>مرونة عالية</li>
                  <li>مجتمع ضخم</li>
                  <li>دعم Facebook</li>
                  <li>أداء ممتاز</li>
                </ul>
              </Col>
              <Col md={4} className="mb-3">
                <h5>💚 Vue.js</h5>
                <ul className="text-secondary">
                  <li>سهل التعلم</li>
                  <li>أقل تعقيداً</li>
                  <li>مناسب للمشاريع الصغيرة</li>
                  <li>توثيق ممتاز</li>
                </ul>
              </Col>
              <Col md={4} className="mb-3">
                <h5>🅰️ Angular</h5>
                <ul className="text-secondary">
                  <li>إطار عمل كامل</li>
                  <li>TypeScript افتراضياً</li>
                  <li>مناسب للمشاريع الكبيرة</li>
                  <li>منحنى تعلم صعب</li>
                </ul>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      {/* React 19 New Features */}
      <Row className="mb-5">
        <Col>
          <div className="learning-card">
            <h3 className="mb-4" style={{color: '#61DAFB'}}>
              ما الجديد في React 19؟ 🔥
            </h3>
            <Row>
              <Col md={6}>
                <h5 className="mb-3">⚡ React Compiler</h5>
                <p className="text-secondary mb-4">
                  مترجم تلقائي يحسن أداء تطبيقاتك دون تدخل منك
                </p>
                
                <h5 className="mb-3">🪝 Actions</h5>
                <p className="text-secondary mb-4">
                  طريقة جديدة للتعامل مع النماذج والعمليات غير المتزامنة
                </p>
              </Col>
              <Col md={6}>
                <h5 className="mb-3">📱 Document Metadata</h5>
                <p className="text-secondary mb-4">
                  إدارة أسهل لـ title و meta tags داخل المكونات
                </p>
                
                <h5 className="mb-3">🎨 Asset Loading</h5>
                <p className="text-secondary mb-4">
                  تحميل محسن للموارد مثل الصور والخطوط
                </p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      {/* Who Uses React */}
      <Row className="mb-5">
        <Col>
          <div className="learning-card text-center">
            <h3 className="mb-4" style={{color: '#61DAFB'}}>
              من يستخدم React؟ 🏢
            </h3>
            <p className="text-secondary mb-4">
              الآلاف من الشركات الكبرى تعتمد على React في تطبيقاتها:
            </p>
            <Row className="justify-content-center">
              <Col md={8}>
                <div className="d-flex flex-wrap justify-content-center gap-4">
                  <span className="badge bg-secondary fs-6 p-2">Facebook</span>
                  <span className="badge bg-secondary fs-6 p-2">Netflix</span>
                  <span className="badge bg-secondary fs-6 p-2">Instagram</span>
                  <span className="badge bg-secondary fs-6 p-2">Airbnb</span>
                  <span className="badge bg-secondary fs-6 p-2">Uber</span>
                  <span className="badge bg-secondary fs-6 p-2">WhatsApp</span>
                  <span className="badge bg-secondary fs-6 p-2">Discord</span>
                  <span className="badge bg-secondary fs-6 p-2">Dropbox</span>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      {/* Next Steps */}
      <Row>
        <Col>
          <div className="learning-card text-center">
            <h4 className="mb-3" style={{color: '#61DAFB'}}>
              جاهز لبدء رحلة React؟ 🚀
            </h4>
            <p className="text-secondary mb-4">
              الآن بعد أن تعرفت على React، حان الوقت لإعداد بيئة التطوير وبدء الكتابة!
            </p>
            <div className="d-flex gap-3 justify-content-center">
              <Link to="/frontend-basics">
                <Button variant="outline-info">
                  ← العودة للأساسيات
                </Button>
              </Link>
              <Link to="/setup">
                <Button className="btn-primary">
                  إعداد بيئة التطوير →
                </Button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ReactIntro;