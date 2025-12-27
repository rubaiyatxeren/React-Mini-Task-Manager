import React from "react";
import CustomButton from "./CustomButton";

import { useNotification } from "./TodoContext"; //

const Notification = () => {
  const { notifications, removeNotification } = useNotification();

  const getNotificationStyle = (type) => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-200 text-green-800";
      case "error":
        return "bg-red-50 border-red-200 text-red-800";
      case "warning":
        return "bg-yellow-50 border-yellow-200 text-yellow-800";
      default:
        return "bg-blue-50 border-blue-200 text-blue-800";
    }
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case "success":
        return "✅";
      case "error":
        return "❌";
      case "warning":
        return "⚠️";
      default:
        return "ℹ️";
    }
  };

  if (notifications.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 space-y-3 w-80">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`p-4 rounded-lg border shadow-lg transform transition-all duration-300 ${getNotificationStyle(
            notification.type
          )}`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              <span className="text-lg">
                {getNotificationIcon(notification.type)}
              </span>
              <div>
                <p className="font-medium">{notification.message}</p>
              </div>
            </div>
            <CustomButton
              variant="outline"
              size="small"
              onClick={() => removeNotification(notification.id)}
              className="!p-1 !min-w-0"
            >
              ✕
            </CustomButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notification;
