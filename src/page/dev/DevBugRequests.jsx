import dbService from "@/appwrite/databaseService";
import env from "@/env/env";
import { getAllRequestsData } from "@/features/requestSlice";
import React, { useEffect, useState } from "react";
import { VscLoading } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";

const DevBugRequests = () => {
  const [loading, setLoading] = useState(false);
  const [bugs, setBugs] = useState([]);

  const dispatch = useDispatch();

  const { bugs: allBugs } = useSelector((store) => store.requests);

  useEffect(() => {
    setBugs(allBugs);
  }, [allBugs.length]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { documents } = await dbService.getAllDocs(
          env.appwriteBugCollectionId
        );
        setBugs(documents);
        dispatch(getAllRequestsData(documents));
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="p-3 overflow-auto h-full pb-[100px]">
      <h2>All bugs</h2>
      {loading ? (
        <VscLoading className="w-10 h-10 animate-spin" />
      ) : (
        bugs.map(({ $id, title, bugDescription }) => (
          <div key={$id} className="border rounded-md px-3 py-2 my-2">
            <p>{title}</p>
            <span className="text-sm">{bugDescription}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default DevBugRequests;
