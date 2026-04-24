import { useState } from "react";
import { GithubProfile, GithubRepository } from "../../types/github";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { getProfile, getRepos } from "@/services/github";
import { ProfileCard } from "@/components/ProfileCard/ProfileCard";
import { RepoList } from "@/components/RepoList/RepoList";
import styles from "./GithubViewer.module.css";

export function GithubViewer() {
  const [profile, setProfile] = useState<GithubProfile | null>(null);
  const [repos, setRepos] = useState<GithubRepository[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (username: string) => {
    setLoading(true);
    setError(null);
    setProfile(null);
    setRepos([]);

    try {
      const [profileData, reposData] = await Promise.all([
        getProfile(username),
        getRepos(username),
      ]);
      setProfile(profileData);
      setRepos(reposData);
    } catch (err: any) {
      if (err.response?.status === 404) {
        setError("Usuário não encontrado");
      } else {
        setError("Erro ao carregar dados do GitHub");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.main}>
      <SearchBar onSearch={handleSearch} />
      
      {loading && (
        <div className={styles.statusContainer}>
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <p>Buscando informações...</p>
          </div>
        </div>
      )}

      {error && (
        <div className={styles.statusContainer}>
          <div className={styles.error}>{error}</div>
        </div>
      )}

      {!loading && !error && profile && (
        <>
          <ProfileCard profile={profile} />
          {repos.length > 0 && <RepoList repos={repos} />}
        </>
      )}

      {!loading && !error && !profile && (
        <div className={styles.statusContainer}>
          <p>Busque por um usuário para ver seu perfil e repositórios.</p>
        </div>
      )}
    </main>
  );
}