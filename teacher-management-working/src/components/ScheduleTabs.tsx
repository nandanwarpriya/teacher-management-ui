import React from 'react';

const ScheduleTabs: React.FC = () => (
  <section className="mt-8">
    <div className="w-full overflow-x-auto">
      <table className="min-w-[800px] w-full table-auto border text-xs sm:text-sm text-center">
        <thead>
          <tr className="bg-gray-200">
            {[
              'Availability',
              'Unavailabilities',
              'Students',
              'Schedule',
              'Invoiced Lessons',
              'Unscheduled Lessons',
              'Time Voucher',
              'Comments',
              'History',
            ].map((tab) => (
              <th key={tab} className="p-2 border font-medium whitespace-nowrap">{tab}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(12)].map((_, i) => (
            <tr key={i}>
              {Array(9).fill('').map((_, j) => (
                <td key={j} className="h-12 border"></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export default ScheduleTabs;
