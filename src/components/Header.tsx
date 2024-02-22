export default function Header() {
  return (
    <header className="flex bg-slate-800 px-32 py-5 text-white">
      <div className="flex items-center gap-x-4">
        <a href="/" className="mr-4">
          <p>Xolic</p>
        </a>
        <a href="/about">
          <p>정보</p>
        </a>
        <a href="/latest">
          <p>최근</p>
        </a>
        <a href="/ranking">
          <p>순위</p>
        </a>
      </div>
      <div className="ml-auto flex items-center gap-x-4">
        <a href="/account">
          <p>계정</p>
        </a>
      </div>
    </header>
  );
}
