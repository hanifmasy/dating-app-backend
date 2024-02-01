import mongoose, { Document, Schema, model, Model, DocumentQuery } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  likes: string[];
  passes: string[];
  isPremium: boolean;
  premiumFeatures: string[];
  settings: Record<string, any>;
}

interface IUserModel extends Model<IUser> {
  findOneByUsername(username: string): DocumentQuery<IUser | null, IUser, {}>;
  findByIdWithLikesAndPasses(id: string): DocumentQuery<IUser | null, IUser, {}>;
  findPremiumUsers(): DocumentQuery<IUser[], IUser, {}>;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  likes: [{ type: String }],
  passes: [{ type: String }],
  isPremium: { type: Boolean, default: false },
  premiumFeatures: [{ type: String }],
  settings: { type: Schema.Types.Mixed },
});

class UserClass {
  // Constructor
  constructor(user: IUser) {
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.likes = user.likes || [];
    this.passes = user.passes || [];
    this.isPremium = user.isPremium || false;
    this.premiumFeatures = user.premiumFeatures || [];
    this.settings = user.settings || {};
  }

  // Additional methods
  static findOneByUsername(username: string): DocumentQuery<IUser | null, IUser, {}> {
    return this.findOne({ username });
  }

  static findByIdWithLikesAndPasses(id: string): DocumentQuery<IUser | null, IUser, {}> {
    return this.findById(id).select('likes passes');
  }

  static findPremiumUsers(): DocumentQuery<IUser[], IUser, {}> {
    return this.find({ isPremium: true });
  }
}

userSchema.loadClass(UserClass);

const User = model<IUser, IUserModel>('User', userSchema);

export { User };
