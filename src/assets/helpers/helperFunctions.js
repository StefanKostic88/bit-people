export const getUsersNum = (arr, gender) => {
  return arr.filter((user) => user.gender === gender).length;
};

export const hideEmail = (str) => {
  const index = str.indexOf("@");
  return (
    str.slice(0, 3) + "***" + str.slice(index - 3, index) + str.slice(index)
  );
};

export const generateData = (
  {
    name: { first, last },
    picture: { thumbnail, large },
    id: { value },
    gender,
    email,
    dob: { date },
  },
  cb
) => {
  return {
    userName: `${first} ${last}`,
    img: thumbnail,
    imgLarge: large,
    id: value || Math.random() * 100,
    gender,
    email: cb(email),
    birthDate: new Date(date)
      .toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .split("/")
      .join("."),
  };
};
