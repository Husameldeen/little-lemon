import { useState } from "react";

/* ─── Wireframe primitives ─── */

function ImagePlaceholder({
  width = "100%",
  height = 180,
  label = "Image",
  className = "",
}) {
  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center ${className}`}
      style={{
        width,
        height,
        background: "#D4D4D4",
        border: "1.5px solid #AAAAAA",
      }}
    >
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0"
          y1="0"
          x2="100%"
          y2="100%"
          stroke="#AAAAAA"
          strokeWidth="1.5"
        />
        <line
          x1="100%"
          y1="0"
          x2="0"
          y2="100%"
          stroke="#AAAAAA"
          strokeWidth="1.5"
        />
      </svg>
      <span
        style={{
          position: "relative",
          fontSize: 11,
          color: "#888888",
          fontFamily: "var(--font-sans)",
          background: "rgba(255,255,255,0.75)",
          padding: "1px 6px",
          borderRadius: 2,
        }}
      >
        {label}
      </span>
    </div>
  );
}

function TextBar({ width = "100%", height = 10, className = "" }) {
  return (
    <div
      className={className}
      style={{
        width,
        height,
        background: "#D4D4D4",
        borderRadius: 2,
        flexShrink: 0,
      }}
    />
  );
}

function WfButton({ children, outline = false, small = false }) {
  return (
    <button
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: small ? 12 : 13,
        fontWeight: 600,
        padding: small ? "6px 16px" : "10px 24px",
        background: outline ? "transparent" : "#555555",
        color: outline ? "#555555" : "#FFFFFF",
        border: "1.5px solid #555555",
        borderRadius: 3,
        cursor: "default",
        letterSpacing: "0.03em",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </button>
  );
}

function SectionLabel({ children }) {
  return (
    <div
      style={{
        display: "inline-block",
        fontFamily: "var(--font-sans)",
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "#888888",
        border: "1px dashed #BBBBBB",
        padding: "2px 8px",
        marginBottom: 4,
      }}
    >
      {children}
    </div>
  );
}

function StarRating({ rating }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
          <polygon
            points="7,1 8.8,5.1 13.3,5.5 10,8.4 11,12.8 7,10.4 3,12.8 4,8.4 0.7,5.5 5.2,5.1"
            fill={i <= rating ? "#888888" : "#DDDDDD"}
          />
        </svg>
      ))}
    </div>
  );
}

/* ─── Sections ─── */

function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        background: "#FFFFFF",
        borderBottom: "2px solid #CCCCCC",
        height: 72,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 80px",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <ImagePlaceholder width={140} height={44} label="Logo" />
      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {["Home", "About", "Menu", "Reservations", "Order Online"].map(
          (link) => (
            <span
              key={link}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                fontWeight: 500,
                color: "#555555",
                cursor: "default",
                borderBottom: link === "Home" ? "2px solid #555555" : "none",
                paddingBottom: 2,
              }}
            >
              {link}
            </span>
          ),
        )}
        <WfButton small>Login</WfButton>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section
      style={{
        width: "100%",
        background: "#E8E8E8",
        borderBottom: "2px solid #CCCCCC",
        padding: "64px 80px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 64,
        alignItems: "center",
        minHeight: 440,
      }}
    >
      <div>
        <SectionLabel>Hero Section</SectionLabel>
        <div style={{ marginTop: 8 }}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 52,
              fontWeight: 700,
              color: "#333333",
              lineHeight: 1.1,
              marginBottom: 4,
            }}
          >
            Little Lemon
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 22,
              fontWeight: 500,
              color: "#666666",
              marginBottom: 20,
            }}
          >
            Chicago
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              marginBottom: 32,
            }}
          >
            <TextBar width="90%" height={11} />
            <TextBar width="80%" height={11} />
            <TextBar width="60%" height={11} />
          </div>
          <WfButton>Reserve a Table</WfButton>
        </div>
      </div>
      <ImagePlaceholder height={320} label="Hero Image" />
    </section>
  );
}

const specials = [
  { name: "Greek Salad", price: "$12.99", desc: "Fresh seasonal ingredients" },
  { name: "Bruschetta", price: "$5.99", desc: "Our Bruschetta is made from…" },
  { name: "Lemon Dessert", price: "$5.00", desc: "A locally sourced classic" },
  { name: "Grilled Fish", price: "$18.00", desc: "Daily catch with herbs" },
];

function HighlightsSection() {
  return (
    <section
      style={{
        width: "100%",
        background: "#FFFFFF",
        borderBottom: "2px solid #CCCCCC",
        padding: "64px 80px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 40,
        }}
      >
        <div>
          <SectionLabel>Highlights</SectionLabel>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 34,
              fontWeight: 700,
              color: "#333333",
              marginTop: 6,
            }}
          >
            This Week's Specials
          </h2>
        </div>
        <WfButton>Order Online</WfButton>
      </div>

      {/* Horizontal scroll container */}
      <div
        style={{
          display: "flex",
          gap: 24,
          overflowX: "auto",
          paddingBottom: 12,
          scrollbarWidth: "none",
        }}
      >
        {specials.map((item) => (
          <div
            key={item.name}
            style={{
              minWidth: 260,
              background: "#F5F5F5",
              border: "1.5px solid #CCCCCC",
              borderRadius: 4,
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <ImagePlaceholder height={160} label="Dish Photo" />
            <div style={{ padding: "16px 16px 20px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#333333",
                  }}
                >
                  {item.name}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#666666",
                  }}
                >
                  {item.price}
                </span>
              </div>
              <TextBar width="95%" height={9} className="mb-1" />
              <TextBar width="75%" height={9} className="mb-4" />
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#555555",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  cursor: "default",
                }}
              >
                Order a delivery <span style={{ fontSize: 14 }}>→</span>
              </div>
            </div>
          </div>
        ))}
        {/* Scroll indicator */}
        <div
          style={{
            minWidth: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#AAAAAA",
            fontSize: 24,
          }}
        >
          ›
        </div>
      </div>

      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 11,
          color: "#AAAAAA",
          marginTop: 10,
          fontStyle: "italic",
        }}
      >
        * Scrollable horizontally — click a dish to view details
      </p>
    </section>
  );
}

const testimonials = [
  { name: "Maria G.", rating: 5 },
  { name: "James T.", rating: 4 },
  { name: "Priya K.", rating: 5 },
  { name: "Sam R.", rating: 4 },
];

function TestimonialsSection() {
  return (
    <section
      style={{
        width: "100%",
        background: "#EEEEEE",
        borderBottom: "2px solid #CCCCCC",
        padding: "64px 80px",
      }}
    >
      <SectionLabel>Testimonials</SectionLabel>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 34,
          fontWeight: 700,
          color: "#333333",
          marginTop: 6,
          marginBottom: 40,
        }}
      >
        What Our Guests Say
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 24,
        }}
      >
        {testimonials.map((t) => (
          <div
            key={t.name}
            style={{
              background: "#FFFFFF",
              border: "1.5px solid #CCCCCC",
              borderRadius: 4,
              padding: "24px 20px",
            }}
          >
            <StarRating rating={t.rating} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
                margin: "16px 0",
              }}
            >
              <TextBar width="100%" height={9} />
              <TextBar width="95%" height={9} />
              <TextBar width="80%" height={9} />
              <TextBar width="85%" height={9} />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginTop: 16,
              }}
            >
              <ImagePlaceholder
                width={36}
                height={36}
                label=""
                className="rounded-full"
              />
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#555555",
                }}
              >
                {t.name}
              </span>
            </div>
          </div>
        ))}
      </div>
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 11,
          color: "#AAAAAA",
          marginTop: 14,
          fontStyle: "italic",
        }}
      >
        * Login required to leave a review — ratings out of 5
      </p>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      style={{
        width: "100%",
        background: "#FFFFFF",
        borderBottom: "2px solid #CCCCCC",
        padding: "64px 80px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 64,
        alignItems: "start",
      }}
    >
      <div>
        <SectionLabel>About</SectionLabel>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 34,
            fontWeight: 700,
            color: "#333333",
            marginTop: 6,
            marginBottom: 8,
          }}
        >
          Little Lemon
        </h2>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 15,
            fontWeight: 500,
            color: "#666666",
            marginBottom: 24,
          }}
        >
          Chicago
        </p>
        {/* Text placeholder block */}
        <div
          style={{
            background: "#F0F0F0",
            border: "1.5px dashed #CCCCCC",
            borderRadius: 4,
            padding: "20px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            marginBottom: 8,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 10,
              color: "#AAAAAA",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            Text Placeholder — Content TBD
          </p>
          {[100, 90, 95, 85, 90, 70, 80, 60].map((w, i) => (
            <TextBar key={i} width={`${w}%`} height={9} />
          ))}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <ImagePlaceholder height={220} label="Restaurant Photo" />
        <ImagePlaceholder height={220} label="Team / Chef Photo" />
      </div>
    </section>
  );
}

function Footer() {
  const navLinks = [
    "Home",
    "About",
    "Menu",
    "Reservations",
    "Order Online",
    "Login",
  ];
  const contact = [
    "123 Mediterranean Blvd",
    "Chicago, IL 60601",
    "+1 (312) 555-0192",
    "hello@littlelemon.com",
  ];
  const social = ["Facebook", "Instagram", "Twitter", "Yelp"];

  return (
    <footer
      style={{
        width: "100%",
        background: "#333333",
        padding: "56px 80px 40px",
      }}
    >
      <SectionLabel>Footer Navigation</SectionLabel>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "200px 1fr 1fr 1fr",
          gap: 48,
          marginTop: 24,
        }}
      >
        {/* Logo */}
        <div>
          <ImagePlaceholder width={140} height={56} label="Logo" />
        </div>

        {/* Doormat nav */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 12,
              fontWeight: 700,
              color: "#AAAAAA",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Navigation
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {navLinks.map((link) => (
              <span
                key={link}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  color: "#AAAAAA",
                  cursor: "default",
                }}
              >
                {link}
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 12,
              fontWeight: 700,
              color: "#AAAAAA",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Contact
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {contact.map((line) => (
              <span
                key={line}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  color: "#AAAAAA",
                }}
              >
                {line}
              </span>
            ))}
          </div>
        </div>

        {/* Social */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 12,
              fontWeight: 700,
              color: "#AAAAAA",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Social Media
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {social.map((platform) => (
              <div
                key={platform}
                style={{ display: "flex", alignItems: "center", gap: 8 }}
              >
                <div
                  style={{
                    width: 20,
                    height: 20,
                    background: "#555555",
                    border: "1px solid #666666",
                    borderRadius: 3,
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 13,
                    color: "#AAAAAA",
                  }}
                >
                  {platform}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #444444",
          marginTop: 48,
          paddingTop: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 12,
            color: "#666666",
          }}
        >
          © 2024 Little Lemon Restaurant. All rights reserved.
        </span>
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 10,
            color: "#555555",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Wireframe — No colors or final assets
        </span>
      </div>
    </footer>
  );
}

/* ─── Reserve a Table page ─── */

function ReserveTablePage({ onBack }) {
  return (
    <div style={{ minHeight: "100vh", background: "#F7F7F7" }}>
      <nav
        style={{
          width: "100%",
          background: "#FFFFFF",
          borderBottom: "2px solid #CCCCCC",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 80px",
        }}
      >
        <ImagePlaceholder width={140} height={44} label="Logo" />
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {["Home", "About", "Menu", "Reservations", "Order Online"].map(
            (link) => (
              <span
                key={link}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  fontWeight: link === "Reservations" ? 700 : 500,
                  color: link === "Reservations" ? "#333333" : "#555555",
                  cursor: "default",
                  borderBottom:
                    link === "Reservations" ? "2px solid #555555" : "none",
                  paddingBottom: 2,
                }}
              >
                {link}
              </span>
            ),
          )}
          <WfButton small>Login</WfButton>
        </div>
      </nav>

      <div style={{ padding: "64px 80px", maxWidth: 1000, margin: "0 auto" }}>
        <SectionLabel>Reservations Page</SectionLabel>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 40,
            fontWeight: 700,
            color: "#333333",
            marginTop: 8,
            marginBottom: 8,
          }}
        >
          Reserve a Table
        </h1>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 15,
            color: "#888888",
            marginBottom: 48,
          }}
        >
          Book your dining experience at Little Lemon, Chicago
        </p>

        {/* Step indicators */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 0,
            marginBottom: 48,
          }}
        >
          {["Select Date & Time", "Party Details", "Confirm"].map((step, i) => (
            <div key={step} style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: i === 0 ? "#555555" : "#DDDDDD",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-sans)",
                    fontSize: 12,
                    fontWeight: 700,
                    color: i === 0 ? "#FFFFFF" : "#888888",
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 13,
                    fontWeight: i === 0 ? 600 : 400,
                    color: i === 0 ? "#333333" : "#AAAAAA",
                    whiteSpace: "nowrap",
                  }}
                >
                  {step}
                </span>
              </div>
              {i < 2 && (
                <div
                  style={{
                    width: 40,
                    height: 1,
                    background: "#CCCCCC",
                    margin: "0 12px",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Form */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 32,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { label: "Date", type: "Date picker" },
              { label: "Time", type: "Dropdown" },
              { label: "Number of Guests", type: "Stepper" },
              { label: "Occasion", type: "Dropdown" },
            ].map((field) => (
              <div key={field.label}>
                <label
                  style={{
                    display: "block",
                    fontFamily: "var(--font-sans)",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#555555",
                    marginBottom: 6,
                    letterSpacing: "0.04em",
                  }}
                >
                  {field.label}
                </label>
                <div
                  style={{
                    width: "100%",
                    height: 44,
                    background: "#FFFFFF",
                    border: "1.5px solid #CCCCCC",
                    borderRadius: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 14px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 12,
                      color: "#AAAAAA",
                      fontStyle: "italic",
                    }}
                  >
                    [{field.type}]
                  </span>
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path
                      d="M1 1L6 6L11 1"
                      stroke="#AAAAAA"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>
            ))}

            <div>
              <label
                style={{
                  display: "block",
                  fontFamily: "var(--font-sans)",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#555555",
                  marginBottom: 6,
                  letterSpacing: "0.04em",
                }}
              >
                Special Requests
              </label>
              <div
                style={{
                  width: "100%",
                  height: 100,
                  background: "#FFFFFF",
                  border: "1.5px solid #CCCCCC",
                  borderRadius: 3,
                  padding: "10px 14px",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 12,
                    color: "#AAAAAA",
                    fontStyle: "italic",
                  }}
                >
                  [Text area — optional]
                </span>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Availability preview */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1.5px solid #CCCCCC",
                borderRadius: 4,
                padding: "24px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#333333",
                  marginBottom: 16,
                }}
              >
                Available Times
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {[
                  "5:00 PM",
                  "5:30 PM",
                  "6:00 PM",
                  "6:30 PM",
                  "7:00 PM",
                  "7:30 PM",
                  "8:00 PM",
                  "8:30 PM",
                ].map((time, i) => (
                  <div
                    key={time}
                    style={{
                      padding: "6px 14px",
                      border: "1.5px solid",
                      borderColor: i === 2 ? "#555555" : "#CCCCCC",
                      background: i === 2 ? "#555555" : "#FFFFFF",
                      borderRadius: 3,
                      fontFamily: "var(--font-sans)",
                      fontSize: 12,
                      fontWeight: 500,
                      color: i === 2 ? "#FFFFFF" : "#555555",
                      cursor: "default",
                    }}
                  >
                    {time}
                  </div>
                ))}
              </div>
            </div>

            {/* Booking summary */}
            <div
              style={{
                background: "#F0F0F0",
                border: "1.5px dashed #CCCCCC",
                borderRadius: 4,
                padding: "24px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#333333",
                  marginBottom: 16,
                }}
              >
                Booking Summary
              </p>
              {[
                ["Restaurant", "Little Lemon"],
                ["Date", "— Select date —"],
                ["Time", "6:00 PM (selected)"],
                ["Guests", "—"],
                ["Occasion", "—"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "8px 0",
                    borderBottom: "1px solid #CCCCCC",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 12,
                      color: "#888888",
                    }}
                  >
                    {k}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#444444",
                    }}
                  >
                    {v}
                  </span>
                </div>
              ))}
            </div>

            <WfButton>Confirm Reservation →</WfButton>
          </div>
        </div>

        <button
          onClick={onBack}
          style={{
            marginTop: 40,
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            color: "#888888",
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 6,
            textDecoration: "underline",
          }}
        >
          ← Back to Home
        </button>
      </div>

      <Footer />
    </div>
  );
}

/* ─── Wireframe legend ─── */

function Legend() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        background: "#FFFFFF",
        border: "1.5px solid #CCCCCC",
        borderRadius: 4,
        padding: "14px 18px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
        zIndex: 100,
        minWidth: 220,
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#888888",
          marginBottom: 10,
        }}
      >
        Wireframe Key
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {[
          {
            swatch: { background: "#D4D4D4", border: "1px solid #AAAAAA" },
            label: "Image placeholder",
          },
          { swatch: { background: "#D4D4D4" }, label: "Text placeholder bar" },
          {
            swatch: { background: "#F0F0F0", border: "1.5px dashed #CCCCCC" },
            label: "Content TBD block",
          },
          { swatch: { background: "#555555" }, label: "Button / interactive" },
        ].map(({ swatch, label }) => (
          <div
            key={label}
            style={{ display: "flex", alignItems: "center", gap: 10 }}
          >
            <div
              style={{
                width: 20,
                height: 14,
                borderRadius: 2,
                flexShrink: 0,
                ...swatch,
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 11,
                color: "#666666",
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── App shell ─── */

export default function App() {
  const [page, setPage] = (useState < "home") | ("reserve" > "home");

  if (page === "reserve") {
    return (
      <>
        <ReserveTablePage onBack={() => setPage("home")} />
        <Legend />
      </>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F7F7F7",
        fontFamily: "var(--font-sans)",
      }}
    >
      {/* Page title bar */}
      <div
        style={{
          background: "#222222",
          padding: "8px 80px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 11,
            fontWeight: 600,
            color: "#AAAAAA",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Little Lemon — Homepage Wireframe · 1440px · 12-col Grid
        </span>
        <button
          onClick={() => setPage("reserve")}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 11,
            fontWeight: 600,
            color: "#AAAAAA",
            background: "none",
            border: "1px solid #444444",
            borderRadius: 3,
            padding: "4px 12px",
            cursor: "pointer",
            letterSpacing: "0.06em",
          }}
        >
          View: Reserve a Table page →
        </button>
      </div>

      {/* 12-column grid overlay indicator */}
      <div
        style={{
          position: "relative",
          pointerEvents: "none",
          height: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 80,
            right: 80,
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: 16,
            opacity: 0.04,
          }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              style={{
                height: 2900,
                background: "#0000FF",
              }}
            />
          ))}
        </div>
      </div>

      <Navbar />
      <HeroSection />
      <HighlightsSection />
      <TestimonialsSection />
      <AboutSection />
      <Footer />
      <Legend />
    </div>
  );
}
