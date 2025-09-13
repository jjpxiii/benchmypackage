"use client";

import { redirect } from "next/navigation";
import { useState } from "react";

const updateName = async (name: string): Promise<string> => {
  console.log("ERGOKPERTGOP¨K");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Erreur " + name);
    }, 2000);
  });
};

// Before Actions
function UpdateName({}) {
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async () => {
    setIsPending(true);
    const error = await updateName(name);
    setIsPending(false);
    if (error) {
      setError(error);
      return;
    }
    redirect("/path");
  };

  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button
        className="border-dashed border-t-2 border-t-neutral-300"
        onClick={handleSubmit}
        disabled={isPending}
      >
        Update
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default UpdateName;
