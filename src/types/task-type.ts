import { Document } from "mongoose";

type Category = 'Planning' | 'Implementation' | 'Problem Solving' | 'Testing' | 'Deployment' | 'Documentation'
    | 'Learning' | 'Meeting' | 'Other';

type Status = 'Pending' | 'In Progress' | 'Completed'

type Priority = 'Low' | 'Medium' | 'High' | 'Critical';

export interface ITask extends Document {
    date: Date;
    category: Category;
    status: Status;
    priority: Priority;
    description: string;
}