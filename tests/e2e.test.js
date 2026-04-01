const request = require("supertest");

const BASE_URL = "http://127.0.0.1:3000";

describe("E2E tests", () => {
  test("GET /health should return OK", async () => {
    const response = await request(BASE_URL).get("/health");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("OK");
  });

  test("GET /feature should return working json", async () => {
    const response = await request(BASE_URL).get("/feature");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ feature: "working" });
  });
});