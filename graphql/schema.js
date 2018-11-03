const graphql = require('graphql');
const PaintingType = require('./PaintingType');
const Painting = require('../models/Painting');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
} = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    painting: {
      type: PaintingType,
      args: { id: { type: GraphQLString }},
      resolve(parents, args) {
        return Painting.findById(args.id);
      },
    },
    paintings: {
      type: PaintingType,
      resolve: async (parents, args) => {
        const g = await Painting.find({}).toArray();
        return g;
      }
    }
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
