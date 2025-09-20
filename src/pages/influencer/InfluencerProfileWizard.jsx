import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

const InfluencerProfileWizard = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const handleSkip = () => {
    navigate('/influencer/profile');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Complete Your Profile
              </h1>
              <p className="text-lg text-gray-600">
                Welcome {user?.name}! Let's set up your influencer profile to get started.
              </p>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-yellow-800 mb-2">
                Profile Setup Coming Soon
              </h2>
              <p className="text-yellow-700 mb-4">
                The profile wizard with bio, categories, follower counts, and social platform setup will be available here.
              </p>
              <button
                onClick={handleSkip}
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Skip for Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerProfileWizard;