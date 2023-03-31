// // from activity 21.28
// const { AuthenticationError } = require('apollo-server-express');
// const { User, Cause, Category } = require('../models');
// const { signToken } = require('../utils/auth');

const { createUser, login } = require('../controllers/users');
const { createCause, getAllCauses } = require('../controllers/causes');

const resolvers = {
  Query: {
    // <name>: <controller>
    users: async () => {
      return User.find();
    },
    user: async (parent, { email }) => {
      return User.findOne({ _id: userId });
    },
    causes: async () => {
      return User.find();
    },
    cause: async (parent, { causeId }) => {
      return User.findOne({ _id: causeId });
    },
    // by adding context to our query, we can retrieve the logged in user without specifically searching for them - use to edit and delete their own cause page
    me: async (parent, args, context) => {
      if (context.user) {
        // should i be looking for user._id or cause._id?
        return Cause.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    categories: async () => {
      return User.find();
    },
    category: async (parent, { categoryId }) => {
      return User.findOne({ _id: categoryId });
    }
  },
  Mutation: {
    createUser: createUser,
    login: login,
    createCause: createCause,

   
  
    editCause: async (parent, args, context) => {
      if (context.cause) {
        return await Cause.findOneAndUpdate(
          { _id: context.cause._id },
          { $push: args },
          { new: true, runValidators: true }
        );
      }
      throw new AuthenticationError('Not logged in');
    },



    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },




    createCause: createCause,
    editCause: async (parent, {
      name, description,
      address,
      contactName,
      categoryId,
      websiteLink }, context) => { },
    deleteCause: async (parent, { causeId }, context) => { },
  },
};

module.exports = resolvers;