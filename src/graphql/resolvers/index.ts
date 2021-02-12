import loadVerb from "../../mockup/data";

export const resolvers = {
  Query: {
    verbs: () => loadVerb(),
  },
};
