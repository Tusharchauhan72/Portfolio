// GitHub API utilities
const GITHUB_USERNAME = 'Tusharchauhan72';

export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
}

export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface ContributionWeek {
  days: ContributionDay[];
}

export interface GitHubStats {
  totalContributions: number;
  weeks: ContributionWeek[];
}

// Specific repos to display
const FEATURED_REPOS = [
  'Maoi-Topple-Game',
  'CampusConnect',
  'Portfolio',
  'DSA-Repository',
];

// Fetch public repos (no token needed for public data)
export async function getPublicRepos(): Promise<GitHubRepo[]> {
  try {
    const repoPromises = FEATURED_REPOS.map((repoName) =>
      fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}`, {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          'User-Agent': 'Mozilla/5.0',
        },
      })
        .then((res) => {
          if (!res.ok) throw new Error(`Failed to fetch ${repoName}`);
          return res.json();
        })
        .catch(() => null)
    );

    const repos = await Promise.all(repoPromises);
    const validRepos = repos.filter((repo): repo is GitHubRepo => repo !== null);

    if (validRepos.length > 0) {
      return validRepos;
    }

    const userReposRes = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=3`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          'User-Agent': 'Mozilla/5.0',
        },
      }
    );

    if (userReposRes.ok) {
      return await userReposRes.json();
    }
    return [];
  } catch (error) {
    console.error('Failed to fetch GitHub repos:', error);
    return [];
  }
}

// Fetch user profile stats
export async function getGitHubProfile() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          'User-Agent': 'Mozilla/5.0',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Failed to fetch GitHub profile:', error);
    return null;
  }
}

/**
 * Fetch real contribution data exclusively from GitHub GraphQL API via contributionsCollection.
 * Requires GITHUB_TOKEN environment variable. Returns null if token is absent or invalid.
 */
export async function fetchContributionData(token?: string): Promise<GitHubStats | null> {
  const githubToken =
    token ||
    (typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.GITHUB_TOKEN : undefined) ||
    (typeof process !== 'undefined' && process.env ? process.env.GITHUB_TOKEN : undefined);

  if (!githubToken) {
    console.warn('GITHUB_TOKEN is missing. GraphQL contribution data cannot be fetched.');
    return null;
  }

  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                contributionLevel
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${githubToken}`,
        'User-Agent': 'Astro-Portfolio',
      },
      body: JSON.stringify({
        query,
        variables: { username: GITHUB_USERNAME },
      }),
    });

    if (!response.ok) {
      console.error(`GitHub GraphQL API request failed: HTTP ${response.status}`);
      return null;
    }

    const data = await response.json();

    if (data.errors) {
      console.error('GitHub GraphQL errors:', data.errors);
      return null;
    }

    const calendar = data.data?.user?.contributionsCollection?.contributionCalendar;
    if (!calendar) {
      console.error('No contributionCalendar object found in GitHub API response.');
      return null;
    }

    const levelMap: Record<string, 0 | 1 | 2 | 3 | 4> = {
      NONE: 0,
      FIRST_QUARTILE: 1,
      SECOND_QUARTILE: 2,
      THIRD_QUARTILE: 3,
      FOURTH_QUARTILE: 4,
    };

    const weeks: ContributionWeek[] = calendar.weeks.map((week: any) => ({
      days: week.contributionDays.map((day: any) => ({
        date: day.date,
        count: day.contributionCount,
        level: levelMap[day.contributionLevel] ?? 0,
      })),
    }));

    return {
      totalContributions: calendar.totalContributions,
      weeks,
    };
  } catch (error) {
    console.error('Error executing GitHub GraphQL contributions query:', error);
    return null;
  }
}

// Language colors for repo display
export const languageColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  PHP: '#4F5D95',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
  Rust: '#dea584',
  Go: '#00ADD8',
  Java: '#b07219',
  Ruby: '#701516',
  Vue: '#41b883',
  Svelte: '#ff3e00',
};
