'use client'

import { shift, useFloating } from '@floating-ui/react';

export default function TestFloat() {
  const { refs, floatingStyles } = useFloating({
    placement: 'right-start',
    middleware: [shift({
        crossAxis: true,
    })],
  });

  return (
    <div className="w-full h-[200vh] flex justify-center bg-red-500/30">
      <div className="w-1/2 h-[150vh] mt-20 relative">
        {/* Reference element - scrollable container */}
        <div 
          ref={refs.setReference} 
          className="w-full h-[50vh] bg-blue-500/30 p-4 rounded-md overflow-y-auto"
        >
            <h1 className="text-2xl font-bold mb-4">Scrollable Content</h1>
            <p className="mb-4">This is a scrollable reference element. The floating element will stay visible until you scroll past the reference element.</p>
        </div>

        {/* Floating element - always visible */}
        <div
          ref={refs.setFloating}
          className="bg-blue-500/80 p-4 rounded-md shadow-lg absolute top-0 left-0"
          style={floatingStyles}
        >
          <h2 className="text-lg font-semibold mb-2">Floating Element</h2>
          <p>This element stays visible while scrolling through the reference element.</p>
        </div>


      </div>
    </div>
  );
}