import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  const learningPaths = [
    {
      title: "أساسيات Frontend",
      description: "تعرف على أساسيات تطوير الواجهات الأمامية",
      icon: "🌐",
      path: "/frontend-basics"
    },
    {
      title: "مقدمة React",
      description: "اكتشف قوة React وتاريخها",
      icon: "⚛️",
      path: "/react-intro"
    },
    {
      title: "إعداد البيئة",
      description: "تجهيز بيئة التطوير الخاصة بك",
      icon: "🔧",
      path: "/setup"
    },
    {
      title: "المفاهيم الأساسية",
      description: "فهم Components و Props و State",
      icon: "🧩",
      path: "/concepts"
    },
    {
      title: "مشروع Todo List",
      description: "بناء تطبيق قائمة المهام بالكامل",
      icon: "✅",
      path: "/todo-project"
    },
    {
      title: "الخطوات التالية",
      description: "مصادر للتعلم المتقدم",
      icon: "🚀",
      path: "/next-steps"
    }
  ];

  return (
    <>
    <div className="fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="hero-title">مرحبًا بك في مطور</h1>
              <p className="lead mb-4 text-secondary" style={{fontSize: '1.2rem'}}>
                تعلم React.js باللغة العربية من الصفر حتى الاحتراف. 
                دليل شامل ومتدرج لتصبح مطور Frontend محترف.
              </p>
              <Link to="/learn">
                <Button size="lg" className="btn-primary me-3 mb-3">
                  ابدأ التعلم الآن 🎯
                </Button>
              </Link>
              <Link to="/react-intro">
                <Button variant="outline-info" size="lg" className="mb-3">
                  تعرف على React ⚛️
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Learning Path Section */}
      <Container className="my-5">
        <Row>
          <Col>
            <h2 className="text-center mb-5" style={{color: '#61DAFB'}}>
              مسار التعلم المقترح 📚
            </h2>
          </Col>
        </Row>
        
        <Row>
          {learningPaths.map((path, index) => (
            <Col md={6} lg={4} className="mb-4" key={index}>
              <Card className="learning-card h-100 text-center">
                <Card.Body className="d-flex flex-column">
                  <div className="mb-3" style={{fontSize: '3rem'}}>
                    {path.icon}
                  </div>
                  <Card.Title className="h5 mb-3" style={{color: '#61DAFB'}}>
                    {path.title}
                  </Card.Title>
                  <Card.Text className="flex-grow-1 text-secondary">
                    {path.description}
                  </Card.Text>
                  <Link to={path.path} className="mt-auto">
                    <Button variant="outline-info" size="sm">
                      ابدأ الآن ←
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Features Section */}
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="learning-card text-center">
              <h3 className="mb-4" style={{color: '#61DAFB'}}>
                لماذا تتعلم React معنا؟ 🌟
              </h3>
              <Row>
                <Col md={4} className="mb-3">
                  <div className="mb-3" style={{fontSize: '2.5rem'}}>📖</div>
                  <h5>محتوى باللغة العربية</h5>
                  <p className="text-secondary">
                    شروحات مفصلة وواضحة باللغة العربية
                  </p>
                </Col>
                <Col md={4} className="mb-3">
                  <div className="mb-3" style={{fontSize: '2.5rem'}}>💡</div>
                  <h5>أمثلة عملية</h5>
                  <p className="text-secondary">
                    تطبيقات حقيقية ومشاريع عملية
                  </p>
                </Col>
                <Col md={4} className="mb-3">
                  <div className="mb-3" style={{fontSize: '2.5rem'}}>🎯</div>
                  <h5>مسار متدرج</h5>
                  <p className="text-secondary">
                    من المبتدئ إلى المتقدم خطوة بخطوة
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}

export default Home;