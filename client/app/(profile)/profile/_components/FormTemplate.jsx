"use client";
import { useState } from "react";
import { getUser } from "@/app/_helpers/getUser";
import { updateDiver } from "@/app/_lib/queries/updateDiver";
import { sanitize } from "@/app/_helpers/sanitize";
import { toggleState } from "@/app/_helpers/toggleState";

export const FormTemplate = ({ label, value }) => {
  const formattedLabel = sanitize(label, " ", "_");
  const [keyValue, setKeyValue] = useState({
    [formattedLabel]: value,
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = async () => {
    const id = await getUser();
    updateDiver(id, keyValue);
    setIsEditing(false);
  };

  return !!isEditing ? (
    <>
      <div className="py-[20px]">
        <div className="flex items-center justify-between">
          <div className="font-medium text-lg">{label}</div>
          <div
            onClick={() => toggleState(setIsEditing)}
            className="underline cursor-pointer"
          >
            Cancel
          </div>
        </div>
        <input
          className="block border-2"
          name={label}
          onChange={(e) =>
            setKeyValue((prevState) => ({
              ...prevState,
              [formattedLabel]: e.target.value,
            }))
          }
          value={keyValue[formattedLabel]}
          type="text"
        />
        <button onClick={handleEdit}>Save</button>
      </div>
      <hr />
    </>
  ) : (
    <>
      <div className="py-[20px]">
        <div className="flex items-center justify-between">
          <div className="font-medium text-lg">{label}</div>
          <div
            onClick={() => toggleState(setIsEditing)}
            className="underline cursor-pointer"
          >
            Edit
          </div>
        </div>
        <div>{keyValue[formattedLabel]}</div>
      </div>
      <hr />
    </>
  );
};
