export function scroll(direction, position, behavior) {
  window.scrollTo({
    [direction]: position,
    behavior: behavior,
  });
}
