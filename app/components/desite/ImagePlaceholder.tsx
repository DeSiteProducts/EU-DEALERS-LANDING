/* eslint-disable @next/next/no-img-element */

export function ImagePlaceholder({
  label,
  path,
  priority = false,
  tall = false,
}: {
  label: string;
  path: string;
  priority?: boolean;
  tall?: boolean;
}) {
  const isRealImage = path.startsWith("/images/");
  const isProductPhotoPlaceholder = label === "Product photos coming soon";

  if (isRealImage) {
    return (
      <figure
        className={`desite-image-frame ${tall ? "desite-image-frame-tall" : ""}`}
      >
        <img
          src={path}
          alt={label}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
        />
      </figure>
    );
  }

  return (
    <div
      className={`desite-placeholder ${tall ? "desite-placeholder-tall" : ""}`}
      role="img"
      aria-label={
        isProductPhotoPlaceholder ? label : `${label}. Visual asset coming soon.`
      }
    >
      <span className="placeholder-label">{label}</span>
      {isProductPhotoPlaceholder ? null : (
        <span className="placeholder-path">Visual asset coming soon</span>
      )}
    </div>
  );
}
