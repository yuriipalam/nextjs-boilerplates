import { Metadata } from "next";

import { ExamplesNav } from "./examples-nav";

export const metadata: Metadata = {
  title: "Examples",
  description: "Check out some examples app built using the components."
};

interface ExamplesLayoutProps {
  children: React.ReactNode;
}

export default function ExamplesLayout({ children }: ExamplesLayoutProps) {
  return (
    <div className="container relative mx-auto p-10">
      <section>
        <ExamplesNav />
        <div className="overflow-hidden rounded-[0.5rem] border bg-background px-2 shadow">
          {children}
        </div>
      </section>
    </div>
  );
}
