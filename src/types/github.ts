export interface GithubProfile {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  company: string | null;
  location: string | null;
  html_url: string;
}

export interface GithubRepository {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  html_url: string;
}