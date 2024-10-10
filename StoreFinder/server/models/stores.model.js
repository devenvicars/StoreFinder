// TODO storeNumber is redundant. Ask whether to use a required boolean warning or a minlength warning. 
import { model, Schema } from 'mongoose';
const StoreSchema = new Schema(
    {
        storeName: {
            type: String,
            required: [true, "Name field must not be left blank!"],
            minlength: [3, "Name must contain 3 characters!"]
        },

        storeNumber: {
            type: Number,
            required: [true, "Store number field must not be left blank!"],
            min: [1, "Must be a number greater than 0"]
        },

        isOpen: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

const Store = model("Store", StoreSchema);
export default Store;

