import { useState } from "react";
import "./App.css";
import notificationsData from "./notifications";

function Notification({ children, onClear }) {
  return (
    <div className="notification">
      {children}
      <button onClick={onClear}>Clear</button>
    </div>
  );
}

function App() {
  const [notifications, setNotifications] = useState(notificationsData);

  const clearNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="App">
      <h1>Notifications ({notifications.length})</h1>
      <div className="notifications-list">
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            onClear={() => clearNotification(notification.id)}
          >
            <h3>{notification.title}</h3>
            <p>{notification.message}</p>
          </Notification>
        ))}
      </div>
      <button
        onClick={clearAllNotifications}
        disabled={notifications.length === 0}
        className="clear-all-btn"
      >
        Clear All
      </button>
    </div>
  );
}

export default App;
