const reply = {
  send: jest.fn().mockReturnThis(),
  code: jest.fn().mockReturnThis(),
};

const res = {};

module.exports = { res, reply };
