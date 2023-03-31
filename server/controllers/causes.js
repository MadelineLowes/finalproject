const { CauseModel } = require('../models');

const createCause = async (parent, args, context) => {
    if (context.user){ // only logged in users
        const newCause = await CauseModel.create({
            name: args.causeInput.name,
            description: args.causeInput.description,
            headquarters: args.causeInput.headquarters,
            contactName: args.causeInput.contactName,
             // contact email linked is the one who creates the cause
            contactEmail: context.user.email,
            // contactEmail: args.causeInput.contactEmail,
            websiteLink: args.causeInput.websiteLink,
            category: args.causeInput.categoryId,
            // user linked is the one who creates the cause
            user: context.user._id,
        });
        // DO WE NEED TO UPDATE USER?
        // await User.findOneAndUpdate(
        //     { _id: context.user._id },
        //     { $addToSet: { causes: cause._id } },
        //   )
        return newCause;
    } else {
        throw new AuthenticationError('You are not authenticated');
    }
}

const getAllCauses = async () => {
    const causes = await CauseModel.find({}).populate("category").populate("user").exec();
    return causes;
};

const findCauseById = async () => {

};

const editCause = async (parent, args, context) => {
 if (context.user) {
    return await Cause.findOneAndUpdate(
        { _id: context.cause._id },
        { $push: args },
        { new: true, runValidators: true }
      );
    }
    throw new AuthenticationError('Not logged in');
};

const deleteCause = async () => {

};


const getCausesByCategory = async () => {

};


module.exports = { createCause, getAllCauses };
