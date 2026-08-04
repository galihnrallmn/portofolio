import { useCallback, useRef, type DependencyList } from "react";

export default function useStableCallback<
  TArgs extends readonly unknown[],
  TResult,
>(callback: (...args: TArgs) => TResult, deps: DependencyList) {
  const ref = useRef(callback);

  ref.current = callback;

  return useCallback((...args: TArgs) => ref.current(...args), deps);
}
