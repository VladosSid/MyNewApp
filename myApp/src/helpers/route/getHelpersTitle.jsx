function getHeaderTitle(route) {
  console.log(route);
  switch (route) {
    case "Profile":
      return "Профіль";
    case "PostsScreen":
      return "Публікації";
    case "CreatePostsScreen":
      return "Створити публікацію";
    case "CommentsScreen":
      return "Коментарі";
  }
}

export default getHeaderTitle;
