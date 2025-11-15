import { useCallback, useMemo, useState } from "react";
import { ShoppingCart } from 'lucide-react';

import HotelCard from "./hotelCard";
import FilterBar from "./filterBar";
import HotelDetailModal from "./HotelDetailModal";
import InitialHotels from "./db"

export default function MainHotel() {
    const [hotels] = useState(InitialHotels);
    const [filters, setFilters] = useState({
        minPrice: 0,
        maxPrice: 350,
        minBeds: null,
        minRooms: null,
    });
    const [cart, setCart] = useState([]);
    const [selectedHotel, setSelectedHotel] = useState(null);

    // Memoized filtering logic
    const filteredHotels = useMemo(() => {
        return hotels.filter(hotel => {
            // 1. Price Filter
            const priceMatch = hotel.price <= filters.maxPrice;

            // 2. Beds Filter
            const bedsMatch = filters.minBeds === null || hotel.beds >= filters.minBeds;

            // 3. Rooms Filter
            const roomsMatch = filters.minRooms === null || hotel.rooms >= filters.minRooms;

            return priceMatch && bedsMatch && roomsMatch;
        });
    }, [hotels, filters]);

    // Handle adding an item to the cart
    const handleAddToCart = useCallback((hotel) => {
        if (!cart.some(item => item.id === hotel.id)) {
            setCart(prevCart => [...prevCart, hotel]);
        }
    }, [cart]);

    // Handle showing the detailed modal
    const handleShowDetails = useCallback((hotel) => {
        setSelectedHotel(hotel);
    }, []);

    const closeModal = useCallback(() => {
        setSelectedHotel(null);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 font-sans" dir="ltr">

            {/* Header / Nav */}
            <header className="bg-indigo-600 shadow-lg sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <h1 className="text-3xl font-extrabold text-white tracking-tight">
                        Booking Explorer
                    </h1>
                    <div className="flex items-center space-x-2 p-2 bg-indigo-700 rounded-full text-white">
                        <ShoppingCart size={20} className="text-white" />
                        <span className="font-semibold">{cart.length}</span>
                        <span className="hidden sm:inline">items in Cart</span>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                {/* Filter Section */}
                <FilterBar filters={filters} onFilterChange={setFilters} />

                {/* Hotel List Section */}
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    {filteredHotels.length} Hotels Found
                </h2>

                {filteredHotels.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredHotels.map(hotel => (
                            <HotelCard
                                key={hotel.id}
                                hotel={hotel}
                                onAddToCart={handleAddToCart}
                                onShowDetails={handleShowDetails}
                                isAdded={cart.some(item => item.id === hotel.id)}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 bg-white rounded-xl shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-600">No Hotels Match Your Criteria</h3>
                        <p className="text-gray-500 mt-2">Try adjusting your filters or resetting them.</p>
                    </div>
                )}
            </main>

            {/* Hotel Details Modal */}
            <HotelDetailModal
                hotel={selectedHotel}
                onClose={closeModal}
            />
        </div>
    );
};