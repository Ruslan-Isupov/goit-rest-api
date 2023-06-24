const { Contact } = require("../../models");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, ...query } = req.query;

  const skip = (page - 1) * limit;
  const data = await Contact.find(
    { owner, ...query },
    "-createdAt -updatedAt",
    {
      skip,
      limit,
    }
  ).populate("owner", "email");

  console.log(data);
  res.json(data);
};

module.exports = getAll;
