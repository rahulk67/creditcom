import React, { useState, useEffect, useRef } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Address2 = ({data}) => {
  const [copied, setCopied] = useState(false);
  const tooltipRef = useRef(null);

  useEffect(() => {
    if (copied) {
      showSuccess();

      // Reset the state after 2 seconds
      const timer = setTimeout(() => {
        resetToDefault();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [copied]);

  const showSuccess = () => {
    if (tooltipRef.current) {
      tooltipRef.current.style.opacity = 1;
      tooltipRef.current.style.visibility = 'visible';
    }
  };

  const resetToDefault = () => {
    setCopied(false);
    if (tooltipRef.current) {
      tooltipRef.current.style.opacity = 0;
      tooltipRef.current.style.visibility = 'hidden';
    }
  };

  return (
    <div className="w-full max-w-[16rem]">
      <div className="relative">
        <label htmlFor="npm-install-copy-button" className="sr-only">Label</label>
        <input
          id="npm-install-copy-button"
          type="text"
          className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          value={data?.Address?.AL2 ? data?.Address?.AL2 : ""}  //it is a placeholer 
          disabled
          readOnly
        />
        
        <CopyToClipboard text={data?.Address?.AL2 ? data?.Address?.AL2 : ""} onCopy={() => setCopied(true)}>
          <button className="absolute end-2 top-1/2 -translate-y-1/2 text-gray-500  hover:bg-gray-100  rounded-lg p-2 inline-flex items-center justify-center">
            <span id="default-icon" className={!copied ? '' : 'hidden'}>
              <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
              </svg>
            </span>
            <span id="success-icon" className={copied ? '' : 'hidden'}>
              <svg className="w-3.5 h-3.5 text-blue-700 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
              </svg>
            </span>
          </button>
        </CopyToClipboard>
        <div
          ref={tooltipRef}
          id="tooltip-copy-npm-install-copy-button"
          role="tooltip"
          className="absolute z-10 invisible px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip "
        >
          <span id="default-tooltip-message" className={!copied ? '' : 'hidden'}>
            Copy to clipboard
          </span>
          <span id="success-tooltip-message" className={copied ? '' : 'hidden'}>
            Copied!
          </span>
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </div>
  );
};

export default Address2;
