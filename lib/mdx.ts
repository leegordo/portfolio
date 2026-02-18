import { compileMDX } from "next-mdx-remote/rsc";
import { type ReactElement } from "react";

const mdxComponents = {
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
