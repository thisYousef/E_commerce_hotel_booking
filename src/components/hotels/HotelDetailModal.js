import { Bed, Home, DollarSign, X, ChevronLeft, ChevronRight } from 'lucide-react';

import { useState } from "react";

export default function HotelDetailModal({ hotel, onClose }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!hotel) return null;

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % hotel.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex - 1 + hotel.images.length) % hotel.images.length
        );
    };

    return (
        // Modal Backdrop using Tailwind classes
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4" onClick={onClose} dir="ltr">
            <div
                className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all duration-300 scale-100"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
                {/* Image Gallery */}
                <div className="relative w-full h-60 bg-gray-200 flex items-center justify-center overflow-hidden">
                    {hotel.images && hotel.images.length > 0 ? (
                        <>
                            <img
                                src={hotel.images[currentImageIndex]}
                                alt={`${hotel.name} - ${currentImageIndex + 1}`}
                                className="w-full h-full object-cover object-center"
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/cccccc/000000?text=Image+Not+Available" }}
                            />
                            {hotel.images.length > 1 && (
                                <>
                                    {/* Previous Button */}
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition z-10"
                                    >
                                        <ChevronLeft size={20} />
                                    </button>
                                    {/* Next Button */}
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition z-10"
                                    >
                                        <ChevronRight size={20} />
                                    </button>
                                    <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1 z-10">
                                        {hotel.images.map((_, idx) => (
                                            <span
                                                key={idx}
                                                className={`block h-2 w-2 rounded-full ${idx === currentImageIndex ? 'bg-white' : 'bg-gray-400 bg-opacity-75'}`}
                                            ></span>
                                        ))}
                                    </div>
                                </>
                            )}
                        </>
                    ) : (
                        <span className="text-gray-500">No images available</span>
                    )}
                    {/* Close Button (X) */}
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 p-2 rounded-full text-white bg-black bg-opacity-40 hover:bg-opacity-60 transition z-10"
                        aria-label="Close details"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="p-6">
                    <h2 className="text-2xl font-extrabold text-indigo-700 mb-3">{hotel.name}</h2>

                    <div className="border-b pb-3 mb-4 flex justify-start items-center">
                        <p className="flex items-center text-gray-700">
                            <DollarSign size={24} className="text-green-600 mr-2" />
                            <span className="font-bold text-4xl text-green-700">${hotel.price}</span>
                            <span className="text-base font-medium text-gray-500 ml-1">/ night</span>
                        </p>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-justify mb-4">{hotel.description}</p>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                        <p className="flex items-center text-base font-medium text-gray-600">
                            <Bed size={20} className="text-blue-500 mr-2" />
                            Beds: <span className="text-gray-900 ml-1 font-semibold">{hotel.beds}</span>
                        </p>
                        <p className="flex items-center text-base font-medium text-gray-600">
                            <Home size={20} className="text-red-500 mr-2" />
                            Rooms: <span className="text-gray-900 ml-1 font-semibold">{hotel.rooms}</span>
                        </p>
                        <p className="col-span-2 text-base font-medium text-gray-600">
                            Rating: <span className="text-yellow-500 font-bold">{hotel.rating} / 5</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
