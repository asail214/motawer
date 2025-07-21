import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Alert, Tabs, Tab, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

function TodoProject() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <Container className="my-5 fade-in">
      <Row>
        <Col>
          <div className="text-center mb-5">
            <div style={{fontSize: '4rem', marginBottom: '1rem'}}>✅</div>
            <h1 className="mb-3" style={{color: '#61DAFB'}}>
              مشروع Todo List - قائمة المهام
            </h1>
            <p className="lead text-secondary">
              بناء تطبيق كامل لإدارة المهام باستخدام React خطوة بخطوة
            </p>
          </div>
        </Col>
      </Row>

      {/* Project Overview */}
      <Row className="mb-4">
        <Col>
          <Alert variant="info">
            <h6 className="mb-2">🎯 ما سنتعلمه في هذا المشروع:</h6>
            <Row>
              <Col md={6}>
                <ul className="mb-0">
                  <li>إدارة State لقائمة المهام</li>
                  <li>إضافة وحذف المهام</li>
                  <li>تحديد المهام كمنجزة</li>
                </ul>
              </Col>
              <Col md={6}>
                <ul className="mb-0">
                  <li>التعامل مع النماذج</li>
                  <li>رسم قوائم ديناميكية</li>
                  <li>التعامل مع الأحداث</li>
                </ul>
              </Col>
            </Row>
          </Alert>
        </Col>
      </Row>

      {/* Project Tabs */}
      <Row>
        <Col>
          <div className="learning-card">
            <Tabs
              activeKey={activeTab}
              onSelect={(k) => setActiveTab(k)}
              className="mb-4"
              fill
            >
              <Tab eventKey="overview" title="نظرة عامة">
                <div className="mt-4">
                  <h4 className="mb-4" style={{color: '#61DAFB'}}>
                    نظرة عامة على المشروع 🎯
                  </h4>

                  {/* Demo */}
                  <Card className="card-custom mb-4">
                    <Card.Body>
                      <h5 className="mb-3" style={{color: '#61DAFB'}}>
                        كيف سيبدو التطبيق النهائي؟ 👀
                      </h5>
                      <div className="border rounded p-3" style={{backgroundColor: '#1c2128'}}>
                        <div className="mb-3">
                          <h6>قائمة المهام الخاصة بي</h6>
                          <div className="input-group mb-3">
                            <input 
                              type="text" 
                              className="form-control" 
                              placeholder="أضف مهمة جديدة..."
                              style={{backgroundColor: '#0d1117', borderColor: '#30363d', color: '#f0f6fc'}}
                            />
                            <button className="btn btn-primary">إضافة</button>
                          </div>
                        </div>
                        <div>
                          <div className="d-flex align-items-center mb-2 p-2 border rounded">
                            <input type="checkbox" className="me-2" />
                            <span>تعلم React</span>
                            <button className="btn btn-sm btn-danger ms-auto">حذف</button>
                          </div>
                          <div className="d-flex align-items-center mb-2 p-2 border rounded">
                            <input type="checkbox" checked className="me-2" />
                            <span style={{textDecoration: 'line-through', opacity: 0.6}}>قراءة كتاب</span>
                            <button className="btn btn-sm btn-danger ms-auto">حذف</button>
                          </div>
                          <div className="d-flex align-items-center p-2 border rounded">
                            <input type="checkbox" className="me-2" />
                            <span>ممارسة الرياضة</span>
                            <button className="btn btn-sm btn-danger ms-auto">حذف</button>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>

                  {/* Project Structure */}
                  <Card className="card-custom mb-4">
                    <Card.Body>
                      <h5 className="mb-3" style={{color: '#61DAFB'}}>
                        هيكل المشروع 📁
                      </h5>
                      <div className="code-block">
                        <pre>{`src/
├── components/
│   ├── TodoApp.jsx       # المكون الرئيسي
│   ├── TodoForm.jsx      # نموذج إضافة المهام
│   ├── TodoList.jsx      # قائمة المهام
│   └── TodoItem.jsx      # مهمة واحدة
├── App.jsx
└── main.jsx`}</pre>
                      </div>
                    </Card.Body>
                  </Card>

                  {/* Features */}
                  <Card className="card-custom">
                    <Card.Body>
                      <h5 className="mb-3" style={{color: '#61DAFB'}}>
                        المميزات التي سنطورها 🚀
                      </h5>
                      <Row>
                        <Col md={6}>
                          <div className="mb-3">
                            <Badge bg="success" className="me-2">✅</Badge>
                            <strong>إضافة مهام جديدة</strong>
                            <p className="text-secondary small mb-0">نموذج لكتابة وإضافة المهام</p>
                          </div>
                          <div className="mb-3">
                            <Badge bg="success" className="me-2">✅</Badge>
                            <strong>حذف المهام</strong>
                            <p className="text-secondary small mb-0">زر لحذف المهام غير المرغوبة</p>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="mb-3">
                            <Badge bg="success" className="me-2">✅</Badge>
                            <strong>وضع علامة إنجاز</strong>
                            <p className="text-secondary small mb-0">تحديد المهام المكتملة</p>
                          </div>
                          <div className="mb-3">
                            <Badge bg="success" className="me-2">✅</Badge>
                            <strong>عدد المهام</strong>
                            <p className="text-secondary small mb-0">عرض عدد المهام المتبقية</p>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </div>
              </Tab>

              <Tab eventKey="setup" title="البدء">
                <div className="mt-4">
                  <h4 className="mb-4" style={{color: '#61DAFB'}}>
                    إعداد المشروع 🛠️
                  </h4>

                  {/* Step 1 */}
                  <Card className="card-custom mb-4">
                    <Card.Body>
                      <div className="d-flex align-items-center mb-3">
                        <div className="step-number me-3">1</div>
                        <h5 className="mb-0" style={{color: '#61DAFB'}}>إنشاء مشروع جديد</h5>
                      </div>
                      <div className="code-block">
                        <pre>{`# إنشاء مشروع React جديد
npx create-react-app todo-app

# أو باستخدام Vite (أسرع)
npm create vite@latest todo-app -- --template react

# الدخول للمشروع
cd todo-app

# تشغيل المشروع
npm start  # أو npm run dev للـ Vite`}</pre>
                      </div>
                    </Card.Body>
                  </Card>

                  {/* Step 2 */}
                  <Card className="card-custom mb-4">
                    <Card.Body>
                      <div className="d-flex align-items-center mb-3">
                        <div className="step-number me-3">2</div>
                        <h5 className="mb-0" style={{color: '#61DAFB'}}>تنظيف الملفات</h5>
                      </div>
                      <p className="text-secondary mb-3">احذف الملفات غير المطلوبة وابقِ على:</p>
                      <div className="code-block">
                        <pre>{`src/
├── App.jsx
├── main.jsx
├── index.css
└── App.css`}</pre>
                      </div>
                      <p className="text-secondary mt-3">
                        امسح محتوى App.jsx و App.css لنبدأ من الصفر
                      </p>
                    </Card.Body>
                  </Card>

                  {/* Step 3 */}
                  <Card className="card-custom">
                    <Card.Body>
                      <div className="d-flex align-items-center mb-3">
                        <div className="step-number me-3">3</div>
                        <h5 className="mb-0" style={{color: '#61DAFB'}}>إضافة Bootstrap (اختياري)</h5>
                      </div>
                      <div className="code-block">
                        <pre>{`# تثبيت Bootstrap
npm install bootstrap

# في main.jsx أضف
import 'bootstrap/dist/css/bootstrap.min.css';`}</pre>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Tab>

              <Tab eventKey="components" title="المكونات">
                <div className="mt-4">
                  <h4 className="mb-4" style={{color: '#61DAFB'}}>
                    بناء المكونات خطوة بخطوة 🧩
                  </h4>

                  {/* TodoApp Component */}
                  <Card className="card-custom mb-4">
                    <Card.Body>
                      <h5 className="mb-3" style={{color: '#61DAFB'}}>
                        1. TodoApp - المكون الرئيسي 🏠
                      </h5>
                      <div className="code-block">
                        <pre>{`// src/components/TodoApp.jsx
import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // إضافة مهمة جديدة
  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(), // ID بسيط
        text: inputValue,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputValue(''); // مسح الحقل
    }
  };

  // حذف مهمة
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // تغيير حالة الإنجاز
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id 
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="text-center mb-4">قائمة المهام الخاصة بي</h1>
          
          {/* نموذج الإضافة */}
          <div className="input-group mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="أضف مهمة جديدة..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            />
            <button 
              className="btn btn-primary" 
              onClick={addTodo}
            >
              إضافة
            </button>
          </div>

          {/* قائمة المهام */}
          <div>
            {todos.length === 0 ? (
              <p className="text-center text-muted">
                لا توجد مهام بعد. أضف مهمتك الأولى! 
              </p>
            ) : (
              todos.map(todo => (
                <div 
                  key={todo.id} 
                  className="d-flex align-items-center mb-2 p-3 border rounded"
                >
                  <input
                    type="checkbox"
                    className="me-3"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <span 
                    style={{
                      textDecoration: todo.completed ? 'line-through' : 'none',
                      opacity: todo.completed ? 0.6 : 1,
                      flex: 1
                    }}
                  >
                    {todo.text}
                  </span>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    حذف
                  </button>
                </div>
              ))
            )}
          </div>

          {/* إحصائيات */}
          {todos.length > 0 && (
            <div className="mt-4 text-center">
              <small className="text-muted">
                المجموع: {todos.length} | 
                مكتملة: {todos.filter(t => t.completed).length} | 
                متبقية: {todos.filter(t => !t.completed).length}
              </small>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoApp;`}</pre>
                      </div>
                    </Card.Body>
                  </Card>

                  {/* App.jsx Update */}
                  <Card className="card-custom">
                    <Card.Body>
                      <h5 className="mb-3" style={{color: '#61DAFB'}}>
                        2. تحديث App.jsx 🔄
                      </h5>
                      <div className="code-block">
                        <pre>{`// src/App.jsx
import React from 'react';
import TodoApp from './components/TodoApp';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;`}</pre>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Tab>

              <Tab eventKey="advanced" title="تحسينات">
                <div className="mt-4">
                  <h4 className="mb-4" style={{color: '#61DAFB'}}>
                    تحسينات وميزات إضافية 🚀
                  </h4>

                  {/* Separate Components */}
                  <Card className="card-custom mb-4">
                    <Card.Body>
                      <h5 className="mb-3" style={{color: '#61DAFB'}}>
                        1. تقسيم المكونات 🧩
                      </h5>
                      <p className="text-secondary mb-3">لجعل الكود أكثر تنظيماً:</p>
                      
                      {/* TodoItem Component */}
                      <h6 className="mt-4">TodoItem.jsx</h6>
                      <div className="code-block">
                        <pre>{`// src/components/TodoItem.jsx
import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
                    <div className="d-flex align-items-center mb-2 p-3 border rounded">
                      <input
                        type="checkbox"
                        className="me-3"
                        checked={todo.completed}
                        onChange={() => onToggle(todo.id)}
                      />
                      <span 
                        style={{
                          textDecoration: todo.completed ? 'line-through' : 'none',
                          opacity: todo.completed ? 0.6 : 1,
                          flex: 1
                        }}
                      >
                        {todo.text}
                      </span>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => onDelete(todo.id)}
                      >
                        حذف
                      </button>
                    </div>
  );
}

export default TodoItem;`}</pre>
                      </div>

                      {/* TodoForm Component */}
                      <h6 className="mt-4">TodoForm.jsx</h6>
                      <div className="code-block">
                        <pre>{`// src/components/TodoForm.jsx
import React, { useState } from 'react';

function TodoForm({ onAdd }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      onAdd(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="أضف مهمة جديدة..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          إضافة
        </button>
      </div>
    </form>
  );
}

export default TodoForm;`}</pre>
                      </div>
                    </Card.Body>
                  </Card>

                  {/* Local Storage */}
                  <Card className="card-custom mb-4">
                    <Card.Body>
                      <h5 className="mb-3" style={{color: '#61DAFB'}}>
                        2. حفظ البيانات محلياً 💾
                      </h5>
                      <div className="code-block">
                        <pre>{`// إضافة useEffect لحفظ واستعادة البيانات
import React, { useState, useEffect } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);

  // استعادة البيانات عند التحميل
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // حفظ البيانات عند التغيير
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // باقي الكود...
}`}</pre>
                      </div>
                      <Alert variant="warning" className="mt-3">
                        ⚠️ <strong>ملاحظة:</strong> localStorage لا يعمل في بيئة Claude، لكنه سيعمل في مشروعك المحلي
                      </Alert>
                    </Card.Body>
                  </Card>

                  {/* Filter Feature */}
                  <Card className="card-custom">
                    <Card.Body>
                      <h5 className="mb-3" style={{color: '#61DAFB'}}>
                        3. فلترة المهام 🔍
                      </h5>
                      <div className="code-block">
                        <pre>{`// إضافة فلاتر للمهام
const [filter, setFilter] = useState('all'); // all, active, completed

const getFilteredTodos = () => {
  switch(filter) {
    case 'active':
      return todos.filter(todo => !todo.completed);
    case 'completed':
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};

// في الرندر
<div className="mb-3">
  <button 
    className={\`btn btn-sm \${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'}\`}
    onClick={() => setFilter('all')}
  >
    الكل
  </button>
  <button 
    className={\`btn btn-sm ms-2 \${filter === 'active' ? 'btn-primary' : 'btn-outline-primary'}\`}
    onClick={() => setFilter('active')}
  >
    النشطة
  </button>
  <button 
    className={\`btn btn-sm ms-2 \${filter === 'completed' ? 'btn-primary' : 'btn-outline-primary'}\`}
    onClick={() => setFilter('completed')}
  >
    المكتملة
  </button>
</div>`}</pre>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </Tab>

              <Tab eventKey="styling" title="التصميم">
                <div className="mt-4">
                  <h4 className="mb-4" style={{color: '#61DAFB'}}>
                    تحسين التصميم والمظهر 🎨
                  </h4>

                  {/* CSS Styles */}
                  <Card className="card-custom mb-4">
                    <Card.Body>
                      <h5 className="mb-3" style={{color: '#61DAFB'}}>
                        أنماط CSS مخصصة ✨
                      </h5>
                      <div className="code-block">
                        <pre>{`/* src/App.css */
.todo-app {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 2rem 0;
}

.todo-container {
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}

.todo-item {
  background: #f8f9fa;
  border: none !important;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.todo-item:hover {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.todo-item.completed {
  background: #e9ecef;
}

.todo-input {
  border-radius: 25px;
  padding: 12px 20px;
  border: 2px solid #e9ecef;
  font-size: 16px;
}

.todo-input:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
}

.btn-add {
  border-radius: 25px;
  padding: 12px 30px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border: none;
  font-weight: 600;
}

.btn-add:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.todo-stats {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 1rem;
  margin-top: 1rem;
}`}</pre>
                      </div>
                    </Card.Body>
                  </Card>

                  {/* Icons and Animations */}
                  <Card className="card-custom">
                    <Card.Body>
                      <h5 className="mb-3" style={{color: '#61DAFB'}}>
                        إضافة أيقونات وحركات 🎭
                      </h5>
                      <div className="code-block">
                        <pre>{`// تثبيت React Icons
npm install react-icons

// الاستخدام
import { FaPlus, FaTrash, FaCheck } from 'react-icons/fa';

// في المكون
<button className="btn btn-primary">
  <FaPlus className="me-2" />
  إضافة
</button>

<button className="btn btn-danger">
  <FaTrash />
</button>

// CSS للحركات
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.todo-item {
  animation: fadeIn 0.3s ease;
}

@keyframes slideOut {
  to { transform: translateX(100%); opacity: 0; }
}

.todo-item.removing {
  animation: slideOut 0.3s ease forwards;
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

      {/* Success Section */}
      <Row className="mt-5">
        <Col>
          <Alert variant="success">
            <h5 className="mb-3">🎉 تهانينا! لقد أنجزت مشروعك الأول</h5>
            <p className="mb-3">
              الآن لديك تطبيق Todo كامل يستخدم جميع المفاهيم الأساسية في React:
            </p>
            <Row>
              <Col md={6}>
                <ul>
                  <li>✅ إدارة الـ State</li>
                  <li>✅ التعامل مع الأحداث</li>
                  <li>✅ رسم القوائم</li>
                </ul>
              </Col>
              <Col md={6}>
                <ul>
                  <li>✅ النماذج والمدخلات</li>
                  <li>✅ Conditional Rendering</li>
                  <li>✅ تمرير الـ Props</li>
                </ul>
              </Col>
            </Row>
          </Alert>
        </Col>
      </Row>

      {/* Next Steps */}
      <Row>
        <Col>
          <div className="learning-card text-center">
            <h4 className="mb-3" style={{color: '#61DAFB'}}>
              ماذا بعد؟ 🚀
            </h4>
            <p className="text-secondary mb-4">
              أنت الآن جاهز لاستكشاف مواضيع React المتقدمة!
            </p>
            <div className="d-flex gap-3 justify-content-center">
              <Link to="/concepts">
                <Button variant="outline-info">
                  ← مراجعة المفاهيم
                </Button>
              </Link>
              <Link to="/next-steps">
                <Button className="btn-primary">
                  الخطوات التالية →
                </Button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default TodoProject;