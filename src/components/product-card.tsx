import { Button } from "@/ui";

interface ProductCardProps {}

export function ProductCard(props: ProductCardProps) {
  return (
    <div className="border-2 border-black px-4 py-5 hover:opacity-75">
      <Button className="text-xl font-bold">Hello, World!</Button>
    </div>
  );
}
