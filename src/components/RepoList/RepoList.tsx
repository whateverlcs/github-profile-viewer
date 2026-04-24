import { GithubRepository } from "@/types/github";
import styles from "./RepoList.module.css";

interface RepoListProps {
  repos: GithubRepository[];
}

export function RepoList({ repos }: RepoListProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <span>📂</span> Repositórios
      </h2>
      <div className={styles.grid}>
        {repos.map((repo, index) => (
          <div 
            key={repo.name} 
            className={styles.repoCard}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <a 
              href={repo.html_url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.repoName}
            >
              {repo.name}
            </a>
            <p className={styles.description}>
              {repo.description ?? "Nenhuma descrição fornecida."}
            </p>
            <div className={styles.footer}>
              <div className={styles.language}>
                <span className={styles.dot}></span>
                {repo.language ?? "Markdown"}
              </div>
              <div className={styles.stars}>
                <span>⭐</span> {repo.stargazers_count}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}