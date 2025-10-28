// Custom Hook to check whether 'User Online or Offline'

import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true); // local state variable

  useEffect(() => {
    // Event Listeners to check browser status

    window.addEventListener("offline", (event) => {
      console.log(
        "Looks like you are Offline. Please check your Internet Connection."
      );
      setOnlineStatus(false);
    });

    window.addEventListener("online", (event) => {
      console.log("you are back Online.");
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
