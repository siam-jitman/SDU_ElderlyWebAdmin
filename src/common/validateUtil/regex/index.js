export default {

  TEXT_ALL: /^[a-zA-Z0-9ก-ฮ๑-๙๐ๅุูึฯี๊ัํะำไๆโเ้็่๋าใื์ิฺแ \/#&_.,()\-*@+%!@#\$%\^\&*\)\(+=._-]+$/,
  TEXT_NOT_SPECIAL_HAVE_SPEC_UNDER: /^[a-zA-Z0-9ก-ฮ๑-๙๐ๅุูึฯี๊ัํะำไๆโเ้็่๋าใื์ิฺแ _]+$/,
  TEXT_ENGLISH: /^[a-zA-Z0-9 \/#&_.,()\-*@+%!@#\$%\^\&*\)\(+=._-]+$/,
  TEXT_URL: /^[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)$/,
  // TEXT_ALL_ON_SPACE : /[ ก-์a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]/
}
