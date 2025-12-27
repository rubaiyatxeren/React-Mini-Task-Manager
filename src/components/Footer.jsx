import React from "react";

const Footer = () => {
  return (
    <footer className="mt-8 text-center text-gray-500 text-sm">
      <div className="mb-6">
        <h3 className="font-medium text-gray-700 mb-3 flex items-center justify-center">
          <span className="mr-2">🚀</span> উৎপাদনশীলতা বাড়ানোর টুল
          <span className="ml-2">📈</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-white p-3 rounded-lg border shadow-sm">
            <div className="text-blue-500 text-lg mb-1">⚡</div>
            <div className="font-medium text-gray-800 mb-1">দ্রুত</div>
            <div className="text-xs text-gray-600">
              ইনস্ট্যান্ট টাস্ক ম্যানেজমেন্ট
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg border shadow-sm">
            <div className="text-green-500 text-lg mb-1">🔐</div>
            <div className="font-medium text-gray-800 mb-1">নিরাপদ</div>
            <div className="text-xs text-gray-600">
              আপনার ডেটা শুধু আপনার ডিভাইসে
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg border shadow-sm">
            <div className="text-purple-500 text-lg mb-1">📱</div>
            <div className="font-medium text-gray-800 mb-1">সার্বক্ষণিক</div>
            <div className="text-xs text-gray-600">
              যেকোনো ডিভাইস, যেকোনো সময়
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-3 md:mb-0">
            <p className="text-gray-700 font-medium">
              তৈরি করেছেন বাংলাদেশী ডেভেলপার
            </p>
            <p className="text-gray-600 text-xs">
              React, Tailwind CSS, Context API
            </p>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={() => window.location.reload()}
              className="text-blue-600 hover:text-blue-800 text-xs font-medium"
            >
              🔄 রিফ্রেশ করুন
            </button>
            <button
              onClick={() =>
                alert("সোর্স কোড: https://github.com/rubaiyatxeren/React-Mini-Task-Manager")
              }
              className="text-gray-600 hover:text-gray-800 text-xs font-medium"
            >
              💻 সোর্স কোড
            </button>
          </div>
        </div>

        <p className="mt-3 text-xs text-gray-500">
          {new Date().getFullYear()} • সব টাস্ক লোকাল স্টোরেজে সংরক্ষিত •
        </p>
      </div>
    </footer>
  );
};

export default Footer;

