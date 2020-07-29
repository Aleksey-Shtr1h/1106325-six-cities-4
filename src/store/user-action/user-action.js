export const ActionTypeUser = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  GET_EMAIL: `GET_EMAIL`,
};

export const ActionCreatorUser = {
  requireAuthorization: (status) => {
    return {
      type: ActionTypeUser.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },

  getEmail: (email) => {
    return {
      type: ActionTypeUser.GET_EMAIL,
      payload: email,
    };
  }
};
