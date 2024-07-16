import { ProductCard } from "@/components";

export function Home() {
  return (
    <div className="mr-2 h-screen flex flex-col justify-center p-24">
      <h1 className="text-center m-auto">Hello World!</h1>
      <ProductCard />
    </div>
  );
}
