import Image from "next/image";

const experiences = [
  {
    number: "01",
    icon: "♪",
    title: "Music",
    text: "Live sound, ceremony, dance, and late-night firelight for the spring equinox weekend.",
  },
  {
    number: "02",
    icon: "🎨",
    title: "Art",
    text: "Visionary art, color, sacred geometry, handmade worlds, and creative expression everywhere you turn.",
  },
  {
    number: "03",
    icon: "☼",
    title: "Workshops",
    text: "Movement, renewal, community practices, and spaces to regenerate ourselves together.",
  },
  {
    number: "04",
    icon: "🔥",
    title: "Community",
    text: "Gather around the fire with artists, builders, dreamers, and everyone ready to rise.",
  },
];

const symbols = [
  { mark: "🜁", title: "Air spiral", text: "breath, release, and fresh vision" },
  { mark: "🌊", title: "Water wave", text: "flow, cleansing, and emotional renewal" },
  { mark: "🌀", title: "Cosmic portal", text: "the threshold into rebirth" },
  { mark: "☯", title: "Yin-yang sun", text: "balance, polarity, and integration" },
  { mark: "☾", title: "Crescent moon", text: "dreams, cycles, and intuition" },
  { mark: "☀", title: "Golden sun", text: "life force and equinox light" },
  { mark: "𓂀", title: "Eye pyramid", text: "vision, wisdom, and Pyramid Events" },
  { mark: "❤", title: "Phoenix heart", text: "love transmuted through flame" },
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
          <a href="#flyer">Flyer</a>
          <a href="#experience">Experience</a>
          <a href="#symbols">Symbols</a>
          <a href="#contact">Contact</a>
          <a className="nav-cta" href="#tickets">Tickets <span>↗</span></a>
        </nav>
      </header>

      <section className="hero wrap" id="top">
        <div className="eyebrow"><span /> Over the spring equinox</div>
        <h1>REBIRTH<br /><em>PHOENIXFEST.</em></h1>
        <p className="hero-copy">March 20–22, 2027 at Sunrise Valley Ranch, TX. Music, art, workshops, and community with Pyramid Events.</p>
        <a className="circle-link" href="#flyer" aria-label="View the festival flyer"><span>View</span><b>↓</b></a>
        <div className="art" aria-hidden="true"><div className="halo" /><PhoenixMark /></div>
        <div className="hero-meta"><span>DATE + LOCATION</span><strong>MARCH 20–22, 2027 · SUNRISE VALLEY RANCH, TX</strong></div>
      </section>

      <section className="marquee" aria-label="Festival themes">
        <div>RISE • CREATE • CONNECT • RENEW • MUSIC • ART • WORKSHOPS • COMMUNITY • SPRING EQUINOX • PYRAMID EVENTS •</div>
      </section>

      <section className="flyer wrap" id="flyer">
        <div className="section-kicker">OFFICIAL 2027 FLYER</div>
        <div className="flyer-grid">
          <div>
            <h2>May we regenerate ourselves, thereby regenerating the world.</h2>
            <p>Rebirth Phoenixfest returns over the spring equinox: March 20–22, 2027 at Sunrise Valley Ranch, TX.</p>
            <p>The gathering brings together music, art, workshops, and community under the phoenix, the sun and moon, sacred geometry, flame, water, air, and the Pyramid Events symbol.</p>
          </div>
          <figure>
            <Image
              src="/rebirth-phoenixfest-flyer-2027.png"
              alt="Rebirth Phoenixfest 2027 flyer with phoenix, elemental symbols, pyramid, sun, moon, fire, music, art, workshops, and community details"
              width={1054}
              height={1492}
              priority
            />
          </figure>
        </div>
      </section>

      <section className="experience wrap" id="experience">
        <div className="section-kicker">THE EXPERIENCE</div>
        <div className="section-intro">
          <h2>Music, art, workshops,<br /><i className="community-accent">and community.</i></h2>
          <p>Built at the meeting point of ceremony, creative expression, and human connection, Phoenixfest is a place to lose track of time—and remember what matters.</p>
        </div>
        <div className="cards">
          {experiences.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span><div className="card-icon" aria-hidden="true">{item.icon}</div>
              <h3>{item.title}</h3><p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="symbols" id="symbols">
        <div className="wrap symbols-grid">
          <div>
            <div className="section-kicker light">THE SYMBOLS</div>
            <p className="quote">Phoenix fire.<br />Equinox balance.<br />World regeneration.</p>
          </div>
          <div className="symbol-list">
            {symbols.map((symbol) => (
              <article key={symbol.title}>
                <span aria-hidden="true">{symbol.mark}</span>
                <h3>{symbol.title}</h3>
                <p>{symbol.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="story" id="story">
        <div className="story-orb" aria-hidden="true" />
        <div className="wrap story-grid">
          <div className="section-kicker light">WHY REBIRTH?</div>
          <div>
            <p className="quote">“Every ending leaves an ember.<br />Every ember holds a beginning.”</p>
            <p className="story-copy">Rebirth Phoenixfest began with a simple belief: gathering can change us. We are creating a space where expression is fearless, difference is celebrated, and everyone has a place around the fire.</p>
          </div>
        </div>
      </section>

      <section className="updates wrap" id="tickets">
        <span className="tiny">MORE INFO & TICKETS</span>
        <h2>Rebirth-Phoenixfest.org<br /><em>is the portal.</em></h2>
        <p>March 20–22, 2027. Sunrise Valley Ranch, TX. Follow the fire for ticket updates, lineup announcements, and workshop details.</p>

        <div className="contact-panel" id="contact">
          <div>
            <span className="tiny">QUESTIONS</span>
            <h3>Ask the Phoenixfest team.</h3>
            <p>Email <a href="mailto:information@rebirth-phoenixfest.org">information@rebirth-phoenixfest.org</a> for questions about tickets, workshops, vending, volunteering, accessibility, and event updates.</p>
            <a className="update-button secondary" href="mailto:information@rebirth-phoenixfest.org?subject=Question%20about%20Rebirth%20Phoenixfest">Ask a question <span>↗</span></a>
          </div>

          <form
            className="subscribe-form"
            action="mailto:information@rebirth-phoenixfest.org?subject=Subscribe%20me%20to%20Rebirth%20Phoenixfest%20updates"
            method="post"
            encType="text/plain"
          >
            <span className="tiny">EMAIL LIST</span>
            <h3>Subscribe for updates.</h3>
            <p>Join the update list for announcements from information@rebirth-phoenixfest.org.</p>
            <label htmlFor="subscriber-email">Email address</label>
            <div>
              <input id="subscriber-email" name="email" type="email" placeholder="you@example.com" required />
              <button type="submit">Subscribe <span>↗</span></button>
            </div>
          </form>
        </div>
      </section>

      <footer className="wrap">
        <a className="brand" href="#top"><span className="brand-sun" /><span>REBIRTH<br />PHOENIXFEST</span></a>
        <p>OVER THE SPRING EQUINOX<br />MARCH 20–22, 2027 · SUNRISE VALLEY RANCH, TX</p>
        <div><a href="#flyer">Flyer</a><a href="#experience">Experience</a><a href="#symbols">Symbols</a><a href="mailto:information@rebirth-phoenixfest.org">Email</a></div>
        <small>© 2027 REBIRTH PHOENIXFEST · PYRAMID EVENTS</small>
      </footer>
    </main>
  );
}
