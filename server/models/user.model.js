const mongoose = require('mongoose');
const bcrypt = require ('bcrypt');
const Schema = mongoose.Schema


const UserSchema = new mongoose.Schema({
    firstName: { 
        type: String,
        required: [true, "First name is required"],
        minlength: [3, "First name must be at least 3 characters long"]
    },
    lastName: { 
        type: String,
        required: [true, "Last name is required"],
        minlength: [2, "Last name must be at least 2 characters long"]
    },
    email: { 
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password: { 
        type: String,
        required: [true, "Password is required"],
        minlength: [7, "Password must be at least 7 characters"],
    },
    image: { 
        type: String
    },
    liked_stay:{
        type: Schema.Types.ObjectId,
        ref: "Stay"
    }
}, { timestamps: true });

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
        this.password = hash;
        next();
    });
});

UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Passwords do not match');
    }
    next();
});

UserSchema.virtual('confirmPassword')
    .get( () => this._confirmPassword )
    .set( value => this._confirmPassword = value );


module.exports.User = mongoose.model('User', UserSchema);