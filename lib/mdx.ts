import { compileMDX } from "next-mdx-remote/rsc";
import { type ReactElement } from "react";
import ImageGallery from "@/components/ImageGallery";

const mdxComponents = {
  ImageGallery,
  // Custom MDX components can be added here
};

export async function renderMDX(source: string): Promise<ReactElement> {
  const { content } = await compileMDX({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
    },
  });

  return content;
}
