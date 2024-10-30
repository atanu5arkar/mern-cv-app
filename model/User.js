import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    skills: [
        {
            tag: {
                type: String,
                required: true
            },
            level: {
                type: Number,
                required: true
            }
        }
    ],
    languages: [
        {
            tag: {
                type: String,
                required: true
            },
            level: {
                type: Number,
                required: true
            }
        }
    ],
    jobs: [
        {
            title: {
                type: String,
                required: true
            },
            'start_date': {
                type: String,
                required: true
            },
            'end_date': {
                type: String,
                default: null
            },
            description: {
                type: String,
                required: true
            }
        }
    ],
    education: [
        {
            institution: {
                type: String,
                required: true
            },
            'start_date': {
                type: String,
                required: true
            },
            'end_date': {
                type: String,
                required: true
            },
            degree: {
                type: String,
                required: true
            }
        }
    ]
});

const UserModel = mongoose.model('user', userSchema, 'cv-users');

export default UserModel;