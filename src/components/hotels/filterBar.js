export default function FilterBar({ filters, onFilterChange }) {
    const bedOptions = [1, 2, 3, 4];
    const roomOptions = [1, 2, 3];

    const handlePriceChange = (e) => {
        onFilterChange({
            ...filters,
            maxPrice: parseInt(e.target.value),
        });
    };

    const handleSelectChange = (e, key) => {
        onFilterChange({
            ...filters,
            [key]: parseInt(e.target.value) || null,
        });
    };

    const handleReset = () => {
        onFilterChange({ minPrice: 0, maxPrice: 350, minBeds: null, minRooms: null });
    };

    return (
        <div className="bg-white p-6 shadow-xl rounded-xl mb-8 border border-gray-100" dir="ltr">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Filter Hotels</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Max Price Filter - Slider */}
                <div className="space-y-2">
                    <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700">Max Price: <span className="font-bold text-indigo-600">${filters.maxPrice}</span></label>
                    <input
                        type="range"
                        id="priceRange"
                        min="50"
                        max="350"
                        step="10"
                        value={filters.maxPrice}
                        onChange={handlePriceChange}
                        className="w-full h-2 bg-indigo-100 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:bg-indigo-600 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:appearance-none"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>$50</span>
                        <span>$350+</span>
                    </div>
                </div>

                {/* Beds Filter */}
                <div className="space-y-1">
                    <label htmlFor="bedFilter" className="block text-sm font-medium text-gray-700">Min Beds</label>
                    <select
                        id="bedFilter"
                        value={filters.minBeds || ''}
                        onChange={(e) => handleSelectChange(e, 'minBeds')}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg shadow-sm"
                    >
                        <option value="">Any Beds</option>
                        {bedOptions.map(b => <option key={`b-${b}`} value={b}>{b}+ Beds</option>)}
                    </select>
                </div>

                {/* Rooms Filter */}
                <div className="space-y-1">
                    <label htmlFor="roomFilter" className="block text-sm font-medium text-gray-700">Min Rooms</label>
                    <select
                        id="roomFilter"
                        value={filters.minRooms || ''}
                        onChange={(e) => handleSelectChange(e, 'minRooms')}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg shadow-sm"
                    >
                        <option value="">Any Rooms</option>
                        {roomOptions.map(r => <option key={`r-${r}`} value={r}>{r}+ Rooms</option>)}
                    </select>
                </div>

                {/* Reset Button */}
                <div className="flex items-end pt-5 lg:pt-0">
                    <button
                        onClick={handleReset}
                        className="w-full h-10 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition duration-150 shadow-sm flex items-center justify-center space-x-1"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 18v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1" /><path d="M11 12H4" /><path d="M7 9l-3 3 3 3" /></svg>
                        <span>Reset Filters</span>
                    </button>
                </div>
            </div>
        </div>
    );
};