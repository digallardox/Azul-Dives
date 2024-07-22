import { API_ENDPOINT } from "../src/_utils/api_config";

const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || "https://urban-couscous-595jw7gwj6wc44wv-3000.app.github.dev"

test("API_ENDPOINT returns correct URL", () => {
  expect(API_ENDPOINT("/test")).toBe(`${SERVER_ENDPOINT}/test`);
});
