const controller = {};

controller.registerService = async (req, res, next) => {
  try {
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

controller.getAllService = async (req, res, next) => {
  try {
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

controller.getService = async (req, res, next) => {
  try {
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

controller.updateService = async (req, res, next) => {
  try {
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};
controller.deleteService = controller.registerService = async (req, res, next) => {
  try {
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};
module.exports = controller;
