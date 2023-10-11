import { useEffect, useState } from "react";
import { RESMENU_LINK } from "../utils/constants";
const useRestaurantMenu = (resId) => {
  const [resMenuData, setResMenuData] = useState(null);
  useEffect(() => {
    fetchApiData();
  }, []);

  const fetchApiData = async () => {
    const data = await fetch(RESMENU_LINK + resId);
    const jsonData = await data.json();
    setResMenuData(jsonData.data);
  };
  return resMenuData;
};

export default useRestaurantMenu;
