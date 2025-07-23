import axios, { AxiosInstance } from "axios";

const baseUrls = {
  production: "https://ev.tanzsport-portal.de/api/v1/",
  staging: "https://dtv-esv-qa.azurewebsites.net/api/v1/",
};

export class EsvApi {
  public readonly client: AxiosInstance;

  constructor(
    private readonly username: string,
    private readonly password: string,
    private readonly token: string,
    private readonly environment: "production" | "staging" = "staging",
    private readonly userAgent?: string
  ) {
    this.client = axios.create({
      baseURL: baseUrls[environment],
      headers: {
        "Content-Type": "application/json",
        "User-Agent": `${userAgent || "Software/1.0"}; Token=${token}`,
      },
      auth: {
        username,
        password,
      },
    });
  }
}
