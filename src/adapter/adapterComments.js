const changeComment = (commentData) => {
  return {
    id: commentData.id,
    date: new Date(commentData.date),
    ratingStars: commentData.rating,
    descriptions: commentData.comment,
    nameUser: commentData.user.name,

    user: {
      avatar: commentData.user.avatar_url,
      id: commentData.user.id,
      pro: commentData.user.is_pro,
      name: commentData.user.name,
    },

  };
};

export const adapterComment = (commentsApi) => {
  return commentsApi.map((commentApi) => changeComment(commentApi));
};

// comment: "I stayed here for one night and it was an unpleasant experience."
// date: "2020-07-08T16:06:01.819Z"
// id: 1
// rating: 4

// user:
// avatar_url: "https://htmlacademy-react-3.appspot.com/six-cities/static/avatar/2.jpg"
// id: 11
// is_pro: false
// name: "Jack"
