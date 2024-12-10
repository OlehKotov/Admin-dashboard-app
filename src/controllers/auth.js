import { ONE_DAY } from '../constants/index.js';
import { getUserInfo, registerUser } from '../services/auth.js';
import { loginUser } from '../services/auth.js';
import { logoutUser } from '../services/auth.js';

export const registerUserController = async (req, res) => {
  const user = await registerUser(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: user,
  });
};

export const loginUserController = async (req, res) => {
    const session = await loginUser(req.body);

    res.cookie('sessionId', session._id, {
      httpOnly: true,
      expires: new Date(Date.now() + ONE_DAY),
    });

    res.json({
      status: 200,
      message: 'Successfully logged in an user!',
      data: {
        user: {
          _id: session.user._id,
          name: session.user.name,
          email: session.user.email,
        },
        accessToken: session.accessToken,
      },
    });
  };

  export const logoutUserController = async (req, res) => {
    if (req.cookies.sessionId) {
      await logoutUser(req.cookies.sessionId);
    }

    res.clearCookie('sessionId');

    res.status(204).send();
  };

  export const getUserInfoController = async (req, res) => {
    const userInfo = await getUserInfo(req.user._id);

    res.json({
      status: 200,
      message: 'User info retrieved successfully!',
      data: userInfo,
    });
  };
