export default {
  name: "experience",
  title: "Experience",
  type: "object",
  fields: [
    {
      name: "type",
      title: "Type",
      type: "string",
      initialValue: "Work",
      options: {
        list: ["Work", "Education"],
      },
    },
    {
      name: "where",
      title: "Where",
      type: "string",
    },
    {
      name: "when",
      title: "When",
      type: "string",
    },
    {
      name: "what",
      title: "What",
      type: "section",
    },
  ],
  preview: {
    select: {
      where: "where",
      when: "when",
      subtitle: "what.title",
    },
    prepare: ({ where, when, subtitle }) => {
      return {
        title: `${where} - ${when}`,
        subtitle,
      };
    },
  },
};
