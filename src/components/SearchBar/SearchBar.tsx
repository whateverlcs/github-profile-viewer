import { useState } from "react";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (username: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [username, setUsername] = useState("");

  const handleSearch = () => {
    if (username.trim()) {
      onSearch(username);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>GitHub Profile</h1>
      <div className={styles.searchWrapper}>
        <input
          type="text"
          className={styles.input}
          placeholder="Digite o username do Github"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        <button className={styles.button} onClick={handleSearch}>
          Buscar
        </button>
      </div>
    </div>
  );
}