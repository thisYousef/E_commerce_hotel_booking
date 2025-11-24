import { Bed, Home, ShoppingCart, Info } from 'lucide-react';

export default function HotelCard({ hotel, onAddToCart, onShowDetails, isAdded }) {
    <div className="bg-white border border-gray-100 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 flex flex-col overflow-hidden" dir="ltr">
        {/* Hotel Image */}
        <img
            src={hotel.images[0]}
            alt={hotel.name}
            className="w-full h-48 object-cover object-center"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/cccccc/000000?text=Hotel+Image" }}
        />

        <div className="p-6 flex-grow">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{hotel.name}</h3>
            <p className="text-4xl font-extrabold text-green-600 mb-4">${hotel.price}<span className="text-base font-medium text-gray-500">/night</span></p>

            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                <p className="flex items-center">
                    <Bed size={16} className="text-blue-500 mr-1" /> {hotel.beds} Beds
                </p>
                <p className="flex items-center">
                    <Home size={16} className="text-red-500 mr-1" /> {hotel.rooms} Rooms
                </p>
                <p className="text-yellow-500 font-semibold ml-auto">★ {hotel.rating}</p>
            </div>

            <p className="text-gray-500 text-sm line-clamp-2 text-justify">{hotel.description}</p>
        </div>

        <div className="p-4 border-t border-gray-100 flex justify-end space-x-3">
            <button
                onClick={() => onShowDetails(hotel)}
                className="flex items-center px-4 py-2 bg-indigo-50 text-indigo-700 text-sm font-semibold rounded-lg hover:bg-indigo-100 transition duration-150"
            >
                <Info size={16} className="mr-1" /> Details
            </button>
            <button
                onClick={() => onAddToCart(hotel)}
                disabled={isAdded}
                className={`flex items-center px-4 py-2 text-sm font-semibold rounded-lg transition duration-150 
          ${isAdded
                        ? 'bg-gray-400 text-white cursor-not-allowed'
                        : 'bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800'
                    }`}
            >
                <ShoppingCart size={16} className="mr-2" />
                {isAdded ? 'Added' : 'Add to Cart'}
            </button>
        </div>
    </div>
}