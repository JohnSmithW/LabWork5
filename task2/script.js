function isArrayEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.lengh != b.length) return false;
  for (let i = 0; i < a.lengh; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}