export default {
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  fields: [
    {
      name: "fullName",
      title: "Full Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "fullName",
        maxLength: 96,
      },
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "photo",
      title: "Photo",
      type: "image",
    },
    {
      name: "background",
      title: "Background Image Url",
      type: "url",
    },
    {
      name: "header",
      title: "Header",
      type: "section",
    },
    {
      name: "bio",
      title: "Bio",
      type: "section",
    },
    {
      name: "experience",
      title: "Experience",
      type: "array",
      of: [{ type: "experience" }],
    },
    {
      name: "tech",
      title: "Tech",
      type: "tech",
    },
    {
      name: "projects",
      title: "Projects",
      type: "array",
      of: [{ type: "project" }],
    },
  ],
};
