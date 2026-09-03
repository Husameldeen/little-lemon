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
  return (
    <section
      style={{
        width: "100%",
        background: "#FFFFFF",
        marginTop: 60,
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
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 30,
          // overflowX: "auto",
          paddingBottom: 12,
          // scrollbarWidth: "none",
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
        {/* Scroll indicator */}
        <div
          style={{
            minWidth: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#AAAAAA",
            fontSize: 24,
            cursor: "pointer",
          }}
        >
          ›
        </div>
      </div>
    </section>
  );
}
