import { GithubProfile, GithubRepository } from '@/types/github'
import { api } from './api'

export async function getProfile(username: string): Promise<GithubProfile> {
  const response = await api.get(`/users/${username}`)
  return response.data
}

export async function getRepos(username: string): Promise<GithubRepository[]> {
  const response = await api.get(`/users/${username}/repos`)
  return response.data
}