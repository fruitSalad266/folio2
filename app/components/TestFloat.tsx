'use client'

export default function TestFloat() {
  return (
    <div className="flex w-full">
      {/* Left section - sticky */}
      <div className="w-1/2 h-screen sticky top-0 bg-blue-500/20 flex items-center justify-center">
        <p className="text-2xl">Sticky Left Section</p>
      </div>

      {/* Right section - scrollable */}
      <div className="w-1/2 h-[300vh] bg-red-500/20 flex items-center justify-center">
        <p className="text-2xl">Scrollable Right Section</p>
      </div>
    </div>
  );
}