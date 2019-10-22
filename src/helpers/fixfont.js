export function fixFont(string) {
  let stringForFont = string.replace(/[éèÉÈ]/g, function($1) {
    if ($1 === "é" || $1 === "è") {
      return $1 === "é" ? "è" : "é";
    } else if ($1 === "É" || $1 === "È") {
      return $1 === "É" ? "È" : "É";
    }
  });
  return stringForFont;
}

export function firstLetterUppercase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
