import React, { useState } from 'react';
import { CompanyDetails } from '../types';
import { Check, Plus, MoreHorizontal } from 'lucide-react';

interface HeroSectionProps {
  details: CompanyDetails;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ details }) => {
  const [followError, setFollowError] = useState(false);

  // SVG Data URI for Ironcrest Logo (Orange Square with White Hammer)
  const LOGO_URL = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Crect width='512' height='512' rx='100' fill='%23ea8c10'/%3E%3Cpath fill='white' d='M384.6 153.2l-51.4-51.4c-9.2-9.2-24.2-9.2-33.4 0L193 208.6l-39-39c-9.2-9.2-24.2-9.2-33.4 0L76.9 213.3c-9.2 9.2-9.2 24.2 0 33.4l39 39L53.7 347.9c-15.3 15.3-15.3 40.1 0 55.4l55.4 55.4c15.3 15.3 40.1 15.3 55.4 0l62.2-62.2 39 39c9.2 9.2 24.2 9.2 33.4 0l43.7-43.7c9.2-9.2 9.2-24.2 0-33.4l-39-39 106.8-106.8c9.2-9.2 9.2-24.2 0-33.4l-39-39 106.8-106.8c9.2-9.2 9.2-24.2 0-33.4z'/%3E%3C/svg%3E";

  return (
    <div className="bg-white rounded-t-lg shadow-sm border border-gray-200 overflow-hidden relative">
      {/* Banner Image */}
      <div className="h-[200px] w-full bg-gray-300 relative">
        <img 
          src="https://picsum.photos/id/193/1128/200" 
          alt="Cover" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile Details Container */}
      <div className="px-6 pb-4 pt-12 relative">
        {/* Logo (Absolute Positioned) */}
        <div className="absolute -top-16 left-6 w-32 h-32 bg-white p-1 rounded-lg shadow-sm border border-gray-200">
             <img 
                src={LOGO_URL}
                alt="Ironcrest Developers Logo"
                className="w-full h-full object-cover rounded"
             />
        </div>

        <div className="flex justify-between items-start">
            <div className="mt-2">
                <h1 className="text-2xl font-bold text-gray-900 leading-tight">{details.name}</h1>
                <p className="text-base text-gray-900 mt-1">{details.tagline}</p>
                
                <div className="flex items-center text-sm text-gray-500 mt-2 gap-2">
                    <span>{details.industry}</span>
                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                    <span>{details.location}</span>
                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                    <span className="hover:text-linkedin-blue cursor-pointer font-semibold text-linkedin-blue underline-offset-2 hover:underline">
                        {details.followers.toLocaleString()} followers
                    </span>
                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                    <span className="hover:text-linkedin-blue cursor-pointer hover:underline">
                        {details.employees} employees
                    </span>
                </div>

                <div className="flex items-center gap-2 mt-4">
                    <button 
                      onClick={() => setFollowError(true)}
                      className={`bg-white font-semibold py-1.5 px-4 rounded-full text-base transition-colors flex items-center gap-1 border ${followError ? 'border-red-500 text-red-500 hover:bg-red-50' : 'border-linkedin-blue text-linkedin-blue hover:bg-blue-50'}`}
                    >
                         {followError ? (
                            <span>Error</span>
                         ) : (
                            <>
                              <Plus className="w-4 h-4" />
                              Follow
                            </>
                         )}
                    </button>
                    <button className="bg-linkedin-blue hover:bg-linkedin-blueHover text-white font-semibold py-1.5 px-4 rounded-full text-base transition-colors flex items-center gap-1">
                        Visit website
                    </button>
                     <button className="bg-white text-gray-600 border border-gray-600 hover:bg-gray-100 hover:border-gray-800 font-semibold py-1.5 px-3 rounded-full text-base transition-colors">
                        More
                    </button>
                </div>
            </div>

            {/* Promoted / Company badge could go here */}
            <div className="hidden sm:block">
                <div className="w-16 h-16 bg-gray-50 border border-gray-200 rounded p-2 flex items-center justify-center">
                    <span className="text-xs text-center text-gray-500 font-semibold">Top Startups</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};