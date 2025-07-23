import { EsvApi } from "../src";

test("Axios client is created correctly", () => {
  const client = new EsvApi("user", "password", "token");
  expect(client.client.defaults.baseURL).toBe(
    "https://dtv-esv-qa.azurewebsites.net/api/v1/"
  );
  expect(client.client.defaults.headers["Content-Type"]).toBe(
    "application/json"
  );
  expect(client.client.defaults.headers["User-Agent"]).toContain(
    "Software/1.0"
  );
  expect(client.client.defaults.auth).toEqual({
    username: "user",
    password: "password",
  });
});

test("Request with invalid token returns error", () => {
  const client = new EsvApi("user", "password", "INVALID", "production");
  const personenId = "DE100001050";
  client.client.get("").catch((error) => {
    expect(error.response.status).toBe(403);
    expect(error.response.data).toBeDefined();
    expect(error.response.data.fehler).toEqual("Kein gültiges API-Token");
  });
});

// test("Get official by ID", () => {
//   const client = new EsvApi("user", "password", "token", "production");
//   const personenId = "DE100001050";
//   client.client.get(`funktionaer/${personenId}`).then((response) => {
//     expect(response.status).toBe(200);
//     expect(response.data).toBeDefined();
//     console.log(response);
//   });
// });
