import React, { useRef, useEffect, useState } from "react";
import { Sliders, MapPin, IndianRupee, Users, Wifi, Home, X } from 'lucide-react';

interface SearchFiltersProps {
  onFilterChange: (filters: any) => void;
  onClose?: () => void;
  isMobile?: boolean;
}

export default function SearchFilters({ onFilterChange, onClose, isMobile }: SearchFiltersProps) {
  const [filters, setFilters] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    type: '',
    occupancy: [],
    amenities: []
  });

  const handleFilterChange = (newFilter: any) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters, ...newFilter };
      onFilterChange(updatedFilters);
      return updatedFilters;
    });
  }

  const resetFilters = () => {
    setFilters({
      location: '',
      minPrice: '',
      maxPrice: '',
      type: '',
      occupancy: [],
      amenities: []
    });
    onFilterChange({
      location: '',
      minPrice: '',
      maxPrice: '',
      type: '',
      occupancy: [],
      amenities: []
    });
    if (onClose) onClose();
  };

  return (
    <div className="fixed right-10 top-0 w-80 bg-white rounded-xl shadow-md overflow-y-auto h-full scrollbar-thin 
      scrollbar-thumb-gray-300 scrollbar-track-transparent">
      <div className="p-4 border-b border-gray-100 sticky top-0 bg-white z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-indigo-600" />
            <h2 className="text-lg font-bold text-gray-900">Filters</h2>
          </div>
          {isMobile && onClose && (
            <button
              onClick={resetFilters}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
      
      <div className="p-4 space-y-6">
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <MapPin className="w-4 h-4 text-gray-400" />
            Location
          </label>
          <div className="relative">
            <input
              type="text"
              className="input-field pl-10"
              placeholder="Enter location"
              value={filters.location}
              onChange={(e) => handleFilterChange({ location: e.target.value })}
            />
            <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <IndianRupee className="w-4 h-4 text-gray-400" />
            Price Range
          </label>
          <div className="flex gap-3">
            <div className="relative flex-1">
              <input
                type="number"
                placeholder="Min"
                className="input-field pl-10"
                value={filters.minPrice}
                onChange={(e) => handleFilterChange({ minPrice: e.target.value })}
              />
              <span className="absolute left-3 top-2.5 text-gray-400">₹</span>
            </div>
            <div className="relative flex-1">
              <input
                type="number"
                placeholder="Max"
                className="input-field pl-10"
                value={filters.maxPrice}
                onChange={(e) => handleFilterChange({ maxPrice: e.target.value })}
              />
              <span className="absolute left-3 top-2.5 text-gray-400">₹</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Users className="w-4 h-4 text-gray-400" />
            PG Type
          </label>
          <select 
            className="input-field"
            value={filters.type}
            onChange={(e) => handleFilterChange({ type: e.target.value })}
          >
            <option value="">All Types</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="unisex">Unisex</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Home className="w-4 h-4 text-gray-400" />
            Occupancy
          </label>
          <div className="grid grid-cols-2 gap-3">
            {['Single', 'Double', 'Triple', 'Four Sharing'].map((type) => (
              <label key={type} className="relative flex items-center">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={filters.occupancy.includes(type)}
                  onChange={(e) => handleFilterChange({
                    occupancy: e.target.checked
                      ? [...filters.occupancy, type]
                      : filters.occupancy.filter((item) => item !== type)
                  })}
                />
                <div className="w-full p-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg
                  peer-checked:border-indigo-500 peer-checked:text-indigo-600 peer-checked:bg-indigo-50
                  hover:bg-gray-50 cursor-pointer transition-all duration-200 text-center">
                  {type}
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Wifi className="w-4 h-4 text-gray-400" />
            Amenities
          </label>
          <div className="grid grid-cols-2 gap-3">
            {['WiFi', 'AC', 'Food', 'Laundry', 'Parking', 'Security'].map((amenity) => (
              <label key={amenity} className="relative flex items-center">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={filters.amenities.includes(amenity)}
                  onChange={(e) => handleFilterChange({
                    amenities: e.target.checked
                      ? [...filters.amenities, amenity]
                      : filters.amenities.filter((item) => item !== amenity)
                  })}
                />
                <div className="w-full p-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg
                  peer-checked:border-indigo-500 peer-checked:text-indigo-600 peer-checked:bg-indigo-50
                  hover:bg-gray-50 cursor-pointer transition-all duration-200 text-center">
                  {amenity}
                </div>
              </label>
            ))}
          </div>
        </div>

        {isMobile && (
          <button
            onClick={() => onFilterChange(filters)}
            className="w-full btn-primary py-3 mt-4"
          >
            Apply Filters
          </button>
        )}
      </div>
    </div>
  );
}