import { getDashboardInfo } from '../services/dashboard.js';

export const getDashboardInfoController = async (req, res) => {
  try {
    const dashboardInfo = await getDashboardInfo(req.user._id);
    res.json({
      status: 200,
      message: 'Dashboard info retrieved successfully!',
      data: dashboardInfo,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};
