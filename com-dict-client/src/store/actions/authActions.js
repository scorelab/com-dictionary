export const signIn = (credentials) => async (firebase, history) => {
  try {
    await firebase.login(credentials);
    console.log("Success");
    history.push("/");
  } catch (e) {
    console.log(e.message);
  }
};

export const signOut = () => async (firebase, history) => {
  try {
    await firebase.logout();
    history.push("/");
  } catch (e) {
    console.log(e.message);
  }
};
