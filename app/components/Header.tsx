export default function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Country Fresh Eggs</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="/products" className="hover:text-gray-600 dark:hover:text-gray-300">
                  Products
                </a>
              </li>
              <li>
                <a href="/cart" className="hover:text-gray-600 dark:hover:text-gray-300">
                  Cart (0)
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}