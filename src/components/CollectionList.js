import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { COLLECTION_LINK_END, COLLECTION_LINK_START } from "../utils/constants";
const CollectionList = () => {
  const { colId } = useParams();
  console.log(colId);
  const [collectionData, setCollectionData] = useState(null);

  useEffect(() => {
    fetchApiData();
  }, []);

  const fetchApiData = async () => {
    const data = await fetch(
      COLLECTION_LINK_START + colId + COLLECTION_LINK_END
    );
    const jsonData = await data.json();
    setCollectionData(jsonData?.data);
  };
  console.log(collectionData);

  return (
    <div>
      <h1>Collection List</h1>
    </div>
  );
};

export default CollectionList;
