'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Filters() {
    const [activeTab, setActiveTab] = useState('technicians');

    return (
        <div className="container mx-auto rounded-lg shadow">
            <div className="flex gap-x-4 w-full lg:w-2/4">
                <div
                    className={`flex-1 py-4 px-4 text-center font-semibold rounded-t-xl ${activeTab === 'technicians'
                        ? 'bg-white text-blue-600'
                        : 'bg-[#C3D8FF] text-gray-700'
                        }`}
                    onClick={() => setActiveTab('technicians')}
                >
                    Search veterinarians/Technicians
                </div>
            </div>
            <div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-5 py-3 bg-white">
                    <div className="space-y-1">
                        <label className="text-sm text-gray-600">Select a state:</label>
                        <div className="relative">
                            <select className="w-full p-2 bg-white border rounded appearance-none pr-8">
                                <option>Alaska</option>
                            </select>
                            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm text-gray-600">Enter pet hospital:</label>
                        <div className="relative">
                            <select className="w-full p-2 bg-white border rounded appearance-none pr-8">
                                <option>96504</option>
                            </select>
                            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        </div>
                    </div>


                </div>
                <div className='text-right px-5 pb-4'>
                    <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
                        Clear Filters
                    </button>
                </div>
            </div>
        </div>
    );
}