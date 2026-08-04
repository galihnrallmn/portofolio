import { Suspense, type ComponentType, type LazyExoticComponent } from "react";

interface LazyLoaderProps {
  component: LazyExoticComponent<ComponentType>;
}

export default function LazyLoader({ component: Component }: LazyLoaderProps) {
  return (
    <Suspense
      fallback={
        <div className="flex h-[400px] items-center justify-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
        </div>
      }
    >
      <Component />
    </Suspense>
  );
}
