export default {
  name: "project",
  title: "Project",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "urls",
      title: "Urls",
      type: "array",
      of: [{ type: "url" }],
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "technology",
      title: "Technology",
      type: "blockContent",
    },
    {
      name: "lessons",
      title: "Lessons Learned",
      type: "blockContent",
    },
  ],
};
