import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكن إضافة منطق إرسال الرسالة
    setShowAlert(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <>
  
    <Container className="my-5 fade-in">
      <Row>
        <Col>
          <div className="text-center mb-5">
            <div style={{fontSize: '4rem', marginBottom: '1rem'}}>👨‍💻</div>
            <h1 className="mb-3" style={{color: '#61DAFB'}}>
              تواصل معي
            </h1>
            <p className="lead text-secondary">
              أسعد بالتواصل معك والإجابة عن استفساراتك حول React والبرمجة
            </p>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col lg={8}>
          {/* About Me Section */}
          <Card className="learning-card mb-5">
            <Card.Body className="text-center">
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🚀</div>
              <h4 className="mb-3" style={{color: '#61DAFB'}}>من أنا؟</h4>
              <p className="text-secondary mb-4">
                أنا مطور React متحمس لتعليم البرمجة باللغة العربية. أؤمن بأن البرمجة يجب أن تكون 
                متاحة للجميع بلغتهم الأم. إذا كان لديك أي سؤال أو تحتاج مساعدة في رحلتك البرمجية، 
                لا تتردد في التواصل معي!
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <span className="badge bg-secondary p-2">React Developer</span>
                <span className="badge bg-secondary p-2">JavaScript Expert</span>
                <span className="badge bg-secondary p-2">Arabic Content Creator</span>
              </div>
            </Card.Body>
          </Card>

          {/* Social Links */}
          <Row className="mb-5">
            <Col md={4} className="mb-3">
              <Card className="card-custom h-100 text-center">
                <Card.Body>
                  <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>💼</div>
                  <h6 className="mb-2" style={{color: '#61DAFB'}}>LinkedIn</h6>
                  <p className="text-secondary small mb-3">
                    تواصل معي مهنياً واطلع على خبراتي
                  </p>
                  <Button 
                    variant="outline-info" 
                    size="sm"
                    href="https://linkedin.com/in/yourprofile" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    تواصل على LinkedIn
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} className="mb-3">
              <Card className="card-custom h-100 text-center">
                <Card.Body>
                  <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🐱</div>
                  <h6 className="mb-2" style={{color: '#61DAFB'}}>GitHub</h6>
                  <p className="text-secondary small mb-3">
                    استكشف مشاريعي وكودي المفتوح
                  </p>
                  <Button 
                    variant="outline-info" 
                    size="sm"
                    href="https://github.com/yourusername" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    تصفح مشاريعي
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4} className="mb-3">
              <Card className="card-custom h-100 text-center">
                <Card.Body>
                  <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>📷</div>
                  <h6 className="mb-2" style={{color: '#61DAFB'}}>Instagram</h6>
                  <p className="text-secondary small mb-3">
                    تابع رحلتي اليومية في البرمجة
                  </p>
                  <Button 
                    variant="outline-info" 
                    size="sm"
                    href="https://instagram.com/yourusername" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    تابعني
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Contact Form */}
          <Card className="learning-card">
            <Card.Body>
              <h4 className="text-center mb-4" style={{color: '#61DAFB'}}>
                أرسل لي رسالة 📧
              </h4>
              
              {showAlert && (
                <Alert variant="success" className="mb-4">
                  <strong>تم إرسال رسالتك بنجاح! 🎉</strong> سأرد عليك في أقرب وقت ممكن.
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>الاسم *</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="اسمك الكريم"
                        required
                        style={{
                          backgroundColor: '#1c2128',
                          borderColor: '#30363d',
                          color: '#f0f6fc'
                        }}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>البريد الإلكتروني *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        style={{
                          backgroundColor: '#1c2128',
                          borderColor: '#30363d',
                          color: '#f0f6fc'
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-4">
                  <Form.Label>الرسالة *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="اكتب رسالتك هنا... يمكنك السؤال عن أي شيء متعلق بـ React أو البرمجة عموماً"
                    required
                    style={{
                      backgroundColor: '#1c2128',
                      borderColor: '#30363d',
                      color: '#f0f6fc'
                    }}
                  />
                </Form.Group>
                
                <div className="text-center">
                  <Button 
                    type="submit" 
                    className="btn-primary px-4 py-2"
                    size="lg"
                  >
                    إرسال الرسالة 📨
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>

          {/* FAQ Section */}
          <Card className="learning-card mt-5">
            <Card.Body>
              <h4 className="text-center mb-4" style={{color: '#61DAFB'}}>
                أسئلة شائعة 🤔
              </h4>
              
              <Row>
                <Col md={6} className="mb-3">
                  <h6>❓ متى ترد على الرسائل؟</h6>
                  <p className="text-secondary small">
                    أحاول الرد خلال 24-48 ساعة عادة. الصبر مطلوب أحياناً! 😊
                  </p>
                </Col>
                
                <Col md={6} className="mb-3">
                  <h6>❓ هل تقدم استشارات مدفوعة؟</h6>
                  <p className="text-secondary small">
                    نعم، أقدم استشارات تقنية. تواصل معي للتفاصيل.
                  </p>
                </Col>
                
                <Col md={6} className="mb-3">
                  <h6>❓ هل يمكن أن تراجع كودي؟</h6>
                  <p className="text-secondary small">
                    أحب مراجعة الكود ومساعدة المطورين! ابعث لي الكود عبر GitHub.
                  </p>
                </Col>
                
                <Col md={6} className="mb-3">
                  <h6>❓ هل تقبل اقتراحات للمحتوى؟</h6>
                  <p className="text-secondary small">
                    بالطبع! أقدر اقتراحاتكم لتطوير المحتوى التعليمي.
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          {/* Final Note */}
          <div className="text-center mt-4">
            <Alert variant="info">
              <strong>💡 نصيحة:</strong> عند إرسال سؤال تقني، حاول أن تكون محدداً واذكر 
              رسالة الخطأ (إن وجدت) أو الكود الذي تواجه مشكلة فيه. هذا سيساعدني في تقديم 
              إجابة أكثر دقة وفائدة لك.
            </Alert>
          </div>
        </Col>
      </Row>
    </Container>
      </>
  );
  
}

export default Contact;