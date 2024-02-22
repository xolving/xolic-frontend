export default function Header() {
  return (
    <header className="flex bg-slate-800 px-32 py-5 text-white">
      <div className="flex gap-x-4">
        <a href="/">
          <p>Xolic</p>
        </a>
        <a href="/about">
          <p>소개</p>
        </a>
        <a href="/latest">
          <p>최신정보</p>
        </a>
        <a href="/ranking">
          <p>랭킹</p>
        </a>
      </div>
      <div className="ml-auto gap-x-4 sm:flex">
        <a href="/account">
          <p>계정</p>
        </a>
      </div>
    </header>
  );
}
