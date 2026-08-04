import { memo, type ComponentType } from "react";

export function typedMemo<T extends ComponentType<object>>(component: T): T {
  return memo(component) as unknown as T;
}
