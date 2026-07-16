export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(isoDate, options) {
  return new Date(isoDate).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    ...options,
  });
}

export function formatDateShort(isoDate) {
  return new Date(isoDate).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}
