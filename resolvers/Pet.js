import Owner from "../models/Owner.model.js";
import Pet from "../models/Pet.model.js";

export const resolvers = {
  Query: {
    getAllPets: async () => {
      try {
        const pets = await Pet.find({}).populate("owner");
        return {
          status: true,
          message: "Pets fetched successfully!",
          data: pets
        };
      } catch (error) {
        throw "An error ocurred!";
      }
    },

    getSinglePet: async (_, props) => {
      try {
        const { id } = props;
        const singlePet = await Pet.findOne({ _id: id }).populate("owner");
        if (!singlePet) {
          return {
            status: false,
            message: "Pets not found!",
            data: {}
          };
        }
        return {
          status: true,
          message: "Pets fetched successfully!",
          data: singlePet
        };
      } catch (error) {
        return "An error ocurred!";
      }
    }
  },

  Mutation: {
    createPet: async (_, props) => {
      try {
        const { name, species, breed, sheltered, color, owner } = props;
        const petWithNameExists = await Pet.findOne({ name });
        if (petWithNameExists) {
          return {
            status: false,
            message: "Pet already exists!"
          };
        }

        const petOwner = await Owner.create(owner);

        await Pet.create({
          name,
          species,
          breed,
          sheltered,
          color,
          owner: petOwner
        });

        return {
          status: true,
          message: "Pet was created successfully!"
        };
      } catch (error) {
        console.log("Could not create pet", { error });
      }
    },

    updatePetData: async (_, props) => {
      try {
        console.log(props);
        const petOwner = await Owner.findOne({ _id: props.owner });

        if (!petOwner) {
          return {
            status: false,
            message: "Owner Document Not Found!"
          };
        }

        const pet = await Pet.findOneAndUpdate({ _id: props.id }, props, {
          new: true
        });

        return {
          status: true,
          message: "Pet data updated successfully",
          data: pet
        };
      } catch (error) {
        console.log("Could not update pet data", { error });
      }
    },

    deletePetData: async (_, props) => {
      try {
        await Pet.findByIdAndDelete({ _id: props.id });
        return {
          status: true,
          message: "Pet data deleted!"
        };
      } catch (error) {
        return "Could not delete pet data";
      }
    }
  }
};
