
"use client";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";

const words = `We build beautiful products with the latest technologies and frameworks.
We are a team of passionate developers and designers that love to build
amazing products.
`;

export function TextGenerateEffectDemo() {
  return <div>

<TextGenerateEffect words={words} />
  </div>;
}
