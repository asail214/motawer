import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Alert, Tabs, Tab, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

function Setup() {
  const [activeTab, setActiveTab] = useState("requirements");

  const vscodeExtensions = [
    { name: "ES7+ React/Redux/React-Native snippets", description: "اختصارات React" },
    { name: "Bracket Pair Colorizer", description: "تلوين الأقواس" },
    { name: "Auto Rename Tag", description: "إعادة تسمية تلقائية للعلامات" },
    { name: "Prettier", description: "تنسيق الكود تلقائياً" },
    { name: "GitLens", description: "تحسينات Git" }
  ];

  return (
    <>
    <Container className="my-5 fade-in">
      <Row>
        <Col>
          <div className="text-center mb-5">
            <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🔧</div>
            <h1 className="mb-3" style={{color: '#61DAFB'}}>
              إعداد بيئة التطوير
            </h1>
            <p className="lead text-secondary">
              تجهيز كل ما تحتاجه لبدء تطوير تطبيقات React
            </p>
          </div>
        </Col>
      </Row>

      {/* Prerequisites Alert */}
      <Row className="mb-4">
        <Col>
          <Alert variant="warning">
            <h6 className="mb-2">⚠️ متطلبات قبل البدء:</h6>
            <ul className="mb-0">
              <li>معرفة أساسية بـ HTML, CSS, JavaScript</li>
              <li>إلمام بأساسيات سطر الأوامر (Terminal/Command Prompt)</li>
              <li>حساب على GitHub (اختياري لحفظ المشاريع)</li>
            </ul>
          </Alert>
        </Col>
      </Row>

      {/* Setup Tabs */}
      <Row>
        <Col>
          <div className="learning-card">
            <Tabs
              activeKey={activeTab}
              onSelect={(k) => setActiveTab(k)}
              className="mb-4"
              fill
            >
              <Tab eventKey="requirements" title="المتطلبات الأساسية">
                <div className="mt-4">
                  <h4 className="mb-4" style={{color: '#61DAFB'}}>
                    ما نحتاج لتثبيته 📦
                  </h4>
                  
                  {/* Node.js Section */}
                  <Card className="card-custom mb-4">
                    <Card.Body>
                      <div className="d-flex align-items-center mb-3">
                        <div style={{fontSize: '2rem', marginLeft: '1rem'}}>📗</div>
                        <div>
                          <h5 className="mb-1" style={{color: '#61DAFB'}}>Node.js</h5>
                          <Badge bg="danger">مطلوب</Badge>
                        </div>
                      </div>
                      <p className="text-secondary mb-3">
                        Node.js هو بيئة تشغيل JavaScript. نحتاجه لتشغيل أدوات React ومدير الحزم npm.
                      </p>
                      <div className="code-block">
                        <pre>{`// للتأكد من تثبيت Node.js
node --version
npm --version`}</pre>
                      </div>
                      <Alert variant="info" className="mt-3">
                        💡 <strong>نصيحة:</strong> استخدم أحدث إصدار مستقر (LTS) من Node.js
                      </Alert>
                    </Card.Body>
                  </Card>

                  {/* VS Code Section */}
                  <Card className="card-custom mb-4">
                    <Card.Body>
                      <div className="d-flex align-items-center mb-3">
                        <div style={{fontSize: '2rem', marginLeft: '1rem'}}>💻</div>
                        <div>
                          <h5 className="mb-1" style={{color: '#61DAFB'}}>Visual Studio Code</h5>
                          <Badge bg="warning">مُوصى به</Badge>
                        </div>
                      </div>
                      <p className="text-secondary mb-3">
                        محرر النصوص الأفضل لتطوير React. مجاني ويحتوي على إضافات مفيدة.
                      </p>
                      <Button 
                        variant="outline-info" 
                        href="https://code.visualstudio.com/download" 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        تحميل VS Code 📥
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </Tab>

              <Tab eventKey="nodejs" title="تثبيت Node.js">
                <div className="mt-4">
                  <h4 className="mb-4" style={{color: '#61DAFB'}}>
                    تثبيت Node.js خطوة بخطوة 📗
                  </h4>

                  {/* Windows */}
                  <Card className="card-custom mb-4">
                    <Card.Body>
                      <h5 className="mb-3">🪟 Windows</h5>
                      <ol>
                        <li className="mb-2">
                          اذهب إلى <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">nodejs.org</a>
                        </li>
                        <li className="mb-2">حمل الإصدار LTS (يُوصى به)</li>
                        <li className="mb-2">شغّل ملف .msi واتبع التعليمات</li>
                        <li className="mb-2">أعد تشغيل الكمبيوتر</li>
                        <li className="mb-2">افتح Command Prompt وتأكد من التثبيت:</li>
                      </ol>
                      <div className="code-block">
                        <pre>{`node --version
npm --version`}</pre>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Tab>

              <Tab eventKey="react-install" title="إنشاء مشروع React">
                <div className="mt-4">
                  <h4 className="mb-4" style={{color: '#61DAFB'}}>
                    إنشاء أول مشروع React ⚛️
                  </h4>

                  {/* Method 2: Vite */}
                  <Card className="card-custom mb-4">
                    <Card.Body>
                      <h5 className="mb-3">⚡ الطريقة المُوصى بها: Vite</h5>
                      <p className="text-secondary mb-3">
                        أسرع وأكثر حداثة - هي التي استخدمتها في هذا المشروع!
                      </p>
                      <div className="code-block">
                        <pre>{`# إنشاء مشروع جديد
npm create vite@latest my-react-app -- --template react

# الدخول لمجلد المشروع
cd my-react-app

# تثبيت المكتبات
npm install

# تشغيل الخادم المحلي
npm run dev`}</pre>
                      </div>
                      <Badge bg="success" className="mt-2">
                        أسرع في البناء والتحميل!
                      </Badge>
                    </Card.Body>
                  </Card>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Col>
      </Row>

      {/* Success Section */}
      <Row className="mt-5">
        <Col>
          <div className="learning-card text-center">
            <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🎉</div>
            <h4 className="mb-3" style={{color: '#61DAFB'}}>
              تم! بيئة التطوير جاهزة
            </h4>
            <p className="text-secondary mb-4">
              الآن لديك كل ما تحتاجه لبدء تطوير تطبيقات React. حان الوقت لتعلم المفاهيم الأساسية!
            </p>
            <div className="d-flex gap-3 justify-content-center">
              <Link to="/react-intro">
                <Button variant="outline-info">
                  ← العودة لمقدمة React
                </Button>
              </Link>
              <Link to="/concepts">
                <Button className="btn-primary">
                  تعلم المفاهيم الأساسية →
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

export default Setup;