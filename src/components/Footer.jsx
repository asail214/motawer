import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-light text-center p-3 mt-5">
      <p>© {new Date().getFullYear()} منصة مطور - جميع الحقوق محفوظة</p>
    </footer>
  );
}

export default Footer;
