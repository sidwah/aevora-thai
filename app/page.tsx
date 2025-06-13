export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Glass Effect */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="glass-cream rounded-2xl p-8 lg:p-12 mb-12">
            <h1 className="text-4xl lg:text-6xl font-primary font-bold text-primary-brown mb-6">
              Welcome to Aevora Thai
            </h1>
            <p className="text-xl text-neutral-gray font-secondary max-w-2xl mx-auto leading-relaxed">
              An authentic Thai dining experience with traditional flavors and modern elegance.
            </p>
            
            {/* CTA Buttons with Glass Effect */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="glass-button px-8 py-3 text-primary-brown font-secondary font-medium rounded-lg">
                View Menu
              </button>
              <button className="bg-button-secondary hover:bg-button-hover-secondary text-white px-8 py-3 font-secondary font-medium rounded-lg transition-colors duration-200">
                Make Reservation
              </button>
            </div>
          </div>
        </div>
        
        {/* Content Sections with Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-16">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="glass-card rounded-xl p-6 hover:scale-[1.02] transition-transform duration-300">
              <h2 className="text-2xl font-primary text-primary-brown mb-4">
                {['Our Menu', 'Fresh Ingredients', 'Authentic Recipes', 'Modern Ambiance', 'Expert Chefs', 'Thai Heritage'][i]}
              </h2>
              <p className="text-neutral-gray font-secondary leading-relaxed mb-4">
                {[
                  'Discover our carefully curated menu featuring traditional Thai dishes with a modern twist.',
                  'We source the finest ingredients to bring you authentic flavors in every bite.',
                  'Family recipes passed down through generations, prepared with love and tradition.',
                  'Experience Thai cuisine in our elegantly designed, contemporary dining space.',
                  'Our skilled chefs bring years of experience and passion to every dish.',
                  'Celebrating the rich cultural heritage of Thailand through food and hospitality.'
                ][i]}
              </p>
              <p className="text-neutral-gray font-accent text-sm italic">
                Experience the perfect blend of tradition and innovation.
              </p>
            </div>
          ))}
        </div>
        
        {/* Featured Section with Strong Glass Effect */}
        <div className="mt-16">
          <div className="glass-strong rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-primary text-primary-brown mb-6">
              Experience Authentic Thai Cuisine
            </h2>
            <p className="text-lg text-neutral-gray font-secondary max-w-3xl mx-auto leading-relaxed mb-8">
              From traditional Pad Thai to innovative fusion dishes, every meal at Aevora Thai 
              is a journey through the rich culinary landscape of Thailand. Our glass-enclosed 
              kitchen allows you to witness the artistry of our chefs as they prepare your meal.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Spicy', 'Vegetarian', 'Gluten-Free', 'Family Recipes'].map((tag) => (
                <span key={tag} className="glass-light px-4 py-2 rounded-full text-sm font-secondary text-primary-brown">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}