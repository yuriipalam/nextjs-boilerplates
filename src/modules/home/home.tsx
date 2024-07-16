import { ProductCard } from "@/components";

export function Home() {
  return (
    <div className="mr-2 flex h-screen flex-col items-center justify-center p-24">
      <h1 className="text-center">Hello World!</h1>
      <ProductCard />
    </div>
  );
}
