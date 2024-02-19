import dbService from "@/appwrite/databaseService";
import env from "@/env/env";
import React, { useEffect, useState } from "react";
import { VscLoading } from "react-icons/vsc";

const DevBugRequests = () => {
  const [loading, setLoading] = useState(false);
  const [bugs, setBugs] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const allBugs = await dbService.getAllDocs(env.appwriteBugCollectionId);
        setBugs(allBugs.documents);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="p-3">
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
