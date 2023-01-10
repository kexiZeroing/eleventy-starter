const fetch = require("node-fetch");

module.exports = async () => {
  const response = await fetch("https://www.zhihu.com/api/v4/search/top_search");
  const result = await response.json();

  return result.top_search.words;
};
