import fs from "fs";

interface Verb {
  id: any;
}

const verbs = JSON.parse(fs.readFileSync("src/mockup/data.json", "utf-8"));

export const resolvers = {
  Query: {
    verbs: () => verbs,
    verb: (_: any, arg: Verb) => {
      const verb = verbs.filter((item: any) => item.id === parseInt(arg.id));
      return verb[0];
    },
  },

  Mutation: {
    createVerb: (__: any, arg: any) => {
      const newVerb = {
        id: verbs.length + 1,
        name: arg.name,
        definition: arg.definition,
      };
      verbs.push(newVerb);
      const json_verbs = JSON.stringify(verbs);
      fs.writeFileSync("src/mockup/data.json", json_verbs);
      return newVerb;
    },
  },
};
