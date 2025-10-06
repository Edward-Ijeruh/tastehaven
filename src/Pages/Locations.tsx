export default function Locations() {
  return (
    <main className="flex-grow container mx-auto max-w-5xl px-4 py-8">
      <div className=" mx-autor">
        <h1 className="text-4xl font-bold">Our Locations</h1>
        <p className="mt-4 text-center text-md text-stone-400">
          Find a TasteHaven near you soon!
        </p>
      </div>

      <div className="mt-8 max-w-4xl mx-auto flex flex-col items-center justify-center bg-background-light dark:bg-background-dark/50 rounded-xl p-8 shadow-lg shadow-stone-200/50 dark:shadow-black/20">
        {/* Map placeholder */}
        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzIN4B5oLKHqd_DuboHY_MkNIoDyv5-FSO23a8hZXekZ_YRbQsUA-6q8jqQzpscRTDLJkuZdJzlQ3wSVbjstEH-cvAr8TGDRtor1Vgvf1awF4sMICleQ7RC_VOrgsBMpn-qSslBCTVEZyL2-8j_AeGs1hM5mziLEHXvuwVuThKnfyIyLsw9xM5clqoyLZ2_EdvN5EaTk1BlwYEe_BrOlPrq-J4ByWTJVCdGNIxbKtRan35L9IJIUlMZ9Av5WgWry8fhkn7MfGeTSA"
            alt="Abstract map showing placeholder locations"
            className="w-full h-full object-cover object-center grayscale opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-amber-600/80 backdrop-blur-sm rounded-full py-4 px-8">
              <h2 className="text-md md:text-2xl font-bold text-white">
                Coming Soon Near You
              </h2>
            </div>
          </div>
        </div>

        {/* Info text */}
        <p className="mt-8 text-center text-stone-400 max-w-2xl">
          We're expanding! Our team is working hard to bring the delicious taste
          of TasteHaven to your neighborhood. Keep an eye on this page for
          updates on new store openings.
        </p>

        {/* Notify form */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email for updates"
            className="w-full px-4 py-3 rounded-lg border border-stone-300 bg-white focus:ring-2 focus:ring-amber-600 focus:border-amber-600 transition-colors"
          />
          <button className="w-full sm:w-auto flex-shrink-0 bg-amber-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-amber-600/90 transition-colors cursor-pointer">
            Notify Me
          </button>
        </div>
      </div>
    </main>
  );
}
