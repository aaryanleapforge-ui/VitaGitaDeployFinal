import React from "react";

export default function DeleteAccount() {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex justify-center px-4 py-10">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md p-8 md:p-10">
        {/* HEADER */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Account Deletion Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: January 2025
        </p>

        {/* CONTENT */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-base">
          <p>
            VitaGita provides users with a clear and accessible option to
            permanently delete their account from within the application. This
            policy explains how account deletion works and what happens to user
            data.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              How to Delete Your Account
            </h2>
            <ol className="list-decimal list-inside space-y-1">
              <li>Open the VitaGita mobile application</li>
              <li>Log in to your account</li>
              <li>
                Navigate to <strong>Profile / Account Settings</strong>
              </li>
              <li>Select <strong>Delete Account</strong></li>
              <li>Confirm the deletion request</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              What Happens After Deletion
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Your Firebase Authentication account is permanently removed</li>
              <li>Your personal data is deleted from Firebase Firestore</li>
              <li>Your bookmarks and saved preferences are erased</li>
              <li>You immediately lose access to the application</li>
            </ul>
          </section>

          <div className="rounded-lg border border-red-200 bg-red-50 p-4">
            <p className="text-red-700 font-medium">
              Account deletion is permanent and cannot be undone.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Need Help?
            </h2>
            <p>
              If you are unable to delete your account from within the app or
              have questions regarding account deletion, please contact us:
            </p>
            <p className="mt-2 font-medium text-gray-900">
              📧 vitagitacare@gmail.com
            </p>
          </section>
        </div>

        {/* FOOTER */}
        <div className="mt-10 border-t pt-4 text-sm text-gray-500">
          © {new Date().getFullYear()} VitaGita. All rights reserved.
        </div>
      </div>
    </div>
  );
}
