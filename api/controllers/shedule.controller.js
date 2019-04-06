const handleError = require("../../_helpers/errorHandler");

const testData = [
  {
    from: "Москва",
    to: "Новосибирск",
    timeFrom: "2019-03-10 14:02:06",
    timeTo: "2019-03-10 16:20:10"
  },
  {
    from: "Южносахалинск",
    to: "Владивосток",
    timeFrom: "2019-05-15 14:02:06",
    timeTo: "2019-05-15 16:20:10"
  },
  {
    from: "Южносахалинск",
    to: "Владивосток",
    timeFrom: "2019-05-15 19:02:06",
    timeTo: "2019-05-15 20:20:10"
  },
  {
    from: "Хабаровск",
    to: "Владивосток",
    timeFrom: "2019-10-11 14:02:06",
    timeTo: "2019-10-11 16:20:10"
  }
];

module.exports = {
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
