import { X, Calendar, User, Briefcase, Clock, Activity, Smartphone } from 'lucide-react'; // Smartphone icon add kiya

const ViewBookingDetails = ({ selectedBooking, setIsModalOpen, handleWhatsapp }) => {
    console.log("Selected Booking:", selectedBooking);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop with Blur */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={() => setIsModalOpen(false)}
            />

            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all animate-in fade-in zoom-in duration-200">

                {/* Header with Gradient */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-700 px-6 py-4 flex justify-between items-center">
                    <h2 className="text-white font-semibold text-lg flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        Booking Details
                    </h2>
                    <button
                        className="p-1.5 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6">
                    <div className="grid grid-cols-1 gap-5">

                        {/* Client & Phone Section */}
                        <div className="flex items-start gap-4 bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
                            <div className="p-2.5 bg-white rounded-lg shadow-sm">
                                <User className="w-6 h-6 text-indigo-600" />
                            </div>
                            <div className="flex-1">
                                <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Customer Info</p>
                                <p className="text-slate-800 font-bold text-base leading-tight">{selectedBooking.client}</p>

                                {/* Phone Number Display */}
                                <div className="flex items-center gap-2 mt-1.5 text-indigo-700">
                                    <Smartphone className="w-3.5 h-3.5" />
                                    <span className="text-sm font-medium">
                                        {selectedBooking.phone || "No contact provided"}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Service & Stylist Group */}
                        <div className="grid grid-cols-2 gap-4 border-y border-slate-100 py-5">
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-slate-500">
                                    <Briefcase className="w-4 h-4" />
                                    <span className="text-xs font-medium">Service</span>
                                </div>
                                <p className="text-sm font-semibold text-slate-700 pl-6">{selectedBooking.service}</p>
                            </div>
                            <div className="flex flex-col gap-1 border-l border-slate-100 pl-4">
                                <div className="flex items-center gap-2 text-slate-500">
                                    <User className="w-4 h-4" />
                                    <span className="text-xs font-medium">Stylist</span>
                                </div>
                                <p className="text-sm font-semibold text-slate-700 pl-6">{selectedBooking.stylist}</p>
                            </div>
                        </div>

                        {/* Date & Time Section */}
                        <div className="flex items-center justify-between bg-slate-50 rounded-xl p-4">
                            <div className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-purple-600" />
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase">Schedule</p>
                                    <p className="text-sm font-bold text-slate-700">
                                        {selectedBooking.date} • <span className="text-purple-600">{selectedBooking.dayLabel}</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Status Badge */}
                        <div className="flex items-center justify-between px-1">
                            <div className="flex items-center gap-2">
                                <Activity className="w-4 h-4 text-slate-400" />
                                <span className="text-sm text-slate-500">Current Status</span>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter ${selectedBooking.status === 'Confirmed'
                                    ? 'bg-green-100 text-green-700 border border-green-200'
                                    : 'bg-amber-100 text-amber-700 border border-amber-200'
                                }`}>
                                {selectedBooking.status}
                            </span>
                        </div>

                    </div>
                </div>

                {/* Footer */}
                <div className="bg-slate-50 px-6 py-4 flex justify-end gap-3">
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="px-5 py-2 text-sm font-bold text-slate-600 hover:bg-slate-200 rounded-lg transition-colors"
                    >
                        Dismiss
                    </button>
                    <button  
  onClick={() => handleWhatsapp(selectedBooking)}
  style={{ backgroundColor: '#6b30d7' }} // 🔥 Force background color
  className="px-5 py-2 text-sm font-bold text-white rounded-lg transition-all active:scale-95 flex items-center gap-2"
>
  <Smartphone className="w-4 h-4" />
  Send WhatsApp
</button>
                </div>

            </div>
        </div>
    );
};

export default ViewBookingDetails;