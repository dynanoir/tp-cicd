const request = require("supertest");
const app = require("../index");

describe("Application routes", () => {
  test("GET / should return Hello CI/CD", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello CI/CD");
  });

  test("GET /health should return OK", async () => {
    const response = await request(app).get("/health");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("OK");
  });

  test("GET /feature should return working json", async () => {
    const response = await request(app).get("/feature");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ feature: "working" });
  });
});