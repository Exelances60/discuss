const path = {
  home() {
    return "/";
  },
  topicShow(topicSlug: string) {
    return `/topics/${topicSlug}`;
  },
  postCreate(topicsSlug: string) {
    return `/topics/${topicsSlug}/posts/create`;
  },
  postShow(topicsSlug: string, postId: string) {
    return `/topics/${topicsSlug}/posts/${postId}`;
  },
};

export default path;
