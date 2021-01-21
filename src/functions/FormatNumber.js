const FormatNumber = (num) => {
  if (num.length > 9) {
    num = num.substr(0, num.length - 8);
    num = num.substr(0, num.length - 1) + "." + num.substr(num.length - 1, 1);

    return num + "B";
  } else if (num.length > 6) {
    num = num.substr(0, num.length - 5);
    num = num.substr(0, num.length - 1) + "." + num.substr(num.length - 1, 1);

    return num + "M";
  } else if (num.length > 3) {
    num = num.substr(0, num.length - 3) + "," + num.substr(num.length - 3, 3);
    const numSplit = num.split(",");
    const integer = numSplit[0];
    return integer + "k";
  }

  return num;
};

export default FormatNumber;
