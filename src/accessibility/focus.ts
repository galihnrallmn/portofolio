import { FOCUSABLE_SELECTORS } from "./constants";

export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS),
  ).filter((element) => {
    return !element.hasAttribute("disabled") && element.tabIndex !== -1;
  });
}

export function focusFirstElement(container: HTMLElement) {
  const elements = getFocusableElements(container);

  elements[0]?.focus();
}

export function focusLastElement(container: HTMLElement) {
  const elements = getFocusableElements(container);

  elements[elements.length - 1]?.focus();
}

export function focusNextElement(container: HTMLElement, current: HTMLElement) {
  const elements = getFocusableElements(container);

  const index = elements.indexOf(current);

  elements[(index + 1) % elements.length]?.focus();
}

export function focusPreviousElement(
  container: HTMLElement,
  current: HTMLElement,
) {
  const elements = getFocusableElements(container);

  const index = elements.indexOf(current);

  elements[(index - 1 + elements.length) % elements.length]?.focus();
}
