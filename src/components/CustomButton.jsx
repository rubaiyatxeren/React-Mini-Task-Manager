import React from "react";

const CustomButton = ({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  disabled = false,
  className = "",
  type = "button",
}) => {
  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-600 hover:bg-gray-700 text-white",
    success: "bg-green-600 hover:bg-green-700 text-white",
    error: "bg-red-600 hover:bg-red-700 text-white",
    outline:
      "bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const baseClasses =
    "rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const widthClass = fullWidth ? "w-full" : "";

  const focusRingClasses = {
    primary: "focus:ring-blue-500",
    secondary: "focus:ring-gray-500",
    success: "focus:ring-green-500",
    error: "focus:ring-red-500",
    outline: "focus:ring-blue-500",
  };

  const buttonClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${widthClass}
    ${focusRingClasses[variant]}
    ${className}
  `.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {children}
    </button>
  );
};

export default CustomButton;
