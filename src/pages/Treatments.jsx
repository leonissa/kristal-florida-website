import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const services = [
  {
    id: 'hydrafacial',
    name: 'HydraFacial MD',
    price: 199,
    duration: '50 min',
    gradient: 'from-kristals-gold to-kristals-gold-dark',
    initials: 'HF',
    desc: 'Experience the gold standard in facial rejuvenation. Our HydraFacial combines vortex-cleaning, gentle extractions, and intense hydration to deliver instant, visible results with zero downtime.',
    bullets: [
      'Deep pore cleansing and extraction',
      'Customizable serum infusion (antioxidants, peptides, hyaluronic acid)',
      'LED boost treatment optional add-on',
      'Instant glow with no irritation',
    ],
  },
  {
    id: 'oxygen-facial',
    name: 'Oxygen Facial',
    price: 189,
    duration: '45 min',
    gradient: 'from-kristals-gold to-kristals-gold-light',
    initials: 'OF',
    desc: 'Infuse your skin with pure oxygen and concentrated active ingredients. This painless, refreshing treatment boosts circulation, reduces puffiness, and delivers an instant "glass skin" glow.',
    bullets: [
      'Pure oxygen infusion with active serums',
      'Brightens dull, tired complexions',
      'Reduces puffiness and boosts circulation',
      'Instant glow — perfect before an event',
    ],
  },
  {
    id: 'hydrating-facial',
    name: 'Hydrating Facial',
    price: 139,
    duration: '45 min',
    gradient: 'from-kristals-gold-light to-kristals-gold-light',
    initials: 'HF',
    desc: 'An ultra-nourishing facial designed for dehydrated and dull skin. Layers of hyaluronic acid, ceramides, and botanical extracts restore moisture balance and leave skin plump and dewy.',
    bullets: [
      'Deep hydration with hyaluronic acid and ceramides',
      'Soothes dry, dehydrated, or sensitive skin',
      'Restores moisture barrier',
      'Reveals a plump, dewy complexion',
    ],
  },
  {
    id: 'classic-facial',
    name: 'Classic Facial',
    price: 129,
    duration: '50 min',
    gradient: 'from-kristals-gold to-kristals-gold-light',
    initials: 'CF',
    desc: 'Our foundational facial experience. A thorough cleanse, gentle exfoliation, pore extraction, and customized mask — everything your skin needs to feel refreshed, balanced, and radiant.',
    bullets: [
      'Thorough double-cleansing and steam',
      'Gentle exfoliation and pore extraction',
      'Customized mask for your skin type',
      'Finishing with tone, serum, and moisturizer',
    ],
  },
  {
    id: 'led-therapy',
    name: 'LED Light Therapy',
    price: 129,
    duration: '40 min',
    gradient: 'from-kristals-gold-dark to-kristals-gold',
    initials: 'LL',
    desc: 'Harness the power of therapeutic light wavelengths. Our LED panels deliver precise red and blue light to calm inflammation, target blemishes, and support natural collagen production.',
    bullets: [
      'Red light: supports collagen and soothing',
      'Blue light: helps calm blemishes',
      'Painless, relaxing, and non-invasive',
      'Often paired with facials for amplified results',
    ],
  },
  {
    id: 'dermaplaning',
    name: 'Dermaplaning',
    price: 99,
    duration: '30 min',
    gradient: 'from-kristals-taupe to-kristals-gold-light',
    initials: 'DP',
    desc: 'Achieve instantly smoother skin with this gentle exfoliation treatment that removes dead skin cells and fine vellus hair for a luminous, polished complexion.',
    bullets: [
      'Gentle exfoliation of dead skin cells',
      'Removes fine vellus hair (peach fuzz)',
      'Creates a smooth canvas for makeup',
      'Reveals a luminous, polished complexion',
    ],
  },
];

export default function Treatments() {
  const { addToCart } = useCart();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/service-4.jpg"
            alt="Kristal's Treatments"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-kristals-dark/85 via-kristals-dark/75 to-kristals-gold-dark/65" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <span className="section-label text-kristals-gold-light">Treatments</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-kristals-white mt-3 mb-4">
            Curated Facials,<br />Beautiful Results
          </h1>
          <p className="text-kristals-white/70 max-w-2xl mx-auto text-sm md:text-lg">
            Every treatment at Kristal's is tailored to your unique skin needs and delivered in a relaxing, welcoming environment.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-label">Our Services</span>
            <h2 className="section-heading mt-3">Facial Services</h2>
            <p className="text-kristals-gray mt-4 max-w-xl mx-auto text-sm md:text-base">
              Each treatment is designed to restore, rejuvenate, and reveal your best skin.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="bg-kristals-white rounded-2xl overflow-hidden border border-kristals-taupe/30 card-hover flex flex-col">
                {/* Image placeholder */}
                <div className="h-52 overflow-hidden relative">
                  <img src={`/images/service-${index + 1}.jpg`} alt={service.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white font-medium">
                    {service.duration}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-serif text-xl font-bold text-kristals-dark">{service.name}</h3>
                  <p className="text-kristals-gold text-2xl font-bold mt-1">${service.price}</p>
                  <p className="text-kristals-gray text-sm mt-3 leading-relaxed">{service.desc}</p>
                  <ul className="mt-4 space-y-2 flex-1">
                    {service.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-kristals-dark/70">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-kristals-gold shrink-0 mt-0.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() => addToCart({ id: service.id, name: service.name, price: service.price, duration: service.duration, image: `/images/service-${index + 1}.jpg` })}
                      className="flex-1 py-2.5 rounded-full border border-kristals-gold text-kristals-gold text-sm font-medium hover:bg-kristals-gold hover:text-white transition-all"
                    >
                      Add to Cart
                    </button>
                    <a href="tel:+17864745829" className="flex-1 btn-primary text-xs py-2.5 text-center">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 bg-kristals-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-kristals-dark mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-kristals-gray max-w-lg mx-auto mb-8 text-sm md:text-base">
            Schedule a complimentary consultation and our team at Kristal's will help find the perfect facial for your skin.
          </p>
          <Link to="/contact" className="btn-primary">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}