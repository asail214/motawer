import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Alert, Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";

function Concepts() {
  const [activeTab, setActiveTab] = useState("components");

  return (
    <>
     <Container className="my-5 fade-in">
      <Row>
        <Col>
          <div className="text-center mb-5">
            <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🧩</div>
            <h1 className="mb-3" style={{color: '#61DAFB'}}>
              المفاهيم الأساسية في React
            </h1>
            <p className="lead text-secondary">
              فهم اللبنات الأساسية لبناء تطبيقات React فعالة
            </p>
          </div>
        </Col>
      </Row>

      {/* Concepts Tabs */}
      <Row>
        <Col>
          <div className="learning-card">
            <Tabs
              activeKey={activeTab}
              onSelect={(k) => setActiveTab(k)}
              className="mb-4"
              fill
            >
              <Tab eventKey="components" title="المكونات">
                <div className="mt-4">
                  <h4 className="mb-4" style={{color: '#61DAFB'}}>
                    Components - المكونات ⚛️
                  </h4>
                  
                  <Alert variant="info" className="mb-4">
                    💡 <strong>المكونات هي أساس React!</strong> كل شيء في React هو مكون - من الأزرار الصغيرة إلى الصفحات الكاملة.
                  </Alert>

                  <Card className="card-custom mb-4">
                    <Card.Body>
                      <h5 className="mb-3" style={{color: '#61DAFB'}}>
                        Functional Components 🔧
                      </h5>
                      <p className="text-secondary mb-3">
                        هي functions عادية تأخذ props وترجع JSX. هذا هو الأسلوب الحديث والمُوصى به.
                      </p>
                      <div className="code-block">
                        <pre>{`// مكون بسيط
function Welcome() {
  return <h1>مرحباً بك في React!</h1>;
}

// مكون مع معاملات (props)
function Greeting(props) {
  return <h1>أهلاً {props.name}!</h1>;
}

// استخدام المكونات
function App() {
  return (
    <div>
      <Welcome />
      <Greeting name="أحمد" />
    </div>
  );
}`}</pre>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Tab>

              <Tab eventKey="jsx" title="JSX">
                <div className="mt-4">
                  <h4 className="mb-4" style={{color: '#61DAFB'}}>
                    JSX - JavaScript XML 💻
                  </h4>
                  
                  <Alert variant="info" className="mb-4">
                    💡 <strong>JSX يتيح لك كتابة HTML داخل JavaScript!</strong>
                  </Alert>

                  <Card className="card-custom">
                    <Card.Body>
                      <h5 className="mb-3" style={{color: '#61DAFB'}}>أساسيات JSX</h5>
                      <div className="code-block">
                        <pre>{`const element = <h1>مرحباً بالعالم!</h1>;

const name = "أحمد";
const greeting = <h1>أهلاً {name}!</h1>;`}</pre>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Tab>

              <Tab eventKey="props" title="Props">
                <div className="mt-4">
                  <h4 className="mb-4" style={{color: '#61DAFB'}}>
                    Props - تمرير البيانات 📦
                  </h4>
                  
                  <Card className="card-custom">
                    <Card.Body>
                      <h5 className="mb-3" style={{color: '#61DAFB'}}>استخدام Props</h5>
                      <div className="code-block">
                        <pre>{`function UserCard({ name, age }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>العمر: {age}</p>
    </div>
  );
}

// الاستخدام
<UserCard name="أحمد" age={25} />`}</pre>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Tab>

              <Tab eventKey="state" title="State">
                <div className="mt-4">
                  <h4 className="mb-4" style={{color: '#61DAFB'}}>
                    State - الحالة المحلية 🔄
                  </h4>
                  
                  <Card className="card-custom">
                    <Card.Body>
                      <h5 className="mb-3" style={{color: '#61DAFB'}}>useState Hook</h5>
                      <div className="code-block">
                        <pre>{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>العداد: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        زيادة
      </button>
    </div>
  );
}`}</pre>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Col>
      </Row>

      {/* Next Step */}
      <Row className="mt-4">
        <Col>
          <div className="learning-card text-center">
            <h4 className="mb-3" style={{color: '#61DAFB'}}>
              جاهز للتطبيق العملي؟ 🚀
            </h4>
            <p className="text-secondary mb-4">
              الآن بعد أن فهمت المفاهيم الأساسية، حان وقت تطبيقها في مشروع حقيقي!
            </p>
            <div className="d-flex gap-3 justify-content-center">
              <Link to="/setup">
                <Button variant="outline-info">
                  ← مراجعة الإعداد
                </Button>
              </Link>
              <Link to="/todo-project">
                <Button className="btn-primary">
                  بناء مشروع Todo →
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

export default Concepts;