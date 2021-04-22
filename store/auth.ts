interface User {
  uid: String;
  email: String;
  emailVerified: Boolean;
}

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state: User, { authUser, claims }: any) => {
    const { uid, email, emailVerified } = authUser;
    state.email = email;
    state.uid = uid;
    state.emailVerified = emailVerified;
    console.log(`ON_AUTH_STATE_CHANGED_MUTATION`, authUser, claims);
  }
};

export const getters = {};

export const actions = {
  onAuthStateChangedAction: (context: any, { authUser, claims }: any) => {
    console.log(`authUser`, authUser, `claims`, claims);
    if (!authUser) {
      // claims = null
      // Perform logout operations
    } else {
      // Do something with the authUser and the claims object...
    }
  }
};

// keymasterviriya1150@gmail.com
// 0876146053***
