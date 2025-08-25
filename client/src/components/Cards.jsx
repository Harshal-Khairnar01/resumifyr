import { useNavigate } from "react-router-dom";
import { cardStyles } from "../assets/dummyStyle";
import { useUser } from "../context/userContext";

// profile info cards
export const ProfileInfoCards = () => {
  const navigate = useNavigate();
  const { user, clearUser } = useUser();

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/");
  };

  return (
    user && (
      <div className={cardStyles.profileCard}>
        <div className={cardStyles.profileInitialsContainer}>
          <span className={cardStyles.profileInitialsText}>
            {user.name ? user.name.charAt(0).toUpperCase() : ""}
          </span>
        </div>

        <div>
          <div className={cardStyles.profileName}>{user.name || ""}</div>
          <button className={cardStyles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    )
  );
};
