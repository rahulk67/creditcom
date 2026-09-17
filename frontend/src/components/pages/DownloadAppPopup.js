import React, { useEffect, useState } from 'react';

const DownloadAppPopup = () => {
    const [visible, setVisible] = useState(true);
    const [supportsPWA, setSupportsPWA] = useState(false);
    const [promptInstall, setPromptInstall] = useState(null);

    useEffect(() => {
        // Set a timer to hide the button after 15 seconds
        const timer = setTimeout(() => {
            setVisible(false);
        }, 15000); // 15000 ms = 15 sec

        return () => clearTimeout(timer); // Cleanup timer when component unmounts
    }, []);

    // Reappear after refresh
    useEffect(() => {
        setVisible(true);
    }, []);

 
  
    useEffect(() => {
        const handler = e => {
          e.preventDefault();
          console.log("we are being triggered :D");
          setSupportsPWA(true);
          setPromptInstall(e);

        };
      
        // Add event listener for 'beforeinstallprompt'
        window.addEventListener("beforeinstallprompt", handler);
      
        // Clean up the event listener on unmount
        return () => window.removeEventListener("beforeinstallprompt", handler);
      }, []);


    const onClick = (evt) => {
        // evt.preventDefault();
        if (!promptInstall) {
            return;
        }
        promptInstall.prompt();
    };
    if (!supportsPWA) {
        return null;
    }

    return (
        <>
             
                <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:hidden  bg-blue-500 text-white my-11  py-2 px-4 rounded-2xl shadow-lg hover:bg-blue-600 transition duration-300 cursor-pointer animate-blink">
                    <button onClick={onClick} >
                        Download our App
                    </button>
                </div>
            
        </>
    );
};

export default DownloadAppPopup;
