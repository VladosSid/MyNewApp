function getHeaderTitle(route) {
  switch (route.name) {
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
