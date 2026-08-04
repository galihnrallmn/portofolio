import { Suspense, type ComponentType, type LazyExoticComponent } from "react";

import SectionLoader from "./SectionLoader";

interface Props {
  component: LazyExoticComponent<ComponentType>;
}

export default function LazySection({ component: Component }: Props) {
  return (
    <Suspense fallback={<SectionLoader />}>
      <Component />
    </Suspense>
  );
}
