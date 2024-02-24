import React, { useEffect, useState } from 'react';
import cover from './assets/images/cover.png';
import photo from './assets/images/photo.jpg';
import whatsapp from './assets/images/whatsapp.png';
import facebook from './assets/images/facebook.png';
import instagram from './assets/images/instagram.png';
import smartphone from './assets/images/smartphone.png';
import link from './assets/images/link.png';
import email from './assets/images/email.png';

function App() {
  const [installPromptEvent, setInstallPromptEvent] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(true);
  const handleInstallClick = () => {
    // Check if the event is available
    if (installPromptEvent) {
      // Trigger the installation prompt
      installPromptEvent.prompt();
      // Wait for the user to respond
      installPromptEvent.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        // Reset the event
        setInstallPromptEvent(null);
        // Hide the install button
        setShowInstallButton(false);
      });
    }
  };
  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      // Prevent the default behavior
      event.preventDefault();
      // Stash the event so it can be triggered later
      setInstallPromptEvent(event);
      // Show your custom install button
      setShowInstallButton(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  return (
    <div className="App flex items-center justify-center ">
      <div class="font-mono box-content  p-5"  style={{maxWidth:"400px"}}>
        <div class="relative">
          <img class="w-full border-b-2" src={cover} />

          <div class="absolute top-0 right-0 mt-20 flex items-center justify-center w-20 h-20 mx-2 overflow-hidden rounded-full">
            <img class="" src={photo} />
          </div>
        </div>

        <h1 class='text-2xl font-bold mt-5'>BOUZEGZEG Zakaria</h1>
        <h1 class='text-xl'>Developer</h1>


        <div class="bg-white p-4 flex  flex-wrap">
          <span class="inline-flex  m-2 px-2 py-1 bg-gray-200 hover:bg-gray-300  text-sm font-semibold text-gray-600">
            <span class="ml-1">
              Software Development Company
            </span>
          </span>
          <span class="inline-flex  m-2 px-2 py-1 bg-gray-200 hover:bg-gray-300  text-sm font-semibold text-gray-600">
            <span class="ml-1">
              Solutions logicielles
            </span>
          </span>


        </div>
        <ul role="list" className="divide-y divide-gray-100">
        <a href="tel:+213778123778">
            <li key={"phone"} className="flex justify-between gap-x-6 py-5" >
              <div className="flex min-w-0 gap-x-4">
                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={smartphone} alt="" />
                <div className="min-w-0 flex-auto">
                  <p className="text-lg font-semibold leading-6 text-gray-900">+213 778 123 778</p>
                  <p className="mt-1 truncate text-base leading-5 text-gray-500">Phone</p>
                </div>
              </div>
            </li>
          </a>
          
          <a href="mailto:bouzegzeg.zakaria@gmail.com">
            <li key={'email'} className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <a><img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={email} alt="" /></a>
                <div className="min-w-0 flex-auto">
                  <p className="text-lg font-semibold leading-6 text-gray-900">bouzegzeg.zakaria@gmail.com</p>
                  <p className="mt-1 truncate text-base leading-5 text-gray-500">Email</p>
                </div>
              </div>
            </li></a>
            
            <a href="https://www.facebook.com/bzquatre">
            <li key={"facebook"} className="flex justify-between gap-x-6 py-5" >
              <div className="flex min-w-0 gap-x-4">
                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={facebook} alt="" />
                <div className="min-w-0 flex-auto">
                  <p className="text-lg font-semibold leading-6 text-gray-900">bzquatre</p>
                  <p className="mt-1 truncate text-base leading-5 text-gray-500">Facebook</p>
                </div>
              </div>
            </li>
          </a>
          <a href="https://www.instagram.com/bzquatre_/">
            <li key={"instagram"} className="flex justify-between gap-x-6 py-5" >
              <div className="flex min-w-0 gap-x-4">
                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={instagram} alt="" />
                <div className="min-w-0 flex-auto">
                  <p className="text-lg font-semibold leading-6 text-gray-900">bzquatre</p>
                  <p className="mt-1 truncate text-base leading-5 text-gray-500">Instagram</p>
                </div>
              </div>
            </li>
          </a>
            <a href="https://wa.me/message/XQBXA7LKOKQNG1">
            <li key={"whatsapp"} className="flex justify-between gap-x-6 py-5" >
              <div className="flex min-w-0 gap-x-4">
                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={whatsapp} alt="" />
                <div className="min-w-0 flex-auto">
                  <p className="text-lg font-semibold leading-6 text-gray-900">+213 778 123 778</p>
                  <p className="mt-1 truncate text-base leading-5 text-gray-500">WhatsApp</p>
                </div>
              </div>
            </li>
          </a>
          <a href="https://www.bzquatre.com">
            <li key={'link'} className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <a><img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={link} alt="" /></a>
                <div className="min-w-0 flex-auto">
                  <p className="text-lg font-semibold leading-6 text-gray-900">www.bzquatre.com</p>
                  <p className="mt-1 truncate text-base leading-5 text-gray-500">WebSite</p>
                </div>
              </div>
            </li>
          </a>

        </ul>
        {showInstallButton && (
          <div class="flex ">
            <button class="mx-auto my-auto bg-slate-950 hover:bg-slate-900 text-white text-xl font-bold mt-10 py-2 px-10 rounded-full "
              onclick={handleInstallClick}>
              Save Contact
            </button>
          </div>)}

      </div>
    </div>

  );
}

export default App;
