import { randomBytes } from 'crypto';
import bcrypt from 'bcrypt';
import createHttpError from 'http-errors';
import { SessionsCollection } from '../db/models/session.js';
import { UsersCollection } from '../db/models/user.js';
import { ONE_DAY } from '../constants/index.js';

const createSession = async (userId) => {
  await SessionsCollection.deleteOne({ userId });
  const accessToken = randomBytes(30).toString('base64');
  const session = await SessionsCollection.create({
    userId,
    accessToken,
    accessTokenValidUntil: new Date(Date.now() + ONE_DAY),
  });

  return accessToken;
};

export const registerUser = async (payload) => {
  const user = await UsersCollection.findOne({ email: payload.email });
  if (user) throw createHttpError(409, 'Email in use');

  const encryptedPassword = await bcrypt.hash(payload.password, 10);

  const newUser = await UsersCollection.create({
    ...payload,
    password: encryptedPassword,
  });

  const accessToken = await createSession(newUser._id);

  return { user: newUser, accessToken };
};

export const loginUser = async (payload) => {
  const user = await UsersCollection.findOne({ email: payload.email });
  if (!user) {
    throw createHttpError(404, 'User not found');
  }
  const isEqual = await bcrypt.compare(payload.password, user.password);

  if (!isEqual) {
    throw createHttpError(401, 'Unauthorized');
  }

  const accessToken = await createSession(user._id);

  return { user, accessToken };
};

export const logoutUser = async (sessionId) => {
  await SessionsCollection.deleteOne({ _id: sessionId });
};

export const getUserInfo = async (userId) => {
  const user = await UsersCollection.findById(userId, 'name email');
  if (!user) {
    throw new createHttpError(404, 'User not found');
  }
  return user;
};
