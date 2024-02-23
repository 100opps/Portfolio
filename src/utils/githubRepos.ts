export interface Repository {
  name: string
  language: string | null
  description: string | null
  html_url: string
  stargazers_count: number
}

async function fetchRepositories(owner: string): Promise<Repository[]> {
  const response = await fetch(`https://api.github.com/users/${owner}/repos`)
  if (!response.ok) {
    throw new Error('Failed to fetch repositories')
  }
  const data: Repository[] = await response.json()
  return data.map(repo => ({
    name: repo.name,
    language: repo.language || 'Markdown',
    description: repo.description || null,
    html_url: repo.html_url,
    stargazers_count: repo.stargazers_count
  }))
}

export async function getTopRepositories(owner: string): Promise<Repository[]> {
  const repositories = await fetchRepositories(owner)
  repositories.sort((a, b) => b.stargazers_count - a.stargazers_count)
  return repositories.slice(0, 2)
}
