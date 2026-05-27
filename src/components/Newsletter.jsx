export default function Newsletter() {
  return (
    <section className="bg-kristals-dark py-16 md:py-20 border-t border-kristals-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-kristals-white mb-3">
          Stay Connected
        </h2>
        <p className="text-kristals-gray text-base md:text-lg max-w-xl mx-auto mb-8">
          Be the first to know about exclusive treatments, seasonal offers, and wellness insights at Kristal's.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 px-5 py-3.5 rounded-full text-sm text-kristals-dark bg-kristals-white placeholder:text-kristals-gray outline-none focus:ring-2 focus:ring-kristals-gold"
          />
          <button
            type="submit"
            className="bg-kristals-gold text-kristals-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-kristals-gold-dark transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}