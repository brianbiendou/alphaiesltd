import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "system-ui, sans-serif",
          background: "#f6efde",
          color: "#1a1a1a",
          display: "flex",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: 480 }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#b8924c",
              marginBottom: 16,
            }}
          >
            404
          </p>
          <h1 style={{ fontSize: 40, marginBottom: 16, lineHeight: 1.1 }}>
            Page not found.
          </h1>
          <p style={{ color: "#5e5e5e", marginBottom: 32 }}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/"
            style={{
              display: "inline-block",
              background: "#b8924c",
              color: "white",
              padding: "12px 24px",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Back home
          </Link>
        </div>
      </body>
    </html>
  );
}
