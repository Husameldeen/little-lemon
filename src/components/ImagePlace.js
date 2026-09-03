export default function ImagePlace({ src, width, height }) {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        display: "block",
        alignItems: "center",
        justifyContent: "center",
        width,
        height,
        // borderRadius: "16px 16px 0 0",
      }}
    >
      <img
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
        src={src}
        alt="food"
      />
    </div>
  );
}
