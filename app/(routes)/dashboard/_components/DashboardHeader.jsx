import { UserButton } from '@clerk/nextjs';
import React, { useState } from 'react';
import CurrencyContext from '../../CurrencyContext'; // Import the context


function DashboardHeader() {
  const [selectedCurrency, setSelectedCurrency] = useState('$');

  return (
    <CurrencyContext.Provider value={selectedCurrency}> 
      <div className='bg-secondary p-5 shadow-sm border-b flex justify-between'>
        <div className="flex justify-content-start 'bg-secondary">
          <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900">
          </label>

          <select
            name="HeadlineAct"
            id="HeadlineAct"
            className="mt-1.5 w-full rounded-lg bg-secondary border-gray-300 text-gray-700 sm:text-sm"
            value={selectedCurrency} // Set the selected currency as the value
            onChange={(e) => setSelectedCurrency(e.target.value)}
          >
            <option value={'$'}>$</option>
            <option value={'€'}>€</option>
            <option value={'£'}>£</option>
            <option value={'¥'}>¥</option>
            <option value={'₹'}>₹</option>
          </select>
        </div>
        <div>
          {/* ... */}
        </div>

        <div>
          <UserButton afterSignOutUrl='/' />
        </div>
      </div>
    </CurrencyContext.Provider> 
  );
}

export default DashboardHeader;