const FormatData = (data) => {
  const splitData = data.split("-");
  const year = splitData[0];
  const month = splitData[1];
  let time = splitData[2];
  const day = time.substr(0, 2);
  time = time.substr(3, 8);
  const hour = time.substr(0, 2);
  const minute = time.substr(3, 2);
  const second = time.substr(6, 8);

  const now = new Date();
  const nowYear = now.getUTCFullYear();
  let nowMonth = now.getUTCMonth();
  nowMonth += 1;
  const nowDay = now.getUTCDate();
  const nowHour = now.getUTCHours();
  const nowMinute = now.getUTCMinutes();
  const nowSecond = now.getUTCSeconds();

  if (nowYear > year) {
    const newYear = nowYear - year;

    if (newYear > 1) {
      return newYear + " years ago";
    } else {
      return newYear + " year ago";
    }
  } else if (nowMonth > month) {
    const newMonth = nowMonth - month;

    if (newMonth > 1) {
      return newMonth + " months ago";
    } else {
      return newMonth + " month ago";
    }
  } else if (nowDay > day) {
    const newDay = nowDay - day;

    if (newDay > 1) {
      return newDay + " days ago";
    } else {
      return newDay + " day ago";
    }
  } else if (nowHour > hour) {
    const newHour = nowHour - hour;

    if (newHour > 1) {
      return newHour + " hours ago";
    } else {
      return newHour + " hour ago";
    }
  } else if (nowMinute > minute) {
    const newMinute = nowMinute - minute;

    if (newMinute > 1) {
      return newMinute + " minutes ago";
    } else {
      return newMinute + " minute ago";
    }
  } else if (nowSecond > second) {
    const newSecond = nowSecond - second;

    if (newSecond > 1) {
      return newSecond + " seconds ago";
    } else {
      return newSecond + " second ago";
    }
  }
};

export default FormatData;
