export default {
  name: "tech",
  title: "Tech",
  type: "object",
  fields: [
    {
      name: "languages",
      title: "Languages",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "frameworks",
      title: "Frameworks",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "tools",
      title: "Tools",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
