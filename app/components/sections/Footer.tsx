"use client";

export default function Footer() {
  return (
    <footer
      className="py-8 px-6 text-center transition-colors duration-300"
      style={{
        borderTop: `1px solid var(--border-color)`,
        background: "var(--bg-primary)",
      }}
    >
      <p className="text-sm" style={{ color: "var(--text-muted)" }}>
        &copy; {new Date().getFullYear()} Adel Mostafa · Currently shipping
        Colada &amp; writing about offline sync patterns.
      </p>
    </footer>
  );
}
