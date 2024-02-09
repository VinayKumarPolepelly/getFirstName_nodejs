const peoplename = require("../country/state/city/index");
const firstname = require("../utilities/utils/index");

const getPeopleInCity = (peoplename) => {
  return firstname(peoplename);
};

module.exports = getPeopleInCity;
