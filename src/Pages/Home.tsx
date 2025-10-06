import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] min-h-[400px] max-h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuB9MjPU60w1kV7efDOBf7IJs6EvJEF9FlWN79bjNgJPYVywIeOCbHzehxRs9ovlhdk63fEOKUYW2iY0y3bocl2sMKR8P9zrBsi5ZPnU_ldf2Td2kKjGmH2Ufu5ecL3V2hx_F3Y3h95MXIu0u45_MKlqGPse00mTB_D2ZZYyvX5Z_YZeEy7E3sV98TUTHCwWloeNZHRP813c1tmRY7feXDNxp0Y6wZYkGq_jCUOeSINgvF1OfDscOrSJVbaWYxaA-zBVMBSmcRfL_Po')",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg">
            Taste the Difference
          </h1>
          <p className="mt-4 max-w-2xl text-lg sm:text-xl drop-shadow">
            Enjoy our daily specials and exclusive online deals. Order now for
            fast delivery or pickup.
          </p>
          <Link to="/menu">
            <button className="mt-8 px-8 py-3 text-lg font-bold bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-transform transform hover:scale-105 cursor-pointer">
              Order Now
            </button>
          </Link>
        </div>
      </section>

      {/* Popular Items */}
      <section className="py-16 sm:py-24 bg-background-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular Items
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "The Classic Burger",
                desc: "Our signature burger with all the fixings.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDutXHDirXwSQJyV0eXYtteTZVFd1zuZxGn5gVcK0EcH_2sgk37TOZXPu9Ptk7v2L5efV6851vyEXr2_wCMTa5s5UgWr9na1lqNv3meqnt34h7EENna3S2s9iJ9jFVgqveV7RZBOV6XxAmk1KsAlA47FlPLmk_jnUyoUNjOoaoYtrj9gdD2_EyP6P8C8pRVAY5X662v4WVCGwcyMy8Pt0aRpyUK_9uT3HuU52ki-UGehRfGvKqZrILefnbzwER3o63b-PRno-e2qMg",
              },
              {
                name: "Pepperoni Pizza",
                desc: "A classic favorite with a crispy crust.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWileXHY253N51cMfRWL0rU_DLsltqUkpttTMCNaXqx2HknQcd_sT0KBNgxcQPAviwROCXlb15ABBFyKFy1TLUL79mEex2OtuqZSf9IPRLWrNOp9Ku2A_PYRP96X_8Pk4hRENnD0BW24aM5zKvCaIKq8qEP-Jledsh7wu0YwwE9NHp7_Qj8cdKXZaA2TSU6eUboq5m8KK-0O6VeHNLSI4oGSnIxPqQduquatiS8MzJY3fsdqwTsk_8MV5ar6E4nGVk3IEkDr5xZ18",
              },
              {
                name: "Spicy Chicken Wings",
                desc: "Perfectly seasoned and irresistibly spicy.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVsyeAwMUuH67zx5Cxzc02HhIsC05pjRXPRyOI29g5NY6RzCupj9axAXEEPE7lqH4zrfthREI6FiX1hS-pmguuXcVnSk6BspBDzx2svjW36on5mG4ZTG5KnI0vzVxVMyndCbyXEufU0HldYYPOPygB0lcTmixBPkHd7bhbS8vkkZfZemEShcg4GEbCWmvB9Njt_F6OAumw7fPbNUXSbu6NduV7KEQToy7sEoqxu1iiUE9dBBz0aXf6ZFQ7Ooy45U6QsGtVr_eVUzo",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="bg-background-light rounded-xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="mt-2 text-stone-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="py-16 sm:py-24 bg-amber-600/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl font-bold">Join TasteHaven Rewards</h2>
              <p className="mt-4 text-lg text-stone-700">
                Start earning points with every order and get exclusive rewards,
                birthday treats, and more. Being loyal has its perks!
              </p>
              <form className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:w-auto flex-grow px-4 py-3 rounded-full bg-white border-transparent focus:ring-2 focus:ring-amber-600 focus:border-transparent text-sm"
                />
                <button className="px-8 py-3 text-sm font-bold bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors cursor-pointer">
                  Sign Up
                </button>
              </form>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 lg:mt-0">
              {[
                {
                  icon: "card_giftcard",
                  title: "Earn Points",
                  desc: "Get 10 points for every $1 spent.",
                },
                {
                  icon: "celebration",
                  title: "Birthday Treat",
                  desc: "Enjoy a free item on your birthday.",
                },
                {
                  icon: "local_offer",
                  title: "Exclusive Deals",
                  desc: "Access members-only offers.",
                },
                {
                  icon: "rocket_launch",
                  title: "Early Access",
                  desc: "Be the first to try new menu items.",
                },
              ].map((perk) => (
                <div key={perk.title} className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-amber-600 text-4xl">
                    {perk.icon}
                  </span>
                  <div>
                    <h3 className="font-bold text-lg">{perk.title}</h3>
                    <p className="text-sm text-stone-600">{perk.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
