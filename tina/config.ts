import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "c84a92c1-42eb-4f0f-9337-7d18745e827d", // Get this from tina.io
  token: "cd396ea827d57473fe11eac26e32103126fdcc29", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "categories",
        label: "Categories",
        path: "content/categories",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: 'string',
            name: 'slug',
            label: 'Slug',
            required: true,
          },
        ],
      },
      {
        name: "post",
        label: "Post",
        path: "content/post",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Created At',
            required: true,
          },
          {
            type: 'string',
            name: 'Categories',
            label: 'categories',
            description: 'Categories for this post',
            list: true,
            ui: {
              component: 'tags',
            }
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            description: 'Tags for this post',
            list: true,
            ui: {
              component: 'tags',
            }
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
