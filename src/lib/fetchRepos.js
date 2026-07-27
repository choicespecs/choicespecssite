import fs from 'node:fs';
import path from 'node:path';

const CACHE_PATH = path.join(process.cwd(), 'src/data/repos-cache.json');
const GITHUB_USER = 'choicespecs';

function normalize(rawRepos) {
    return rawRepos
        .filter(r => !r.fork)
        .map(r => ({
            name: r.name,
            html_url: r.html_url,
            live_url: r.homepage || undefined,
            description: r.description || '',
            language: r.language || 'Other',
        }));
}

export async function fetchRepos() {
    try {
        const res = await fetch(
            `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`,
            { headers: { Accept: 'application/vnd.github+json' } }
        );

        if (!res.ok) {
            throw new Error(`GitHub API responded with ${res.status}`);
        }

        const raw = await res.json();
        const repos = normalize(raw);

        fs.writeFileSync(CACHE_PATH, JSON.stringify(repos, null, 2) + '\n');
        return repos;
    } catch (err) {
        console.warn(`[fetchRepos] Falling back to cached repo data: ${err.message}`);
        return JSON.parse(fs.readFileSync(CACHE_PATH, 'utf-8'));
    }
}
