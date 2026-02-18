import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },

  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "images",
    },
  },

  schema: {
    collections: [
      {
        name: "project",
        label: "Projects",
        path: "content",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
            isTitle: true,
          },
          {
            type: "string",
            name: "client",
            label: "Client",
            required: true,
          },
          {
            type: "string",
            name: "role",
            label: "Role",
            required: true,
          },
          {
            type: "string",
            name: "skills",
            label: "Skills",
            list: true,
          },
          {
            type: "string",
            name: "year",
            label: "Year",
            required: true,
          },
          {
            type: "image",
            name: "cover",
            label: "Cover Image",
            required: true,
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured",
          },
          {
            type: "number",
            name: "order",
            label: "Display Order",
            required: true,
          },
          {
            type: "boolean",
            name: "comingSoon",
            label: "Coming Soon",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      {
        name: "hero",
        label: "Hero Section",
        path: "content/pages",
        format: "json",
        match: {
          include: "hero",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "label",
            label: "Label (above name)",
            required: true,
          },
          {
            type: "string",
            name: "name",
            label: "Name",
            required: true,
            isTitle: true,
          },
          {
            type: "string",
            name: "tagline",
            label: "Tagline",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "ctaPrimaryText",
            label: "Primary CTA Text",
          },
          {
            type: "string",
            name: "ctaSecondaryText",
            label: "Secondary CTA Text",
          },
          {
            type: "image",
            name: "posterImage",
            label: "Poster Image",
          },
          {
            type: "string",
            name: "videoSrc",
            label: "Background Video Path",
          },
        ],
      },

      {
        name: "about",
        label: "About Page",
        path: "content/pages",
        format: "json",
        match: {
          include: "about",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Page Title",
            required: true,
            isTitle: true,
          },
          {
            type: "string",
            name: "heading",
            label: "Heading",
            required: true,
          },
          {
            type: "string",
            name: "headingAccent",
            label: "Heading Accent Text",
          },
          {
            type: "string",
            name: "bioParagraphs",
            label: "Bio Paragraphs",
            list: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "timeline",
            label: "Career Timeline",
            list: true,
            fields: [
              {
                type: "string",
                name: "company",
                label: "Company",
                required: true,
              },
              {
                type: "string",
                name: "role",
                label: "Role",
                required: true,
              },
              {
                type: "string",
                name: "period",
                label: "Period",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "skills",
            label: "Skills & Expertise",
            list: true,
            fields: [
              {
                type: "string",
                name: "category",
                label: "Category",
                required: true,
              },
              {
                type: "string",
                name: "items",
                label: "Items",
                list: true,
              },
            ],
          },
          {
            type: "string",
            name: "ctaHeading",
            label: "CTA Heading",
          },
          {
            type: "string",
            name: "ctaDescription",
            label: "CTA Description",
          },
        ],
      },

      {
        name: "contact",
        label: "Contact Page",
        path: "content/pages",
        format: "json",
        match: {
          include: "contact",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Page Title",
            required: true,
            isTitle: true,
          },
          {
            type: "string",
            name: "heading",
            label: "Heading",
            required: true,
          },
          {
            type: "string",
            name: "headingAccent",
            label: "Heading Accent Text",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "email",
            label: "Email Address",
            required: true,
          },
          {
            type: "string",
            name: "linkedinUrl",
            label: "LinkedIn URL",
          },
          {
            type: "string",
            name: "linkedinLabel",
            label: "LinkedIn Display Label",
          },
          {
            type: "string",
            name: "locationText",
            label: "Location Text",
            ui: {
              component: "textarea",
            },
          },
        ],
      },

      {
        name: "footer",
        label: "Footer",
        path: "content/global",
        format: "json",
        match: {
          include: "footer",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
            isTitle: true,
          },
          {
            type: "string",
            name: "bio",
            label: "Bio Text",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "copyrightName",
            label: "Copyright Name",
          },
          {
            type: "string",
            name: "tagline",
            label: "Tagline",
          },
          {
            type: "object",
            name: "socialLinks",
            label: "Social Links",
            list: true,
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label",
                required: true,
              },
              {
                type: "string",
                name: "href",
                label: "URL",
                required: true,
              },
              {
                type: "string",
                name: "icon",
                label: "Icon Type",
                options: ["linkedin", "email"],
              },
            ],
          },
        ],
      },
    ],
  },
});
