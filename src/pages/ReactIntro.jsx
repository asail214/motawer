import React from "react";
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
    <>
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
    </>
  );
}

export default ReactIntro;