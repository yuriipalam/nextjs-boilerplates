import { Button } from "@/ui";

interface ProductCardProps {}

export function ProductCard(props: ProductCardProps) {
  return (
    <div className="h-5 border-2 border-black px-4 py-5">
      <Button className="text-xl font-bold">Hello, World!</Button>
    </div>
  );
}
