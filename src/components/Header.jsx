export default function Header() {
  return (
    <header className="bg-darkBg text-primary p-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">مطور</h1>
        <nav className="space-x-4 rtl:space-x-reverse">
          <a href="/" className="hover:underline">الرئيسية</a>
          <a href="/learn" className="hover:underline">التعلم</a>
          <a href="/contact" className="hover:underline">تواصل</a>
        </nav>
      </div>
    </header>
  );
}