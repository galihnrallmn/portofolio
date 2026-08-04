import { KEYBOARD_KEYS } from "./constants";

export const isTabKey = (event: KeyboardEvent) =>
  event.key === KEYBOARD_KEYS.TAB;

export const isEnterKey = (event: KeyboardEvent) =>
  event.key === KEYBOARD_KEYS.ENTER;

export const isEscapeKey = (event: KeyboardEvent) =>
  event.key === KEYBOARD_KEYS.ESCAPE;

export const isSpaceKey = (event: KeyboardEvent) =>
  event.key === KEYBOARD_KEYS.SPACE;

export const isArrowUpKey = (event: KeyboardEvent) =>
  event.key === KEYBOARD_KEYS.ARROW_UP;

export const isArrowDownKey = (event: KeyboardEvent) =>
  event.key === KEYBOARD_KEYS.ARROW_DOWN;

export const isArrowLeftKey = (event: KeyboardEvent) =>
  event.key === KEYBOARD_KEYS.ARROW_LEFT;

export const isArrowRightKey = (event: KeyboardEvent) =>
  event.key === KEYBOARD_KEYS.ARROW_RIGHT;

export const isHomeKey = (event: KeyboardEvent) =>
  event.key === KEYBOARD_KEYS.HOME;

export const isEndKey = (event: KeyboardEvent) =>
  event.key === KEYBOARD_KEYS.END;
