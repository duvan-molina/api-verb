import loadVerb from "../../mockup/data";

interface Verb {
  id: any;
}

export const resolvers = {
  Query: {
    verbs: () => loadVerb(),
    verb: (_: any, arg: Verb) => {
      const allVerb = loadVerb();
      const verb = allVerb.filter((item) => item.id === parseInt(arg.id));
      return verb[0];
    },
  },
};
