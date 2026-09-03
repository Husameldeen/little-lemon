import { useRef } from "react";
import Button from "./Button";
import ImagePlace from "./ImagePlace";

const specials = [
  {
    name: "Greek Salad",
    price: "$12.99",
    desc: "the famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    src: "greek-salad.jpg",
  },
  {
    name: "Bruschetta",
    price: "$5.99",
    desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil",
    src: "bruchetta.svg",
  },
  {
    name: "Lemon Dessert",
    price: "$5.00",
    desc: "this comes stright from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    src: "lemon-dessert.jpg",
  },
  // { name: "Grilled Fish", price: "$18.00", desc: "Daily catch with herbs" },
];

export default function HighlightsSection() {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  return (
    <section
      style={{
        // width: "100%",
        background: "#FFFFFF",
        position: "relative",
        // margin: "0 auto",
        marginTop: 100,
        padding: "0 13%",
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
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 34,
              fontWeight: 700,
              color: "var(--color-highlight-2)",
            }}
          >
            This Week's Specials!
          </h2>
        </div>
        <Button
          color="var(--color-highlight-2)"
          bgColor="var(--color-primary-1)"
        >
          Online Menu
        </Button>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="hide-scrollbar"
        style={{
          display: "flex",
          gap: 40,
          overflowX: "auto",
          paddingBottom: 16,
          // Hide scrollbar
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          // Nice scrolling
          scrollBehavior: "smooth",
          scrollSnapType: "x mandatory",
        }}
      >
        {specials.map((item) => (
          <div
            key={item.name}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gridTemplateRows: "1fr 1fr",
              minWidth: 260,
              background: "#F5F5F5",
              borderRadius: "16px 16px 0 0",
              overflow: "hidden",
              flexShrink: 0,
              // Snap cards into position
              scrollSnapAlign: "start",
              // Slight hover effect
              transition: "transform 0.25s ease",
            }}
          >
            <ImagePlace src={item.src} width={"100%"} height={"100%"} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "16px 16px 20px",
              }}
            >
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
                    fontFamily: "var(--font-text)",
                    fontSize: 22,
                    fontWeight: "bold",
                    color: "var(--color-highlight-2)",
                  }}
                >
                  {item.name}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-text)",
                    fontSize: 20,
                    fontWeight: 600,
                    color: "var(--color-second-1)",
                  }}
                >
                  {item.price}
                </span>
              </div>
              <div
                style={{
                  // display: "flex",
                  // flexDirection: "column",
                  maxWidth: "20vw",
                  gap: 8,
                  marginBottom: 32,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-text)",
                    fontSize: 18,
                    fontWeight: 500,
                    color: "var(--color-primary-2)",
                    marginBottom: 20,
                    whiteSpace: "wrap",
                  }}
                >
                  {item.desc}
                </p>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-text)",
                  fontSize: 20,
                  fontWeight: 600,
                  color: "var(--color-highlight-2)",
                  display: "flex",
                  alignItems: "center",
                  marginTop: "auto",
                  gap: 6,
                  cursor: "pointer",
                }}
              >
                Order a delivery <span style={{ fontSize: 20 }}>→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Scroll indicator */}
      <button
        onClick={scrollRight}
        style={{
          position: "absolute",
          right: "8%",
          top: "50%",
          transform: "translateY(-50%)",

          width: 44,
          height: 44,
          border: "none",
          borderRadius: "50%",

          background: "white",
          boxShadow: "0 4px 15px rgba(0,0,0,0.15)",

          fontSize: 28,
          cursor: "pointer",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        &rarr;
      </button>
      <button
        onClick={scrollLeft}
        style={{
          position: "absolute",
          left: "8%",
          top: "50%",
          transform: "translateY(-50%)",

          width: 44,
          height: 44,
          border: "none",
          borderRadius: "50%",

          background: "white",
          boxShadow: "0 4px 15px rgba(0,0,0,0.15)",

          fontSize: 28,
          cursor: "pointer",
          zIndex: 2,
        }}
      >
        &larr;
      </button>
    </section>
  );
}
