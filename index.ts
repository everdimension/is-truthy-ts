export function isTruthy<T>(t: T | undefined | null | void): t is T {
  return t != null;
}
