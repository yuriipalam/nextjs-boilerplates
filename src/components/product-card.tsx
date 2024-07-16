import { Button } from "@/ui";

interface ProductCardProps {}

export function ProductCard(props: ProductCardProps) {
  return (
    <div className="px-4 py-5 border-2 border-black h-5">
      <Button>Hello, World!</Button>
    </div>
  );
}
