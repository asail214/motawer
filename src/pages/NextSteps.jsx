import React from "react";
import { Container, Row, Col, Card, Button, Alert, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";


function NextSteps() {
  const advancedTopics = [
    {
      title: "React Router",
      description: "التنقل بين الصفحات في تطبيقات SPA",
      difficulty: "متوسط",
      icon: "🛣️"
    },
    {
      title: "State Management",
      description: "Redux, Zustand, Context API لإدارة الحالة المعقدة",
      difficulty: "متقدم",
      icon: "🗄️"
    },
    {
      title: "React Hooks المتقدمة",
      description: "useEffect, useContext, useReducer, Custom Hooks",
      difficulty: "متوسط",
      icon: "🪝"
    },
    {
      title: "API Integration",
      description: "التعامل مع APIs واستدعاء البيانات",
      difficulty: "متوسط",
      icon: "🌐"
    },
    {
      title: "Testing",
      description: "Jest, React Testing Library لاختبار التطبيقات",
      difficulty: "متقدم",
      icon: "🧪"
    },
    {
      title: "Performance Optimization",
      description: "React.memo, useMemo, useCallback لتحسين الأداء",
      difficulty: "متقدم",
      icon: "⚡"
    }
  ];

  const resources = [
    {
      title: "React الوثائق الرسمية",
      description: "المرجع الأساسي والأكثر تحديثاً",
      url: "https://react.dev",
      type: "رسمي",
      lang: "EN"
    },
    {
      title: "MDN Web Docs",
      description: "مرجع شامل لـ JavaScript و Web APIs",
      url: "https://developer.mozilla.org",
      type: "مرجع",
      lang: "EN"
    },
    {
      title: "فريكود كامب",
      description: "دورة React مجانية وشاملة",
      url: "https://www.freecodecamp.org",
      type: "دورة",
      lang: "EN"
    },
    {
      title: "React DevTools",
      description: "إضافة المتصفح لتطوير React",
      url: "https://react.dev/learn/react-developer-tools",
      type: "أداة",
      lang: "EN"
    }
  ];

  const projectIdeas = [
    {
      title: "Weather App",
      description: "تطبيق الطقس باستخدام API",
      difficulty: "متوسط",
      skills: ["API calls", "Async/Await", "Error handling"]
    },
    {
      title: "E-commerce Store",
      description: "متجر إلكتروني مع سلة المشتريات",
      difficulty: "متقدم",
      skills: ["Context API", "Local Storage", "Complex State"]
    },
    {
      title: "Social Media Dashboard",
      description: "لوحة تحكم مواقع التواصل",
      difficulty: "متقدم",
      skills: ["Charts", "Real-time data", "Authentication"]
    },
    {
      title: "Blog Platform",
      description: "منصة تدوين مع إدارة المحتوى",
      difficulty: "متوسط",
      skills: ["CRUD operations", "Forms", "Routing"]
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'مبتدئ': return 'success';
      case 'متوسط': return 'warning'; 
      case 'متقدم': return 'danger';
      default: return 'info';
    }
  };

  return (
    <Container className="my-5 fade-in">
      <Row>
        <Col>
          <div className="text-center mb-5">
            <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🚀</div>
            <h1 className="mb-3" style={{color: '#61DAFB'}}>
              الخطوات التالية
            </h1>
            <p className="lead text-secondary">
              رحلتك في تعلم React لم تنته بعد! إليك المسار للوصول للاحتراف
            </p>
          </div>
        </Col>
      </Row>

      {/* Congratulations Section */}
      <Row className="mb-5">
        <Col>
          <Alert variant="success" className="text-center">
            <h4 className="mb-3">🎉 تهانينا! لقد أتممت الأساسيات</h4>
            <p className="mb-3">
              أنت الآن تعرف المفاهيم الأساسية في React وبناءت أول تطبيق لك. 
              حان الوقت للانتقال للمستوى التالي!
            </p>
            <div className="d-flex justify-content-center gap-2">
              <Badge bg="success">Components ✅</Badge>
              <Badge bg="success">JSX ✅</Badge>
              <Badge bg="success">Props ✅</Badge>
              <Badge bg="success">State ✅</Badge>
              <Badge bg="success">Events ✅</Badge>
              <Badge bg="success">Todo App ✅</Badge>
            </div>
          </Alert>
        </Col>
      </Row>

      {/* Advanced Topics */}
      <Row className="mb-5">
        <Col>
          <h3 className="text-center mb-4" style={{color: '#61DAFB'}}>
            مواضيع React المتقدمة 📚
          </h3>
          <Row>
            {advancedTopics.map((topic, index) => (
              <Col md={6} lg={4} className="mb-4" key={index}>
                <Card className="card-custom h-100">
                  <Card.Body className="text-center">
                    <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
                      {topic.icon}
                    </div>
                    <Card.Title className="h6 mb-2" style={{color: '#61DAFB'}}>
                      {topic.title}
                    </Card.Title>
                    <Card.Text className="text-secondary small mb-3">
                      {topic.description}
                    </Card.Text>
                    <Badge bg={getDifficultyColor(topic.difficulty)}>
                      {topic.difficulty}
                    </Badge>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* Learning Resources */}
      <Row className="mb-5">
        <Col>
          <h3 className="text-center mb-4" style={{color: '#61DAFB'}}>
            مصادر التعلم المُوصى بها 🌟
          </h3>
          <Row>
            {resources.map((resource, index) => (
              <Col md={6} className="mb-4" key={index}>
                <Card className="card-custom h-100">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <Card.Title className="h6 mb-0" style={{color: '#61DAFB'}}>
                        {resource.title}
                      </Card.Title>
                      <div>
                        <Badge bg="secondary" className="me-1">{resource.type}</Badge>
                        <Badge bg="info">{resource.lang}</Badge>
                      </div>
                    </div>
                    <Card.Text className="text-secondary mb-3">
                      {resource.description}
                    </Card.Text>
                    <Button 
                      variant="outline-info" 
                      size="sm"
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      زيارة المصدر 🔗
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* Project Ideas */}
      <Row className="mb-5">
        <Col>
          <h3 className="text-center mb-4" style={{color: '#61DAFB'}}>
            أفكار مشاريع للتطبيق العملي 💡
          </h3>
          <Row>
            {projectIdeas.map((project, index) => (
              <Col md={6} className="mb-4" key={index}>
                <Card className="card-custom h-100">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <Card.Title className="h6 mb-0" style={{color: '#61DAFB'}}>
                        {project.title}
                      </Card.Title>
                      <Badge bg={getDifficultyColor(project.difficulty)}>
                        {project.difficulty}
                      </Badge>
                    </div>
                    <Card.Text className="text-secondary mb-3">
                      {project.description}
                    </Card.Text>
                    <div>
                      <small className="text-muted d-block mb-2">المهارات المطلوبة:</small>
                      <div className="d-flex flex-wrap gap-1">
                        {project.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} bg="secondary" className="small">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* Learning Path */}
      <Row className="mb-5">
        <Col>
          <div className="learning-card">
            <h3 className="text-center mb-4" style={{color: '#61DAFB'}}>
              المسار المقترح للتعلم المتقدم 🛤️
            </h3>
            <Row>
              <Col md={4} className="mb-4">
                <div className="text-center">
                  <div className="step-number mb-3 mx-auto">1</div>
                  <h5>أتقن الأساسيات</h5>
                  <ul className="text-secondary">
                    <li>مراجعة المفاهيم الأساسية</li>
                    <li>بناء مشاريع صغيرة</li>
                    <li>تطبيق أنماط التصميم</li>
                  </ul>
                </div>
              </Col>
              <Col md={4} className="mb-4">
                <div className="text-center">
                  <div className="step-number mb-3 mx-auto">2</div>
                  <h5>تعلم الأدوات</h5>
                  <ul className="text-secondary">
                    <li>React Router للتنقل</li>
                    <li>API Integration</li>
                    <li>State Management</li>
                  </ul>
                </div>
              </Col>
              <Col md={4} className="mb-4">
                <div className="text-center">
                  <div className="step-number mb-3 mx-auto">3</div>
                  <h5>ابنِ مشاريع معقدة</h5>
                  <ul className="text-secondary">
                    <li>تطبيقات متكاملة</li>
                    <li>أفضل الممارسات</li>
                    <li>الأداء والاختبار</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      {/* React Ecosystem */}
      <Row className="mb-5">
        <Col>
          <div className="learning-card">
            <h3 className="text-center mb-4" style={{color: '#61DAFB'}}>
              نظام React البيئي 🌱
            </h3>
            <Row>
              <Col md={6} className="mb-4">
                <h5>🛠️ أدوات التطوير</h5>
                <ul>
                  <li><strong>Create React App:</strong> إعداد سريع للمشاريع</li>
                  <li><strong>Vite:</strong> أداة بناء سريعة وحديثة</li>
                  <li><strong>Next.js:</strong> إطار عمل React للإنتاج</li>
                  <li><strong>Gatsby:</strong> مولد المواقع الثابتة</li>
                </ul>
              </Col>
              <Col md={6} className="mb-4">
                <h5>📦 مكتبات مفيدة</h5>
                <ul>
                  <li><strong>Material-UI:</strong> مكونات UI جاهزة</li>
                  <li><strong>Styled Components:</strong> CSS في JS</li>
                  <li><strong>React Query:</strong> إدارة البيانات من الخادم</li>
                  <li><strong>Formik:</strong> إدارة النماذج</li>
                </ul>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      {/* Tips for Success */}
      <Row className="mb-5">
        <Col>
          <Alert variant="info">
            <h5 className="mb-3">💡 نصائح للنجاح في رحلة التعلم</h5>
            <Row>
              <Col md={6}>
                <ul className="mb-0">
                  <li><strong>مارس بانتظام:</strong> اكتب كود كل يوم ولو قليلاً</li>
                  <li><strong>ابنِ مشاريع حقيقية:</strong> ليس مجرد دروس نظرية</li>
                  <li><strong>اقرأ كود الآخرين:</strong> تعلم من المشاريع مفتوحة المصدر</li>
                </ul>
              </Col>
              <Col md={6}>
                <ul className="mb-0">
                  <li><strong>انضم لمجتمعات:</strong> Discord, Reddit, Stack Overflow</li>
                  <li><strong>ابق محدثاً:</strong> تابع المدونات والبودكاست</li>
                  <li><strong>علّم الآخرين:</strong> اشرح ما تعلمته للآخرين</li>
                </ul>
              </Col>
            </Row>
          </Alert>
        </Col>
      </Row>

      {/* Common Mistakes */}
      <Row className="mb-5">
        <Col>
          <div className="learning-card">
            <h3 className="text-center mb-4" style={{color: '#61DAFB'}}>
              أخطاء شائعة يجب تجنبها ⚠️
            </h3>
            <Row>
              <Col md={6}>
                <h6 className="text-danger">❌ لا تفعل:</h6>
                <ul>
                  <li>تعديل الـ state مباشرة</li>
                  <li>استخدام index كـ key في القوائم</li>
                  <li>إهمال cleanup في useEffect</li>
                  <li>Over-engineering البداية البسيطة</li>
                </ul>
              </Col>
              <Col md={6}>
                <h6 className="text-success">✅ افعل:</h6>
                <ul>
                  <li>استخدم functional components</li>
                  <li>اكتب كود قابل للقراءة</li>
                  <li>اعتمد على الوثائق الرسمية</li>
                  <li>اختبر كودك باستمرار</li>
                </ul>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      {/* Final Message */}
      <Row>
        <Col>
          <div className="learning-card text-center">
            <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🎯</div>
            <h4 className="mb-3" style={{color: '#61DAFB'}}>
              أنت على الطريق الصحيح!
            </h4>
            <p className="text-secondary mb-4">
              تذكر أن تعلم البرمجة رحلة مستمرة. كل خبير كان مبتدئاً يوماً ما. 
              المهم هو الاستمرار والممارسة والتعلم من الأخطاء.
            </p>
            <div className="d-flex gap-3 justify-content-center">
              <Link to="/todo-project">
                <Button variant="outline-info">
                  ← مراجعة المشروع
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="btn-primary">
                  تواصل معي للاستفسار →
                </Button>
              </Link>
            </div>
            <div className="mt-4">
              <small className="text-muted">
                تمت رحلة التعلم بنجاح! 🚀 وفقك الله في مشوارك البرمجي
              </small>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default NextSteps;