import bcrypt from "bcrypt";

export const encryptData = async (data) => {
  const saltRounds = 10;
  return await bcrypt.hash(data, saltRounds).then((hash) => hash);
};

export const decryptData = async (data, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(data, hash, (err, result) => {
      if (result) {
        return resolve(true);
      } else return resolve(false);
    });
  });
};
