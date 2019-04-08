const handleError = require("../../_helpers/errorHandler");

const testData = [
  {
    from: "Moscow",
    to: "Piter",
    timeFrom: "2019-04-05 14:02:06",
    timeTo: "2019-05-05 16:20:10"
  },
  {
    from: "Смоленск",
    to: "Москва",
    timeFrom: "2019-04-15 14:02:06",
    timeTo: "2019-04-15 16:20:10"
  },
  {
    from: "Южносахалинск",
    to: "Владивосток",
    timeFrom: "2019-04-15 19:02:06",
    timeTo: "2019-04-15 20:20:10"
  },
  {
    from: "Хабаровск",
    to: "Владивосток",
    timeFrom: "2019-04-11 14:02:06",
    timeTo: "2019-04-11 16:20:10"
  },
  {
    from: "Хабаровск",
    to: "Владивосток",
    timeFrom: "2019-04-11 10:02:06",
    timeTo: "2019-04-11 12:20:10"
  },
  {
    from: "Хабаровск",
    to: "Владивосток",
    timeFrom: "2019-04-11 23:02:06",
    timeTo: "2019-04-12 01:20:10"
  }
];

module.exports = {
  getAll: async (req, res) => {
    res.status(200).send(testData);
  },
  getShedule: async (req, res) => {
    let timeReq = new Date(req.params.date);
    console.log(timeReq.getTime());
    let findData = [];
    testData.forEach(item => {
      let itemDate = new Date(item.timeFrom);
      itemDate.setHours(0);
      itemDate.setMinutes(0);
      if (
        timeReq.getTime() >= itemDate.getTime() &&
        timeReq.getTime() <= itemDate.getTime() + 86400000 &&
        req.params.from.toLowerCase() === item.from.toLowerCase() &&
        req.params.to.toLowerCase() === item.to.toLowerCase()
      ) {
        findData.push(item);
      }
    });
    res.status(200).send(findData);
  }
};
