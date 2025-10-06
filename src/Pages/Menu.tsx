import { useState } from "react";
import { useCart } from "../Components/CartContext";
import { useNotification } from "../Components/NotificationContext";
import { menuData, categories } from "../Components/MenuItems";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("featured");
  const { dispatch } = useCart();
  const { showNotification } = useNotification();

  const handleAddToCart = (item: any, category: string) => {
    const itemWithQuantity = {
      id: item.id,
      name: item.name,
      price: Number(item.price),
      quantity: 1,
      img: item.img,
      category,
    };

    dispatch({ type: "ADD_ITEM", payload: itemWithQuantity });
    showNotification(`${item.name} added to cart!`, "success");
  };

  return (
    <main className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight">Menu</h1>

        {/* Category Filter */}
        <div className="mt-6 border-b border-amber-600/20">
          <nav className="-mb-px flex space-x-8 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium transition-colors cursor-pointer ${
                  activeCategory === cat.key
                    ? "border-amber-600 text-amber-600 font-bold"
                    : "border-transparent text-stone-500 hover:border-amber-600/40 hover:text-stone-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Menu Items */}
        <div className="mt-8 space-y-12">
          {activeCategory === "featured" ? (
            <>
              {/* Featured first */}
              <section>
                <h2 className="text-2xl font-bold">Featured</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
                  {menuData.featured.map((item) => (
                    <MenuCard
                      key={item.id}
                      item={item}
                      category="featured"
                      onAddToCart={handleAddToCart}
                    />
                  ))}
                </div>
              </section>

              {/* Then all categories */}
              {categories
                .filter((c) => c.key !== "featured")
                .map((cat) => (
                  <section key={cat.key}>
                    <h2 className="text-2xl font-bold">{cat.label}</h2>
                    <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
                      {menuData[cat.key].map((item) => (
                        <MenuCard
                          key={item.id}
                          item={item}
                          category={cat.key}
                          onAddToCart={handleAddToCart}
                        />
                      ))}
                    </div>
                  </section>
                ))}
            </>
          ) : (
            /* Normal single-category view */
            <section>
              <h2 className="text-2xl font-bold">
                {categories.find((c) => c.key === activeCategory)?.label}
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
                {menuData[activeCategory].map((item) => (
                  <MenuCard
                    key={item.id}
                    item={item}
                    category={activeCategory}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </main>
  );
}

/* Card Component */
function MenuCard({
  item,
  category,
  onAddToCart,
}: {
  item: any;
  category: string;
  onAddToCart: (item: any, category: string) => void;
}) {
  return (
    <div className="flex gap-6 rounded-xl bg-background-light p-4 shadow-sm transition-shadow hover:shadow-lg dark:bg-background-dark">
      <div className="flex-1">
        {item.tag && (
          <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
            {item.tag}
          </p>
        )}
        <h3 className="mt-1 text-lg font-bold">{item.name}</h3>
        <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
          {item.desc}
        </p>
        <p className="mt-2 text-lg font-bold">
          ₦{item.price.toLocaleString("en-NG")}
        </p>

        <button
          onClick={() => onAddToCart(item, category)}
          className="mt-4 flex h-9 items-center justify-center rounded-lg bg-amber-600 px-4 text-sm font-bold text-white hover:bg-opacity-90 cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
      <div className="w-32 flex-shrink-0 sm:w-48">
        <div
          className="aspect-square w-full rounded-lg bg-cover bg-center"
          style={{ backgroundImage: `url(${item.img})` }}
        />
      </div>
    </div>
  );
}
