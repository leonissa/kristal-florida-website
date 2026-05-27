import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const stats = [
  { value: '500+', label: 'Treatments' },
  { value: '5K+', label: 'Clients' },
  { value: '30+', label: 'Services' },
  { value: '97%', label: 'Satisfaction' },
];

const pillars = [
  {
    title: 'Expert Touch',
    desc: 'Every facial is performed by skilled estheticians using premium products and advanced techniques tailored to your unique skin.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'Personalized Care',
    desc: 'No two faces are alike. We design fully customized treatment plans tailored to your skin type, goals, and lifestyle.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
  {
    title: 'Serene Escape',
    desc: 'Step into a sanctuary of calm. Our studio is designed to soothe your senses and elevate your wellness experience from the moment you arrive.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
  },
];

const featuredServices = [
  {
    id: 'hydrafacial',
    name: 'HydraFacial MD',
    price: 199,
    gradient: 'from-kristals-gold to-kristals-gold-dark',
    initials: 'HF',
  },
  {
    id: 'oxygen-facial',
    name: 'Oxygen Facial',
    price: 189,
    gradient: 'from-kristals-gold-light to-kristals-gold',
    initials: 'OF',
  },
  {
    id: 'hydrating-facial',
    name: 'Hydrating Facial',
    price: 139,
    gradient: 'from-kristals-dark to-kristals-gold-dark',
    initials: 'HF',
  },
];

const testimonials = [
  {
    name: 'Sofia Ramirez',
    quote: 'I\'ve visited med spas across South Florida and nothing compares to the personalized care at Kristal\'s in Davie. The HydraFacial MD transformed my complexion after just one session — my skin has never looked this radiant.',
    title: 'Loyal Client since 2024',
  },
  {
    name: 'Marcus Johnson',
    quote: 'The team at Kristal\'s took the time to understand my concerns and designed a personalized plan that actually delivered. Living in Davie, I love that world-class skincare is right in my neighborhood.',
    title: 'Wellness Advocate',
  },
  {
    name: 'Juliana Costa',
    quote: 'From the moment I stepped through the doors, I felt a sense of calm that\'s hard to find. The studio is stunning, the staff is incredibly knowledgeable, and coming here from Fort Lauderdale is always worth the drive.',
    title: 'Monthly Visitor',
  },
];

export default function Home() {
  const { addToCart } = useCart();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/service-1.jpg"
            alt="Kristal's Med Spa interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-kristals-dark/90 via-kristals-dark/80 to-kristals-gold-dark/70" />
        </div>
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-kristals-gold blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-kristals-gold-light blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-kristals-gold-light text-xs tracking-[0.25em] uppercase font-medium animate-fade-in">Davie, Florida</span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-kristals-white leading-tight mt-4 mb-6 animate-fade-up">
            Rediscover Your<br />
            <span className="text-kristals-gold">Radiance</span>
          </h1>
          <p className="text-kristals-white/60 text-base md:text-lg max-w-2xl mx-auto mb-10 animate-fade-up">
            Where timeless beauty meets modern skincare in the heart of South Florida. Experience transformative facials at our Davie sanctuary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
            <Link to="/treatments" className="btn-primary">
              Explore Treatments
            </Link>
            <Link to="/contact" className="inline-block border-2 border-kristals-gold text-kristals-gold px-8 py-3.5 rounded-full text-sm font-medium hover:bg-kristals-gold hover:text-kristals-white transition-all">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-kristals-dark border-t border-kristals-gold/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl md:text-4xl font-bold text-kristals-gold">{stat.value}</p>
                <p className="text-kristals-gray text-sm mt-1 tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach - 3 Pillars */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">Our Approach</span>
            <h2 className="section-heading mt-3">Why Kristal's?</h2>
            <p className="text-kristals-gray mt-4 max-w-xl mx-auto text-sm md:text-base">
              We don't believe in one-size-fits-all. Every facial is curated to your unique skin and goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((card) => (
              <div key={card.title} className="card-hover bg-kristals-white rounded-2xl p-8 border border-kristals-taupe/30 text-center">
                <div className="w-16 h-16 rounded-full bg-kristals-gold/10 flex items-center justify-center text-kristals-gold mx-auto mb-6">
                  {card.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-kristals-dark mb-3">{card.title}</h3>
                <p className="text-kristals-gray text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 md:py-28 bg-kristals-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">Our Services</span>
            <h2 className="section-heading mt-3">Featured Treatments</h2>
            <p className="text-kristals-gray mt-4 max-w-xl mx-auto text-sm md:text-base">
              Curated facial treatments designed to restore, rejuvenate, and reveal your best skin.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={service.id} className="card-hover bg-kristals-white rounded-2xl overflow-hidden border border-kristals-taupe/30 group">
                <div className="h-52 overflow-hidden relative bg-gradient-to-br from-kristals-dark to-kristals-gold-dark flex items-center justify-center">
                  <img src={`/images/service-${index + 1}.jpg`} alt={service.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-t from-kristals-dark/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="font-serif text-3xl font-bold text-kristals-gold">{service.initials}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-lg font-bold text-kristals-dark">{service.name}</h3>
                    <span className="text-kristals-gold text-xl font-bold">${service.price}</span>
                  </div>
                  <button
                    onClick={() => addToCart({ id: service.id, name: service.name, price: service.price, image: `/images/service-${index + 1}.jpg` })}
                    className="mt-4 w-full py-2.5 rounded-full border border-kristals-gold text-kristals-gold text-sm font-medium hover:bg-kristals-gold hover:text-kristals-white transition-all"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/treatments" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Visit Our Studio */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-kristals-dark to-kristals-gold-dark rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto overflow-hidden">
                <img
                  src="/images/spa-interior.svg"
                  alt="Kristal's studio in Davie, FL"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <span className="section-label text-kristals-gold-light">Visit Us</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-kristals-white mt-3 mb-4">
                  Experience Kristal's<br />in Person
                </h2>
                <p className="text-kristals-white/60 text-sm md:text-base leading-relaxed mb-8">
                  Step into our tranquil studio in the heart of Davie, just minutes from Fort Lauderdale. From the moment you arrive, every detail is designed to help you unwind, recharge, and transform.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm text-kristals-white/70">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-kristals-gold shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    1 Seminole Way, Ste 116, Davie, FL 33314
                  </div>
                  <div className="flex items-center gap-3 text-sm text-kristals-white/70">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-kristals-gold shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    (786) 474-5829
                  </div>
                  <div className="flex items-center gap-3 text-sm text-kristals-white/70">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-kristals-gold shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    Sun–Fri 9:00 AM – 5:00 PM
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/contact" className="btn-primary">
                    Book Your Visit
                  </Link>
                  <a href="tel:+17864745829" className="inline-block border-2 border-kristals-gold text-kristals-gold px-8 py-3.5 rounded-full text-sm font-medium hover:bg-kristals-gold hover:text-kristals-white transition-all text-center">
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-kristals-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">Client Stories</span>
            <h2 className="section-heading mt-3">Real Results, Real People</h2>
            <p className="text-kristals-gray mt-4 max-w-xl mx-auto text-sm md:text-base">
              Hear from those who have trusted us with their skincare journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-kristals-white rounded-2xl p-6 md:p-8 border border-kristals-taupe/30 card-hover">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-kristals-gold">
                      <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="text-kristals-dark/80 text-sm md:text-base leading-relaxed italic mb-4">"{t.quote}"</p>
                <div className="border-t border-kristals-taupe/30 pt-4">
                  <p className="font-semibold text-kristals-dark text-sm">{t.name}</p>
                  <p className="text-kristals-gray text-xs">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}