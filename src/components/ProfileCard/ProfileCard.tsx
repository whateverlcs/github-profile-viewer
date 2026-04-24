import { GithubProfile } from "@/types/github";
import styles from "./ProfileCard.module.css";

interface ProfileCardProps {
  profile: GithubProfile;
}

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.avatarWrapper}>
        <div className={styles.avatar}>
          <img src={profile.avatar_url} alt={profile.login} />
        </div>
      </div>
      <div className={styles.info}>
        <h1 className={styles.name}>{profile.name ?? profile.login}</h1>
        <p className={styles.bio}>{profile.bio ?? "No bio available"}</p>
        
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{profile.followers}</span>
            <span className={styles.statLabel}>Seguidores</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{profile.public_repos}</span>
            <span className={styles.statLabel}>Repositórios</span>
          </div>
        </div>

        <div className={styles.details}>
          {profile.company && (
            <div className={styles.detailItem}>
              <span>🏢 {profile.company}</span>
            </div>
          )}
          {profile.location && (
            <div className={styles.detailItem}>
              <span>📍 {profile.location}</span>
            </div>
          )}
        </div>

        <a 
          href={profile.html_url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.link}
        >
          Ver perfil completo no GitHub →
        </a>
      </div>
    </div>
  );
}