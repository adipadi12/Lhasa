const TibetanDivider = ({ symbol = "✦" }: { symbol?: string }) => {
  return (
    <div className="tibetan-divider" aria-hidden="true">
      <span style={{ color: "var(--saffron)", fontSize: "14px" }}>{symbol}</span>
    </div>
  );
};

export default TibetanDivider;
