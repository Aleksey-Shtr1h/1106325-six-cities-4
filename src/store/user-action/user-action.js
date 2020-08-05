export const ActionTypeUser = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  GET_HOST_DATA: `GET_HOST_DATA`,
  GET_ERROR: `GET_ERROR`,
  HIDE_ERROR_BLOCK: `HIDE_ERROR_BLOCK`,
};

export const ActionCreatorUser = {
  requireAuthorization: (status) => {
    return {
      type: ActionTypeUser.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },

  getHostData: (hostData) => {
    return {
      type: ActionTypeUser.GET_HOST_DATA,
      payload: hostData,
    };
  },

  getError: (error) => {
    return {
      type: ActionTypeUser.GET_ERROR,
      payload: error.status,
    };
  },

  hideErrorBlock: () => {
    return {
      type: ActionTypeUser.HIDE_ERROR_BLOCK,
      payload: null,
    };
  }

};
