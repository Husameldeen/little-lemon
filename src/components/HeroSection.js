import Button from "./Button";

export default function HeroSection() {
  return (
    <section
      style={{
        width: "100%",
        background: "var(--color-primary-2)",
        padding: "30px 80px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 10,
        alignItems: "center",
        minHeight: 200,
      }}
    >
      <div>
        <div style={{ marginTop: 10 }}>
          <h1
            style={{
              fontFamily: "var(--font-head)",
              fontSize: 52,
              fontWeight: 700,
              color: "var(--color-primary-1)",
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
              color: "var(--color-highlight-1)",
              marginBottom: 10,
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
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 22,
                fontWeight: 500,
                color: "var(--color-highlight-1)",
                marginBottom: 20,
              }}
            >
              We are a family owned, Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
          </div>
          <Button
            color="var(--color-highlight-2)"
            bgColor="var(--color-primary-1)"
          >
            Reserve a Table
          </Button>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          overflow: "hidden",
          display: "flex",
          right: "5%",
          bottom: "20%",
          alignItems: "center",
          justifyContent: "center",
          width: "40vw",
          height: "400px",
          borderRadius: 16,
        }}
      >
        <img
          style={{
            objectFit: "cover",
            width: "100%",
          }}
          src="restauranfood.jpg"
          alt="food"
        />
      </div>
    </section>
  );
}
