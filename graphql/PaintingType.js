const grapql = require('graphql');
const { GraphQLObjectType, GraphQLString } = grapql;

const PaintingType = new GraphQLObjectType({
  name: 'Painting',
  fields: () => {
    return {
      id: { type: GraphQLString },
      name: { type: GraphQLString },
      url: { type: GraphQLString },
      technique: { type: GraphQLString },
    };
  },
});

module.exports = PaintingType;