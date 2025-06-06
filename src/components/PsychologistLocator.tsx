import React, { useState } from 'react';

interface Professional {
  id: number;
  name: string;
  specialty: string;
  focus: string;
  website: string;
  distance?: number;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
}

interface Location {
  lat: number;
  lng: number;
}

const PsychologistLocator: React.FC = () => {
  const [userLocation, setUserLocation] = useState<Location | null>(null);
  const [professionals, setProfessionals] = useState<Professional[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [manualLocation, setManualLocation] = useState<string>('');
  const [searchRadius, setSearchRadius] = useState<number>(100); // km

  // Get user's current location
  const getUserLocation = () => {
    setLoading(true);
    setError(null);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setUserLocation(location);
          findNearbyProfessionals(location);
          setLoading(false);
        },
        (error) => {
          console.error("Error getting user location:", error);
          setError("Unable to get your location. Please try entering your location manually.");
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser. Please enter your location manually.");
      setLoading(false);
    }
  };

  // Calculate distance between two points using Haversine formula
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    const distance = R * c; // Distance in km
    return distance;
  };

  const deg2rad = (deg: number): number => {
    return deg * (Math.PI/180);
  };

  // Find professionals within the search radius
  const findNearbyProfessionals = (location: Location) => {
    setLoading(true);
    
    // In a real implementation, this would fetch from a database or API
    // For now, we'll use sample data
    const allProfessionals = getSampleProfessionals();
    
    const nearbyProfessionals = allProfessionals.map(professional => {
      const distance = calculateDistance(
        location.lat,
        location.lng,
        professional.location.lat,
        professional.location.lng
      );
      return {
        ...professional,
        distance: Math.round(distance * 10) / 10 // Round to 1 decimal place
      };
    }).filter(professional => professional.distance! <= searchRadius)
      .sort((a, b) => (a.distance || 0) - (b.distance || 0));
    
    setProfessionals(nearbyProfessionals);
    setLoading(false);
  };

  // Handle manual location search
  const handleManualSearch = () => {
    if (!manualLocation.trim()) {
      setError("Please enter a location");
      return;
    }
    
    setLoading(true);
    setError(null);
    
    // In a real implementation, this would use a geocoding API to convert the address to coordinates
    // For demonstration purposes, we'll use a mock location
    const mockLocation = {
      lat: 40.7128,
      lng: -74.0060
    };
    
    setUserLocation(mockLocation);
    findNearbyProfessionals(mockLocation);
  };

  // Sample data for demonstration
  const getSampleProfessionals = (): Professional[] => {
    return [
      {
        id: 1,
        name: "Dr. Sarah Johnson",
        specialty: "Child Psychologist",
        focus: "Autism, ADHD",
        website: "https://example.com/dr-johnson",
        location: {
          lat: 40.7128,
          lng: -74.0060,
          address: "123 Main St, New York, NY"
        }
      },
      {
        id: 2,
        name: "Dr. Michael Chen",
        specialty: "Psychiatrist",
        focus: "ADHD, Anxiety",
        website: "https://example.com/dr-chen",
        location: {
          lat: 40.7308,
          lng: -73.9975,
          address: "456 Park Ave, New York, NY"
        }
      },
      {
        id: 3,
        name: "Dr. Emily Rodriguez",
        specialty: "Neuropsychologist",
        focus: "Autism, Learning Disabilities",
        website: "https://example.com/dr-rodriguez",
        location: {
          lat: 40.7589,
          lng: -73.9851,
          address: "789 Broadway, New York, NY"
        }
      },
      {
        id: 4,
        name: "Dr. James Wilson",
        specialty: "Child Psychiatrist",
        focus: "ADHD, Mood Disorders",
        website: "https://example.com/dr-wilson",
        location: {
          lat: 40.7420,
          lng: -73.9890,
          address: "321 Fifth Ave, New York, NY"
        }
      },
      {
        id: 5,
        name: "Dr. Lisa Thompson",
        specialty: "Developmental Psychologist",
        focus: "Autism, Developmental Delays",
        website: "https://example.com/dr-thompson",
        location: {
          lat: 40.7480,
          lng: -73.9850,
          address: "555 Madison Ave, New York, NY"
        }
      }
    ];
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#1C4473] mb-4">Find Professionals Near You</h2>
      
      {/* Location Input */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <button 
            onClick={getUserLocation}
            disabled={loading}
            className="bg-[#1C4473] text-white px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#67AAF9] disabled:opacity-50"
          >
            {loading ? 'Searching...' : 'Share Your Location'}
          </button>
          
          <div className="flex flex-1">
            <input 
              type="text" 
              value={manualLocation}
              onChange={(e) => setManualLocation(e.target.value)}
              placeholder="Or enter city or postal code" 
              className="px-4 py-2 rounded-l border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#67AAF9] flex-grow"
              disabled={loading}
            />
            <button 
              onClick={handleManualSearch}
              disabled={loading}
              className="bg-[#67AAF9] text-white px-4 py-2 rounded-r font-medium hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#67AAF9] disabled:opacity-50"
            >
              Search
            </button>
          </div>
        </div>
        
        {/* Search Radius Selector */}
        <div className="flex items-center gap-4">
          <label htmlFor="radius" className="font-medium">Search radius:</label>
          <select 
            id="radius"
            value={searchRadius}
            onChange={(e) => setSearchRadius(Number(e.target.value))}
            className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#67AAF9]"
            disabled={loading}
          >
            <option value={25}>25 km</option>
            <option value={50}>50 km</option>
            <option value={100}>100 km</option>
            <option value={200}>200 km</option>
          </select>
        </div>
        
        {/* Error Message */}
        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}
      </div>
      
      {/* Results */}
      <div className="mt-6">
        {loading ? (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-[#1C4473] border-t-transparent"></div>
            <p className="mt-2">Searching for professionals...</p>
          </div>
        ) : (
          <>
            {userLocation ? (
              <>
                {professionals.length > 0 ? (
                  <div>
                    <h3 className="text-xl font-bold text-[#1C4473] mb-4">
                      Found {professionals.length} professionals within {searchRadius}km
                    </h3>
                    <div className="space-y-4">
                      {professionals.map(professional => (
                        <div key={professional.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-bold text-[#1C4473]">{professional.name}</h4>
                          <p className="text-gray-700">{professional.specialty}</p>
                          <p className="text-gray-600 text-sm mb-2">Focus areas: {professional.focus}</p>
                          <div className="flex justify-between items-end">
                            <div>
                              <p className="text-sm">{professional.location.address}</p>
                              <p className="text-sm font-medium">{professional.distance} km away</p>
                            </div>
                            <a 
                              href={professional.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-[#FFCD00] text-[#1C4473] px-3 py-1 rounded font-medium text-sm hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#67AAF9]"
                            >
                              Visit Website
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-lg">No professionals found within {searchRadius}km of your location.</p>
                    <p className="mt-2">Try increasing the search radius or searching in a different location.</p>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-8 text-gray-600">
                <p>Share your location or enter a location to find professionals near you.</p>
              </div>
            )}
          </>
        )}
      </div>
      
      <div className="mt-6 text-sm text-gray-600 bg-gray-50 p-4 rounded">
        <p className="font-bold mb-1">Disclaimer:</p>
        <p>This tool provides information only and does not constitute a recommendation or endorsement of any professional. Always conduct your own research when selecting a healthcare provider.</p>
      </div>
    </div>
  );
};

export default PsychologistLocator;
