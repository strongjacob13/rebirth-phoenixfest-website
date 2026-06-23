const experiences = [
  { number: "01", title: "Live Sound", text: "A genre-bending lineup built for discovery, release, and the kind of sets you talk about all year." },
  { number: "02", title: "Immersive Art", text: "Large-scale installations, live making, and glowing worlds that transform as the night unfolds." },
  { number: "03", title: "Collective Ritual", text: "Movement, wellness, food, and shared moments designed to bring us back to ourselves—and each other." },
];

function PhoenixMark() {
  return (
    <svg className="phoenix" viewBox="0 0 640 640" role="img" aria-label="Abstract phoenix rising">
      <defs>
        <linearGradient id="fire" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#ff3d00" />
          <stop offset=".52" stopColor="#ffb000" />
          <stop offset="1" stopColor="#f6ff66" />
        </linearGradient>
      </defs>
      <path className="wing wing-left" d="M312 350C224 235 112 182 34 211c83 31 128 76 155 137-58-40-110-53-156-32 79 25 132 75 168 148 26-41 62-75 111-114Z" />
      <path className="wing wing-right" d="M328 350c88-115 200-168 278-139-83 31-128 76-155 137 58-40 110-53 156-32-79 25-132 75-168 148-26-41-62-75-111-114Z" />
      <path className="body" d="M320 88c16 82 74 123 45 215-11 37-31 68-45 104-14-36-34-67-45-104-29-92 29-133 45-215Zm0 319c44 63 59 107 0 159-59-52-44-96 0-159Z" />
      <circle cx="320" cy="243" r="8" fill="#17110f" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="nav wrap">
        <a className="brand" href="#top" aria-label="Rebirth Phoenixfest home">
          <span className="brand-sun" />
          <span>REBIRTH<br />PHOENIXFEST</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#experience">Experience</a>
          <a href="#story">Our story</a>
          <a className="nav-cta" href="#updates">Get updates <span>↗</span></a>
        </nav>
      </header>

      <section className="hero wrap" id="top">
        <div className="eyebrow"><span /> A new gathering is taking flight</div>
        <h1>RISE<br /><em>TOGETHER.</em></h1>
        <p className="hero-copy">A new festival of sound, art, movement, and collective renewal. Come as you are. Leave a little more alive.</p>
        <a className="circle-link" href="#experience" aria-label="Explore the festival"><span>Explore</span><b>↓</b></a>
        <div className="art" aria-hidden="true"><div className="halo" /><PhoenixMark /></div>
        <div className="hero-meta"><span>DATE + LOCATION</span><strong>TO BE REVEALED</strong></div>
      </section>

      <section className="marquee" aria-label="Festival themes"><div>RISE • CREATE • CONNECT • RENEW • RISE • CREATE • CONNECT • RENEW •</div></section>

      <section className="experience wrap" id="experience">
        <div className="section-kicker">THE EXPERIENCE</div>
        <div className="section-intro">
          <h2>More than a festival.<br /><i>A spark.</i></h2>
          <p>Built at the meeting point of music, art, and human connection, Phoenixfest is a place to lose track of time—and remember what matters.</p>
        </div>
        <div className="cards">
          {experiences.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span><div className="card-icon" aria-hidden="true">✦</div>
              <h3>{item.title}</h3><p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="story" id="story">
        <div className="story-orb" aria-hidden="true" />
        <div className="wrap story-grid">
          <div className="section-kicker light">WHY REBIRTH?</div>
          <div>
            <p className="quote">“Every ending leaves an ember.<br />Every ember holds a beginning.”</p>
            <p className="story-copy">Rebirth Phoenixfest began with a simple belief: gathering can change us. We’re creating a space where expression is fearless, difference is celebrated, and everyone has a place around the fire.</p>
          </div>
        </div>
      </section>

      <section className="updates wrap" id="updates">
        <span className="tiny">BE FIRST TO KNOW</span>
        <h2>The fire is<br /><em>just beginning.</em></h2>
        <p>Lineup, location, tickets, and the first chapter of Phoenixfest are coming soon.</p>
        <a className="update-button" href="mailto:?subject=Keep%20me%20posted%20about%20Rebirth%20Phoenixfest">Keep me posted <span>↗</span></a>
      </section>

      <footer className="wrap">
        <a className="brand" href="#top"><span className="brand-sun" /><span>REBIRTH<br />PHOENIXFEST</span></a>
        <p>MADE FOR THE BOLD, THE CURIOUS,<br />AND EVERYONE READY TO RISE.</p>
        <div><a href="#experience">Experience</a><a href="#story">Story</a><a href="#updates">Updates</a></div>
        <small>© 2026 REBIRTH PHOENIXFEST</small>
      </footer>
    </main>
  );
}
