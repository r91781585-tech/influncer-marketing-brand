import React from 'react';
import { useAuthStore } from '../../store/authStore';

const InfluencerProfile = () => {
  const { user } = useAuthStore();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg p-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Welcome to Influencer Dashboard
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Hello {user?.name}! This is your influencer profile.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-green-800 mb-2">
                  Coming Soon
                </h2>
                <p className="text-green-700">
                  Profile management, campaign applications, and analytics features will be available here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerProfile;