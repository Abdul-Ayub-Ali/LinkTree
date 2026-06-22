import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { USER_ROLES } from '../constants/index.js';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
      unique: true,
      trim: true,
      lowercase: true,
      index: true 
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      required: function () {
        return !this.isGoogleUser; 
      }
    },
    fullName: {
      type: String,
      required: [true, 'Full Name is required'],
      trim: true
    },
    avatar: {
      type: String,
      default: ''
    },
    role: {
      type: String,
      enum: Object.values(USER_ROLES),
      default: USER_ROLES.USER_FREE
    },
    refreshToken: {
      type: String,
      default: null
    },
    isGoogleUser: {
      type: Boolean,
      default: false
    },
    googleId: {
      type: String,
      default: null
    }
  },
  {
    timestamps: true 
  }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});
 
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);
export default User;