import React, { useState } from "react";
import { Container, Row, Col, Card, Button, ProgressBar, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

function Learn() {
  const [completedSteps, setCompletedSteps] = useState(0);
  
  const learningSteps = [
    {
      id: 1,
      title: "أساسيات تطوير الواجهات الأمامية",
      description: "فهم مفاهيم HTML, CSS, JavaScript والدور الذي تلعبه في تطوير الويب",
      duration: "15 دقيقة",
      difficulty: "مبتدئ",
      path: "/frontend-basics",
      completed: false
    },
    {
      id: 2,
      title: "مقدمة عن React",
      description: "ما هو React، تاريخه، مميزاته، ولماذا نستخدمه",
      duration: "20 دقيقة", 
      difficulty: "مبتدئ",
      path: "/react-intro",
      completed: false
    },
    {
      id: 3,
      title: "إعداد بيئة التطوير",
      description: "تثبيت Node.js, React, VS Code وإعداد مشروعك الأول",
      duration: "30 دقيقة",
      difficulty: "مبتدئ",
      path: "/setup",
      completed: false
    },
    {
      id: 4,
      title: "المفاهيم الأساسية في React",
      description: "Components, JSX, Props, State, Events والـ Hooks",
      duration: "45 دقيقة",
      difficulty: "متوسط",
      path: "/concepts",
      completed: false
    },
    {
      id: 5,
      title: "مشروع عملي: Todo List",
      description: "بناء تطبيق قائمة المهام الكامل خطوة بخطوة",
      duration: "60 دقيقة",
      difficulty: "متوسط",
      path: "/todo-project",
      completed: false
    },
    {
      id: 6,
      title: "الخطوات التالية",
      description: "مصادر التعلم المتقدم ومجتمع React",
      duration: "10 دقيقة",
      difficulty: "جميع المستويات",
      path: "/next-steps",
      completed: false
    }
  ];

  const totalSteps = learningSteps.length;
  const progressPercentage = (completedSteps / totalSteps) * 100;

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'مبتدئ': return 'success';
      case 'متوسط': return 'warning'; 
      case 'متقدم': return 'danger';
      default: return 'info';
    }
  };

  return (
    <>
    <Container className="my-5 fade-in">
      <Row>
        <Col>
          <div className="text-center mb-5">
            <h1 className="mb-3" style={{color: '#61DAFB'}}>
              مسار تعلم React الشامل 🎓
            </h1>
            <p className="lead text-secondary mb-4">
              دليل متكامل لتعلم React من الصفر حتى بناء أول تطبيق لك
            </p>
            
            {/* Progress Section */}
            <div className="learning-card mb-4">
              <h5 className="mb-3">تقدمك في المسار</h5>
              <ProgressBar 
                now={progressPercentage} 
                label={`${completedSteps}/${totalSteps}`}
                className="progress-custom mb-3"
                style={{height: '12px'}}
              />
              <p className="text-secondary">
                أكملت {completedSteps} من {totalSteps} دروس ({Math.round(progressPercentage)}%)
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3 className="mb-4 text-center">الدروس 📋</h3>
        </Col>
      </Row>

      {learningSteps.map((step, index) => (
        <Row key={step.id} className="mb-4">
          <Col>
            <Card className="learning-card">
              <Card.Body>
                <Row className="align-items-center">
                  <Col md={1} className="text-center">
                    <div className="step-number">
                      {step.id}
                    </div>
                  </Col>
                  
                  <Col md={8}>
                    <h5 className="mb-2" style={{color: '#61DAFB'}}>
                      {step.title}
                    </h5>
                    <p className="text-secondary mb-2">
                      {step.description}
                    </p>
                    <div className="d-flex gap-2">
                      <Badge bg={getDifficultyColor(step.difficulty)}>
                        {step.difficulty}
                      </Badge>
                      <Badge bg="secondary">
                        ⏱️ {step.duration}
                      </Badge>
                    </div>
                  </Col>
                  
                  <Col md={3} className="text-center">
                    <Link to={step.path}>
                      <Button 
                        variant={step.completed ? "success" : "outline-info"}
                        size="lg"
                        className="w-100"
                      >
                        {step.completed ? "مراجعة ✅" : "ابدأ الآن 🚀"}
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}

      {/* Quick Start Section */}
      <Row className="mt-5">
        <Col>
          <div className="learning-card text-center">
            <h4 className="mb-3" style={{color: '#61DAFB'}}>
              جاهز للبدء؟ 🚀
            </h4>
            <p className="text-secondary mb-4">
              إذا كنت تعرف HTML, CSS, و JavaScript بالفعل، يمكنك البدء مباشرة من مقدمة React
            </p>
            <div className="d-flex gap-3 justify-content-center">
              <Link to="/frontend-basics">
                <Button variant="outline-info">
                  ابدأ من الأساسيات 📚
                </Button>
              </Link>
              <Link to="/react-intro">
                <Button className="btn-primary">
                  انتقل إلى React مباشرة ⚛️
                </Button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>

      {/* Support Section */}
      <Row className="mt-4">
        <Col>
          <div className="alert alert-info">
            <h6 className="mb-2">💡 نصائح للتعلم الفعال:</h6>
            <ul className="mb-0">
              <li>اتبع الترتيب المقترح للدروس</li>
              <li>طبق الأمثلة بنفسك أثناء القراءة</li>
              <li>لا تتردد في العودة للدروس السابقة عند الحاجة</li>
              <li>تواصل معي إذا واجهت أي صعوبات</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Learn;