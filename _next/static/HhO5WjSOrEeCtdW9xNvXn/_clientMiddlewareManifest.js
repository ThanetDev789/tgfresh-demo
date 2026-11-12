self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^\\/tgfresh-demo(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!admin|api|_next|next|.*\\..*).*))(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/((?!admin|api|_next|next|.*\\..*).*)"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()