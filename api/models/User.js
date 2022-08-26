import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true }
)

export default mongoose.model("User", UserSchema)