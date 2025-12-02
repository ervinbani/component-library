import React from "react";
import type { UserProfileCardProps } from "../../types/index";

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = true,
  showRole = true,
  onEdit,
  children,
}) => {
  return (
    <div className="p-6 border rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        {user.avatarUrl && (
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="w-16 h-16 rounded-full"
          />
        )}
        <div className="flex-1">
          <h3 className="text-xl font-semibold">{user.name}</h3>
          {showEmail && <p className="text-gray-600">{user.email}</p>}
          {showRole && <p className="text-gray-500 text-sm">{user.role}</p>}
        </div>
        {onEdit && (
          <button
            onClick={() => onEdit(user.id)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Edit
          </button>
        )}
      </div>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};
