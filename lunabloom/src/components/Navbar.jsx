export default function Navbar() {
  return (
    <nav className="bg-blush text-rosewood p-4">
      <ul className="flex gap-6 font-serif text-lg">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}
