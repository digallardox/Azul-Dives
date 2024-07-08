"use client";
import { useState } from "react";
import { getUser } from "@/app/_helpers/getUser";
import { updateDiver } from "@/app/_lib/queries/updateDiver";
import { sanitize } from "@/app/_helpers/sanitize";

export const FormTemplate = ({ label, value }) => {
  const formattedLabel = sanitize(label, " ", "_");

  const [isEditing, setIsEditing] = useState(false);
  const [keyValue, setKeyValue] = useState({
    [formattedLabel]: value,
  });

  const handleEdit = async () => {
    const id = await getUser();
    const res = await updateDiver(id, keyValue);
    setIsEditing(false)
  };

  return !isEditing ? (
    <>
      <div className="flex items-center justify-between py-[20px]">
        <div>
          <div>{label}</div>
          <div>{value}</div>
        </div>
        <div
          onClick={() => setIsEditing((prevState) => !prevState)}
          className="underline"
        >
          Edit
        </div>
      </div>
      <hr />
    </>
  ) : (
    <>
      <div className="flex items-center justify-between pt-[10px]">
        <div>
          <div>{label}</div>

          <input
            className="border-2"
            name={label}
            onChange={(e) => setKeyValue({ [formattedLabel]: e.target.value })}
            value={keyValue[formattedLabel]}
            type="text"
          />
        </div>
        <div
          onClick={() => setIsEditing((prevState) => !prevState)}
          className="underline"
        >
          Cancel
        </div>
      </div>
      <button onClick={handleEdit}>Save</button>
      <hr />
    </>
  );
};
