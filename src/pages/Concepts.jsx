import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Alert, Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";


function Concepts() {
  const [activeTab, setActiveTab] = useState("components");

  return (
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

                  {/* Functional Components */}
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
                      <Alert variant="success" className="mt-3">
                        ✅ <strong>نصيحة:</strong> استخدم أسماء مكونات تبدأ بحرف كبير دائماً
                      </Alert>
                    </Card.Body>
                  </Card>

                  {/* Component Rules */}
                  <Card className="card-custom">
                    <Card.Body>
                      <h5 className="mb-3" style={{color: '#61DAFB'}}>
                        قواعد المكونات 📋
                      </h5>
                      <ul>
                        <li className="mb-2">كل مكون يجب أن يرجع JSX واحد فقط</li>
                        <li className="mb-2">أسماء المكونات تبدأ بحرف كبير</li>
                        <li className="mb-2">يمكن استخدام المكون عدة مرات</li>
                        <li className="mb-2">المكونات معزولة - لكل منها state منفصل</li>
                      </ul>
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
                    💡 <strong>JSX يتيح لك كتابة HTML داخل JavaScript!</strong> هو امتداد لـ JavaScript يجعل كتابة واجهات React أسهل وأكثر قابلية للقراءة.
                  </Alert>

                  {/* JSX Basics */}
                  <Card className="card-custom mb-4">
                    <Card.Body>
                      <h5 className="mb-3" style={{color: '#61DAFB'}}>
                        أساسيات JSX 🔤
                      </h5>
                      <div className="code-block">
                        <pre>{`// JSX العادي
const element = <h1>مرحباً بالعالم!</h1>;

// JSX مع متغيرات
const name = "أحمد";
const element2 = <h1>مرحباً {name}!</h1>;

// JSX مع JavaScript expressions
const user = { firstName: "أحمد", lastName: "محمد" };
const element3 = (
  <h1>
    مرحباً {user.firstName} {user.lastName}!
  </h1>
);

// JSX مع شروط
const isLoggedIn = true;
const element4 = (
  <div>
    {isLoggedIn ? <h1>أهلاً وسهلاً!</h1> : <h1>يرجى تسجيل الدخول</h1>}
  </div>
);`}</pre>
                      </div>
                    </Card.Body>
                  </Card>

                  {/* JSX Rules */}
                  <Card className="card-custom mb-4">
                    <Card.Body>
                      <h5 className="mb-3" style={{color: '#61DAFB'}}>
                        قواعد مهمة في JSX ⚠️
                      </h5>
                      <Row>
                        <Col md={6}>
                          <h6 className="text-success">✅ صحيح:</h6>
                          <div className="code-block">
                            <pre>{`// عنصر واحد parent
<div>
  <h1>العنوان</h1>
  <p>الفقرة</p>
</div>

// أو Fragment
<>
  <h1>العنوان</h1>
  <p>الفقرة</p>
</>`}</pre>
                          </div>
                        </Col>
                        <Col md={6}>
                          <h6 className="text-danger">❌ خطأ:</h6>
                          <div className="code-block">
                            <pre>{`// عناصر متعددة بدون parent
<h1>العنوان</h1>
<p>الفقرة</p>

// class بدلاً من className
<div class="container">
  محتوى
</div>`}</pre>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>

                  {/* JSX vs HTML */}
                  <Card className="card-custom">
                    <Card.Body>
                      <h5 className="mb-3" style={{color: '#61DAFB'}}>
                        JSX مقابل HTML 🔄
                      </h5>
                      <div className="code-block">
                        <pre>{`// في HTML
<div class="container">
  <label for="email">البريد الإلكتروني:</label>
  <input type="email" id="email" />
</div>

// في JSX  
<div className="container">
  <label htmlFor="email">البريد الإلكتروني:</label>
  <input type="email" id="email" />
</div>`}</pre>
                      </div>
                      <ul className="mt-3">
                        <li><code>class</code> → <code>className</code></li>
                        <li><code>for</code> → <code>htmlFor</code></li>
                        <li>كل العلامات يجب أن تُغلق: <code>&lt;img /&gt;</code></li>
                      </ul>
                    </Card.Body>
                  </Card>
                </div>
              </Tab>

              <Tab eventKey="props" title="Props">
                <div className="mt-4">
                  <h4 className="mb-4" style={{color: '#61DAFB'}}>
                    Props - تمرير البيانات 📦
                  </h4>
                  
                  <Alert variant="info" className="mb-4">
                    💡 <strong>Props هي طريقة تمرير البيانات من المكون الأب إلى الابن</strong> - مثل معاملات الدالة!
                  </Alert>

                  {/* Props Basics */}
                  <Card className="card-custom mb-4">
                    <Card.Body>
                      <h5 className="mb-3" style={{color: '#61DAFB'}}>
                        كيفية استخدام Props 📤
                      </h5>
                      <div className="code-block">
                        <pre>{`// تعريف مكون يستقبل props
function UserCard(props) {
  return (
    <div className="card">
      <h3>{props.name}</h3>
      <p>العمر: {props.age}</p>
      <p>المهنة: {props.job}</p>
    </div>
  );
}

// أو باستخدام destructuring (أفضل)
function UserCard({ name, age, job }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>العمر: {age}</p>
      <p>المهنة: {job}</p>
    </div>
  );
}

// استخدام المكون مع تمرير props
function App() {
  return (
    <div>
      <UserCard name="أحمد" age={25} job="مطور ويب" />
      <UserCard name="فاطمة" age={30} job="مصممة جرافيك" />
    </div>
  );
}`}</pre>
                      </div>
                    </Card.Body>
                  </Card>

                  {/* Props Types */}
                  <Card className="card-custom mb-4">
                    <Card.Body>
                      <h5 className="mb-3" style={{color: '#61DAFB'}}>
                        أنواع Props 📋
                      </h5>
                      <div className="code-block">
                        <pre>{`function ExampleComponent({ 
  text,           // string
  number,         // number
  isActive,       // boolean
  items,          // array
  user,           // object
  onClick         // function
}) {
  return (
    <div className={isActive ? "active" : ""}>
      <h3>{text}</h3>
      <p>العدد: {number}</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>اسم المستخدم: {user.name}</p>
      <button onClick={onClick}>اضغط هنا</button>
    </div>
  );
}

// الاستخدام
<ExampleComponent
  text="مرحباً"
  number={42}
  isActive={true}
  items={["التفاح", "البرتقال", "الموز"]}
  user={{ name: "أحمد", age: 25 }}
  onClick={() => alert("تم الضغط!")}
/>`}</pre>
                      </div>
                    </Card.Body>
                  </Card>

                  {/* Default Props */}
                  <Card className="card-custom">
                    <Card.Body>
                      <h5 className="mb-3" style={{color: '#61DAFB'}}>
                        Props افتراضية 🎯
                      </h5>
                      <div className="code-block">
                        <pre>{`function Button({ text = "اضغط", type = "primary", disabled = false }) {
  return (
    <button 
      className={\`btn btn-\${type}\`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

// الاستخدام
<Button />  {/* استخدام القيم الافتراضية */}
<Button text="حفظ" type="success" />
<Button text="حذف" type="danger" disabled={true} />`}</pre>
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
                  
                  <Alert variant="info" className="mb-4">
                    💡 <strong>State هي البيانات التي يمكن للمكون تغييرها بنفسه</strong> - عكس Props التي تأتي من الخارج
                  </Alert>

                  {/* useState Hook */}
                  <Card className="card-custom mb-4">
                    <Card.Body>
                      <h5 className="mb-3" style={{color: '#61DAFB'}}>
                        useState Hook 🪝
                      </h5>
                      <div className="code-block">
                        <pre>{`import React, { useState } from 'react';

function Counter() {
  // تعريف state متغير
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h3>العداد: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        زيادة
      </button>
      <button onClick={() => setCount(count - 1)}>
        تقليل
      </button>
      <button onClick={() => setCount(0)}>
        إعادة تعيين
      </button>
    </div>
  );
}`}</pre>
                      </div>
                      <Alert variant="success" className="mt-3">
                        ✅ <strong>ملاحظة:</strong> عند تغيير الـ state، React يعيد رسم المكون تلقائياً!
                      </Alert>
                    </Card.Body>
                  </Card>

                  {/* Multiple State */}
                  <Card className="card-custom mb-4">
                    <Card.Body>
                      <h5 className="mb-3" style={{color: '#61DAFB'}}>
                        عدة متغيرات State 📊
                      </h5>
                      <div className="code-block">
                        <pre>{`function UserProfile() {
  const [name, setName] = useState("أحمد");
  const [age, setAge] = useState(25);
  const [isVisible, setIsVisible] = useState(true);
  
  return (
    <div>
      {isVisible && (
        <div>
          <h3>الاسم: {name}</h3>
          <p>العمر: {age}</p>
          <input 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input 
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </div>
      )}
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "إخفاء" : "إظهار"}
      </button>
    </div>
  );
}`}</pre>
                      </div>
                    </Card.Body>
                  </Card>

                  {/* Object State */}
                  <Card className="card-custom">
                    <Card.Body>
                      <h5 className="mb-3" style={{color: '#61DAFB'}}>
                        State كـ Object 📦
                      </h5>
                      <div className="code-block">
                        <pre>{`function UserForm() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: 0
  });
  
  const handleChange = (field, value) => {
    setUser({
      ...user,        // نسخ القيم الحالية
      [field]: value  // تحديث القيمة المطلوبة
    });
  };
  
  return (
    <form>
      <input 
        placeholder="الاسم"
        value={user.name}
        onChange={(e) => handleChange("name", e.target.value)}
      />
      <input 
        placeholder="البريد الإلكتروني"
        value={user.email}
        onChange={(e) => handleChange("email", e.target.value)}
      />
      <input 
        type="number"
        placeholder="العمر"
        value={user.age}
        onChange={(e) => handleChange("age", Number(e.target.value))}
      />
      <p>مرحباً {user.name}، عمرك {user.age} سنة</p>
    </form>
  );
}`}</pre>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Tab>

              <Tab eventKey="events" title="الأحداث">
                <div className="mt-4">
                  <h4 className="mb-4" style={{color: '#61DAFB'}}>
                    Event Handling - التعامل مع الأحداث 🎯
                  </h4>
                  
                  <Alert variant="info" className="mb-4">
                    💡 <strong>الأحداث في React مشابهة لـ HTML</strong> لكن بأسماء camelCase مثل onClick بدلاً من onclick
                  </Alert>

                  {/* Basic Events */}
                  <Card className="card-custom mb-4">
                    <Card.Body>
                      <h5 className="mb-3" style={{color: '#61DAFB'}}>
                        الأحداث الأساسية 🖱️
                      </h5>
                      <div className="code-block">
                        <pre>{`function EventExample() {
  const [message, setMessage] = useState("");
  
  const handleClick = () => {
    setMessage("تم الضغط على الزر!");
  };
  
  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة
    alert(\`تم إرسال: \${message}\`);
  };
  
  return (
    <div>
      <button onClick={handleClick}>
        اضغط هنا
      </button>
      
      <input 
        type="text"
        onChange={handleInputChange}
        placeholder="اكتب شيئاً..."
      />
      
      <form onSubmit={handleSubmit}>
        <button type="submit">إرسال</button>
      </form>
      
      <p>{message}</p>
    </div>
  );
}`}</pre>
                      </div>
                    </Card.Body>
                  </Card>

                  {/* Event Types */}
                  <Card className="card-custom">
                    <Card.Body>
                      <h5 className="mb-3" style={{color: '#61DAFB'}}>
                        أنواع الأحداث الشائعة 📝
                      </h5>
                      <Row>
                        <Col md={6}>
                          <h6>أحداث الماوس 🖱️</h6>
                          <ul>
                            <li><code>onClick</code> - عند الضغط</li>
                            <li><code>onDoubleClick</code> - ضغطة مزدوجة</li>
                            <li><code>onMouseEnter</code> - دخول الماوس</li>
                            <li><code>onMouseLeave</code> - خروج الماوس</li>
                          </ul>
                        </Col>
                        <Col md={6}>
                          <h6>أحداث النماذج 📝</h6>
                          <ul>
                            <li><code>onChange</code> - تغيير القيمة</li>
                            <li><code>onSubmit</code> - إرسال النموذج</li>
                            <li><code>onFocus</code> - التركيز</li>
                            <li><code>onBlur</code> - فقدان التركيز</li>
                          </ul>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Col>
      </Row>

      {/* Summary Section */}
      <Row className="mt-5">
        <Col>
          <div className="learning-card text-center">
            <h4 className="mb-3" style={{color: '#61DAFB'}}>
              ملخص المفاهيم 📚
            </h4>
            <Row>
              <Col md={3} className="mb-3">
                <div className="mb-2" style={{fontSize: '2rem'}}>⚛️</div>
                <h6>Components</h6>
                <p className="text-secondary small">لبنات البناء الأساسية</p>
              </Col>
              <Col md={3} className="mb-3">
                <div className="mb-2" style={{fontSize: '2rem'}}>💻</div>
                <h6>JSX</h6>
                <p className="text-secondary small">HTML في JavaScript</p>
              </Col>
              <Col md={3} className="mb-3">
                <div className="mb-2" style={{fontSize: '2rem'}}>📦</div>
                <h6>Props</h6>
                <p className="text-secondary small">تمرير البيانات</p>
              </Col>
              <Col md={3} className="mb-3">
                <div className="mb-2" style={{fontSize: '2rem'}}>🔄</div>
                <h6>State</h6>
                <p className="text-secondary small">الحالة المحلية</p>
              </Col>
            </Row>
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
  );
}

export default Concepts;