export const GLOBALTYPES = {
  AUTH: "AUTH",
  ALERT: "ALERT",
  THEME: "THEME",
  MODAL: "MODAL",
  ASK_MODAL: "ASK_MODAL",
  BOUNTY_MODAL: "BOUNTY_MODAL",
  BOUNTY_ID: "BOUNTY_ID",
  USER_TYPE: "USER_TYPE",
};

export const EditData = (data, id, post) => {
  const newData = data.map((item) => (item._id === id ? post : item));
  return newData;
};

export const DeleteData = (data, id) => {
  const newData = data.filter((item) => item._id !== id);
  return newData;
};

export const DeleteTag = (array, id) => {
  const newData = array.filter((item) => item !== id);
  return newData;
};

