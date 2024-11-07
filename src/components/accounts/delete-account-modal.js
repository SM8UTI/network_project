import { useToast } from "@/hooks/use-toast";
import React, { useState } from "react";
import { fetchDashboardInfo } from "@/lib/api";
import { Input } from "../ui/input";
import { Label } from "../ui/label";


const DeleteModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const { toast } = useToast();

  // State to hold the uid input
  const [uid, setUid] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if UID is provided
    if (!uid) {
      toast({
        title: "Error",
        description: "UID is required to delete the account.",
      });
      return;
    }

    try {
      // Send API call to delete the user with the provided UID
      const result = await fetchDashboardInfo("/account/delete-users", "DELETE", {
        uids: [uid],
      });

      if (result) {
        toast({
          title: "Account deleted!",
          description: "Successfully deleted the selected account.",
        });
        onClose(); // Close the modal after successful deletion
      } else {
        toast({
          title: "Error",
          variant: "destructive",
          description: "Failed to delete the account. Please provide correct gid.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        variant: "destructive",
        description: "Something went wrong. Please try again later.",
      });
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div className="bg-[#303531] p-8 rounded-lg relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 hover:text-gray-800"
        >
          &times;
        </button>
        <h2 className="text-lg font-semibold mb-4">System Tips</h2>
        <form
          onSubmit={handleSubmit}
          className="w-[30vw] h-[30vh] flex flex-col gap-6 items-center justify-center"
        >
          <h1 className="w-full">Do you want to delete the selected account?</h1>

          {/* Input field for UID */}
          <div className="mt-4 w-full">
            <Label htmlFor="uid" className="block text-sm font-medium text-white mb-2">
              Enter UID:
            </Label>
            <Input
              type="text"
              id="uid"
              name="uid"
              value={uid}
              onChange={(e) => setUid(e.target.value)}
              className="w-full p-2 bg-gray-700 text-white rounded-md"
              placeholder="Enter UID"
            />
          </div>

          <div className="flex space-x-4 mt-4 justify-center">
            <button
              onClick={onClose}
              className="min-w-32 px-4 py-2 bg-transparent border-2 border-white border-opacity-5 rounded hover:bg-white hover:bg-opacity-5"
            >
              No
            </button>
            <button
              type="submit"
              disabled={!uid}
              className="min-w-32 px-4 py-2 disabled:bg-green-600/20 disabled:text-white/50 bg-green-600 text-zinc-900 font-medium rounded hover:bg-green-300"
            >
              Yes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteModal;
