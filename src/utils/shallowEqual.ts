export default function shallowEqual(
  objA: Record<string, unknown>,
  objB: Record<string, unknown>,
) {
  if (Object.is(objA, objB)) {
    return true;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (const key of keysA) {
    if (
      !Object.prototype.hasOwnProperty.call(objB, key) ||
      !Object.is(objA[key], objB[key])
    ) {
      return false;
    }
  }

  return true;
}
