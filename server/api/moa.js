// eslint-disable-next-line no-undef
export default defineEventHandler(async (event) => {
  // eslint-disable-next-line no-undef
  const params = getQuery(event);
  const queryString = new URLSearchParams(params).toString();
  const formattedQuery = queryString
    .replace("top=", "$top=")
    .replace("skip=", "$skip=")
    .replace("filter=", "$filter=");
  const apiUrl = `https://data.moa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&${formattedQuery}`;
  const response = await $fetch(apiUrl);
  return response;
});
