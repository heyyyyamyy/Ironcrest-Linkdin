import React from 'react';
import { Person } from '../types';
import { UserPlus } from 'lucide-react';

export const PeopleSection: React.FC = () => {
  const people: Person[] = [
    {
      id: '1',
      name: 'Sarah Chen',
      title: 'Chief Operations Officer',
      image: 'https://picsum.photos/id/1027/200/200',
    },
    {
      id: '2',
      name: 'Marcus Rodriguez',
      title: 'Head of Offshore Drilling',
      image: 'https://picsum.photos/id/338/200/200',
    },
    {
      id: '3',
      name: 'Dr. Lars Jensen',
      title: 'VP of Marine Engineering',
      image: 'https://picsum.photos/id/1025/200/200',
    },
    {
      id: '4',
      name: 'Emily Thorne',
      title: 'Senior Geologist',
      image: 'https://picsum.photos/id/237/200/200',
    },
    {
      id: '5',
      name: 'James O\'Connor',
      title: 'Rig Safety Supervisor',
      image: 'https://picsum.photos/id/1005/200/200',
    },
     {
      id: '6',
      name: 'Aisha Gupta',
      title: 'Sustainability Director',
      image: 'https://picsum.photos/id/1011/200/200',
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mt-2 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">People</h2>
      
      <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar pb-2">
         <button className="px-4 py-1.5 bg-green-700 text-white rounded-full text-sm font-semibold whitespace-nowrap">All Employees</button>
         <button className="px-4 py-1.5 border border-gray-400 text-gray-600 hover:bg-gray-100 rounded-full text-sm font-semibold whitespace-nowrap">Engineering</button>
         <button className="px-4 py-1.5 border border-gray-400 text-gray-600 hover:bg-gray-100 rounded-full text-sm font-semibold whitespace-nowrap">Operations</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {people.map((person) => (
          <div key={person.id} className="flex items-start gap-3 p-3 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
            <img src={person.image} alt={person.name} className="w-16 h-16 rounded-full object-cover" />
            <div className="flex-1">
               <h3 className="font-semibold text-gray-900 text-base">{person.name}</h3>
               <p className="text-sm text-gray-600 mb-2">{person.title}</p>
               <button className="flex items-center gap-1 px-4 py-1 rounded-full border border-gray-500 text-gray-600 font-semibold text-sm hover:border-gray-900 hover:bg-gray-50 transition-colors">
                  <UserPlus className="w-4 h-4" />
                  Connect
               </button>
            </div>
          </div>
        ))}
      </div>
       <div className="mt-6 text-center border-t border-gray-100 pt-4">
          <button className="text-sm font-semibold text-gray-600 hover:text-gray-900">Show all 10,000+ employees →</button>
      </div>
    </div>
  );
};