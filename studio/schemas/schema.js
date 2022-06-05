import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";
import blockContent from "./blockContent";
import contact from "./contact";
import experience from "./experience";
import portfolio from "./portfolio";
import project from "./project";
import section from "./section";
import tech from "./tech";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    blockContent,
    contact,
    experience,
    portfolio,
    project,
    section,
    tech,
  ]),
});
