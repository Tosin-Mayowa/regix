export enum Role {
  ADMIN = "Admin",
  DEVELOPER = "Developer",
}

export const handleError = (error) => {
  if (error?.response) {
    console.log(error.response?.data);
    console.log(error.response?.status);
    console.log(error.response?.headers);
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log("Error", error.message);
  }

  console.log({ config: error.config });
};
