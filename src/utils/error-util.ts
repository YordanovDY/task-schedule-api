import mongoose from "mongoose";

export const getValidationError = (err: unknown): string | null => {
    if (err instanceof mongoose.Error.ValidationError) {
        const error = Object.values(err.errors)[0];
        return error.message;
    }

    return null;
}