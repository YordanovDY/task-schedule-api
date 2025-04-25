import mongoose from 'mongoose';
import 'dotenv/config';

const { DATABASE_URI } = process.env;

export default async function databaseInit(): Promise<void> {
    try {
        await mongoose.connect(DATABASE_URI as string);
        console.log('DB Connected Successfully.');

    } catch (err) {
        if (err instanceof Error) {
            console.error('Cannot connect to DB:\n' + err.message);

        } else {
            console.error('Cannot connect to DB:\n' + err);
        }
    }
}