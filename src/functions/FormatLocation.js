function FormatLocation(slug) {
  const arraySlug = slug.split("");
  arraySlug.splice(0, 7);
  return arraySlug.join("");
}

export default FormatLocation;
