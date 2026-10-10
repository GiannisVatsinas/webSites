import { useEffect, useState } from "react";

const categories = ["Όλα", "Burgers", "Τυλιχτά", "Μερίδες", "Sides"];

const menuItems = [
  { name: "Aegean Smash", category: "Burgers", description: "Διπλό μοσχαρίσιο smash, γραβιέρα Νάξου, καραμελωμένο κρεμμύδι, πίκλα, blue sauce.", price: "9,80", tag: "BEST SELLER" },
  { name: "Athens Double", category: "Burgers", description: "Διπλό μπιφτέκι, cheddar, iceberg, ντομάτα, crispy onion και καπνιστή mayo.", price: "10,40" },
  { name: "Chicken Sando", category: "Burgers", description: "Τραγανό κοτόπουλο, coleslaw, πίκλες και πικάντικο γιαούρτι σε potato bun.", price: "8,90", tag: "NEW" },
  { name: "Pork Souvlaki", category: "Τυλιχτά", description: "Χοιρινό καλαμάκι, ντομάτα, κρεμμύδι, τζατζίκι και φρέσκες πατάτες.", price: "4,20", tag: "CLASSIC" },
  { name: "Chicken Gyros", category: "Τυλιχτά", description: "Ζουμερός γύρος κοτόπουλο, ντομάτα, κρεμμύδι, πατάτες και sauce γιαουρτιού.", price: "4,40" },
  { name: "Halloumi Pita", category: "Τυλιχτά", description: "Χαλούμι σχάρας, ντομάτα, αγγούρι, μυρωδικά και δροσερή sauce δυόσμου.", price: "4,90", tag: "VEGGIE" },
  { name: "Mixed Grill", category: "Μερίδες", description: "Χοιρινό, κοτόπουλο, κεμπάπ, πίτες, πατάτες, ντομάτα και τζατζίκι.", price: "14,80", tag: "ΓΙΑ 2" },
  { name: "Kebab Plate", category: "Μερίδες", description: "Δύο χειροποίητα κεμπάπ, ψητές πίτες, κρεμμύδι, sumac και γιαούρτι.", price: "10,90" },
  { name: "Chicken Skewers", category: "Μερίδες", description: "Τρία καλαμάκια κοτόπουλο, πατάτες, πίτα, ντομάτα και mustard sauce.", price: "11,20" },
  { name: "Feta Fries", category: "Sides", description: "Τραγανές πατάτες, φέτα ΠΟΠ, ρίγανη και lemon mayo.", price: "5,20", tag: "MUST TRY" },
  { name: "Onion Rings", category: "Sides", description: "Χειροποίητα onion rings με καπνιστή blue sauce.", price: "4,60" },
  { name: "Greek Slaw", category: "Sides", description: "Λάχανο, καρότο, άνηθος, λεμόνι και ελαφρύ dressing γιαουρτιού.", price: "4,40" },
];

const BurgerIcon = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true">
    <path d="M7 23h34M9 32h30M12 39h24M8 19c1-7 6-11 16-11s15 4 16 11H8Z" />
    <path d="M12 27c3 3 5-2 8 0s5 3 8 0 5 2 8 0" />
  </svg>
);

export default function App() {
  const [category, setCategory] = useState("Όλα");
  const [menuOpen, setMenuOpen] = useState(false);
  const [cart, setCart] = useState(0);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.14 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [category]);

  const addItem = (name: string) => {
    setCart((value) => value + 1);
    setNotice(`${name} προστέθηκε στην παραγγελία`);
    window.setTimeout(() => setNotice(""), 2200);
  };

  const filteredItems = category === "Όλα" ? menuItems : menuItems.filter((item) => item.category === category);

  return (
    <main>
      <nav className="nav-shell" aria-label="Κύρια πλοήγηση">
        <a className="brand" href="#top" aria-label="Blue Buns αρχική">
          <span className="brand-mark"><BurgerIcon /></span>
          <span>BLUE BUNS</span>
        </a>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <a href="#menu" onClick={() => setMenuOpen(false)}>Μενού</a>
          <a href="#story" onClick={() => setMenuOpen(false)}>Η ιστορία μας</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Επικοινωνία</a>
        </div>
        <a className="order-button" href="#menu">
          <span>Παράγγειλε</span>
          <span className="cart-count">{cart}</span>
        </a>
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Άνοιγμα μενού" aria-expanded={menuOpen}>
          <span /><span />
        </button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow hero-intro"><span /> ΑΘΗΝΑ · EST. 2024</p>
          <h1 className="hero-title">
            <span>Street food.</span>
            <span className="outline-text">Greek soul.</span>
          </h1>
          <p className="hero-description">Ζουμερά smash burgers και αυθεντικό σουβλάκι, φτιαγμένα καθημερινά με πρώτες ύλες που γνωρίζουμε με το μικρό τους όνομα.</p>
          <div className="hero-actions">
            <a className="primary-cta" href="#menu">Δες το μενού <span>↘</span></a>
            <p><strong>4.9</strong><span className="stars">★★★★★</span><small>600+ χαρούμενοι foodies</small></p>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap">
            <img src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=1400&q=88" alt="Ζουμερό burger με πατάτες" />
          </div>
          <div className="spin-stamp">
            <svg viewBox="0 0 120 120" aria-hidden="true">
              <defs><path id="circlePath" d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0" /></defs>
              <text><textPath href="#circlePath">FRESH DAILY · MADE WITH LOVE · </textPath></text>
            </svg>
            <span>BB</span>
          </div>
          <p className="vertical-note">GOOD FOOD · GOOD MOOD</p>
        </div>
        <a href="#manifesto" className="scroll-cue" aria-label="Κύληση προς τα κάτω">
          <span>SCROLL TO TASTE</span><i>↓</i>
        </a>
      </section>

      <section className="manifesto reveal" id="manifesto">
        <p className="section-kicker">NO SHORTCUTS. JUST FLAVOUR.</p>
        <h2>Το γρήγορο φαγητό<br />μπορεί να είναι <em>τίμιο.</em></h2>
        <div className="manifesto-grid">
          <p>Ζυμώνουμε, μαρινάρουμε και κόβουμε κάθε μέρα. Χωρίς έτοιμες λύσεις, χωρίς περιττά. Μόνο αληθινή γεύση, από τη σχάρα στο χέρι σου.</p>
          <div className="stats">
            <div><strong>100%</strong><span>φρέσκο μοσχάρι</span></div>
            <div><strong>24h</strong><span>μαρινάρισμα</span></div>
            <div><strong>0</strong><span>κατεψυγμένα</span></div>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>SMASHED FRESH <span>✦</span> ΤΥΛΙΓΜΕΝΟ ΣΩΣΤΑ <span>✦</span> MADE IN ATHENS <span>✦</span> SMASHED FRESH <span>✦</span> ΤΥΛΙΓΜΕΝΟ ΣΩΣΤΑ <span>✦</span></div>
      </div>

      <section className="menu-section" id="menu">
        <div className="section-heading reveal">
          <div>
            <p className="section-kicker">ΔΙΑΛΕΞΕ ΤΗΝ ΑΔΥΝΑΜΙΑ ΣΟΥ</p>
            <h2>Το μενού.</h2>
          </div>
          <p>Λίγες επιλογές, πολλή γεύση.<br />Όλα φτιάχνονται τη στιγμή που τα ζητάς.</p>
        </div>
        <div className="category-tabs reveal" role="tablist" aria-label="Κατηγορίες μενού">
          {categories.map((item) => (
            <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)} role="tab" aria-selected={category === item}>
              {item}
            </button>
          ))}
        </div>
        <div className="menu-grid">
          {filteredItems.map((item, index) => (
            <article className="menu-card reveal" key={item.name} style={{ transitionDelay: `${Math.min(index, 5) * 55}ms` }}>
              <div className="menu-card-top">
                <span className="item-number">{String(index + 1).padStart(2, "0")}</span>
                {item.tag && <span className="item-tag">{item.tag}</span>}
              </div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="menu-card-bottom">
                <strong>€{item.price}</strong>
                <button onClick={() => addItem(item.name)} aria-label={`Προσθήκη ${item.name}`}>+</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-section reveal">
        <div className="feature-image">
          <img src="https://images.unsplash.com/photo-1763647818263-62a9256f097c?auto=format&fit=crop&w=1400&q=88" alt="Ποικιλία ψητών κρεάτων, πίτες και φρέσκα συνοδευτικά" />
          <span>THE GREEK WAY</span>
        </div>
        <div className="feature-copy">
          <p className="section-kicker">ΑΠΟ ΤΗ ΣΧΑΡΑ, ΜΕ ΑΓΑΠΗ</p>
          <h2>Η φωτιά<br />λέει την<br /><em>αλήθεια.</em></h2>
          <p>Δυνατή φωτιά, σωστός χρόνος και καλά υλικά. Αυτή είναι όλη η συνταγή — και δεν την αλλάζουμε για κανέναν.</p>
          <a href="#story">Γνώρισε την ιστορία μας <span>→</span></a>
        </div>
      </section>

      <section className="story-section" id="story">
        <div className="story-copy reveal">
          <p className="section-kicker">ΜΙΑ ΠΑΡΕΑ. ΜΙΑ ΙΔΕΑ.</p>
          <h2>Από την πλατεία,<br />στη γειτονιά.</h2>
          <p>Ξεκινήσαμε γιατί μας έλειπε ένα μέρος που να συνδυάζει την απλότητα του ελληνικού ψητοπωλείου με την ενέργεια ενός σύγχρονου burger joint.</p>
          <p>Το Blue Buns είναι η δική μας εκδοχή του street food: ανοιχτή κουζίνα, δυνατή μουσική, κρύα μπίρα και φαγητό που θέλεις να ξαναφάς.</p>
          <div className="signature">οι Blue Buns</div>
        </div>
        <div className="story-images reveal">
          <img className="story-main" src="https://images.unsplash.com/photo-1714849604217-13473e26955f?auto=format&fit=crop&w=1000&q=85" alt="Μοντέρνο και φιλόξενο εστιατόριο" />
          <img className="story-detail" src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=600&q=85" alt="Burger με τραγανές πατάτες" />
        </div>
      </section>

      <section className="reviews-section">
        <div className="section-heading reveal">
          <div><p className="section-kicker">Ο ΚΟΣΜΟΣ ΜΙΛΗΣΕ</p><h2>Love at first bite.</h2></div>
          <div className="review-score"><strong>4.9</strong><span>★★★★★</span><small>Google reviews</small></div>
        </div>
        <div className="reviews-grid">
          {[
            ["«Το Aegean Smash είναι απλά άλλο επίπεδο. Επιτέλους burger με ελληνικό χαρακτήρα!»", "ΜΑΡΙΑ Κ."],
            ["«Το σουβλάκι όπως πρέπει: ζουμερό, φρέσκο, χωρίς υπερβολές. Και ο χώρος πανέμορφος.»", "ΝΙΚΟΣ Π."],
            ["«Ήρθα για τις πατάτες με φέτα, έμεινα για τα πάντα. Νέα σταθερή αξία στη γειτονιά.»", "ΕΛΕΝΗ Μ."],
          ].map(([quote, name]) => (
            <blockquote className="reveal" key={name}><span>“</span><p>{quote}</p><footer>{name} <i>★★★★★</i></footer></blockquote>
          ))}
        </div>
      </section>

      <section className="final-cta" id="contact">
        <div className="cta-orbit" aria-hidden="true" />
        <p className="section-kicker">ΠΕΙΝΑΣΑΜΕ ΗΔΗ</p>
        <h2>Ready to<br /><em>get messy?</em></h2>
        <a href="#menu" onClick={() => setNotice("Το online ordering ανοίγει σύντομα!")}>Παράγγειλε τώρα <span>↗</span></a>
        <div className="contact-strip">
          <p><small>ΒΡΕΣ ΜΑΣ</small>Κεραμεικού 42, Αθήνα</p>
          <p><small>ΩΡΑΡΙΟ</small>Δευ–Κυρ · 12:00–01:00</p>
          <p><small>ΠΑΡΕ ΜΑΣ</small>210 555 2024</p>
        </div>
      </section>

      <footer className="footer">
        <a className="brand footer-brand" href="#top"><span className="brand-mark"><BurgerIcon /></span><span>BLUE BUNS</span></a>
        <p>BURGERS · SOUVLAKI · GOOD TIMES</p>
        <div><a href="#top">Instagram</a><a href="#top">TikTok</a><a href="#top">Facebook</a></div>
        <small>© 2025 BLUE BUNS. MADE WITH APPETITE IN ATHENS.</small>
      </footer>

      <div className={`toast ${notice ? "show" : ""}`} role="status">{notice}</div>
    </main>
  );
}
