import { useState } from 'react';

export const useForms = () => {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const openDemoForm = () => setShowDemoForm(true);
  const closeDemoForm = () => setShowDemoForm(false);
  
  const openContactForm = () => setShowContactForm(true);
  const closeContactForm = () => setShowContactForm(false);

  return {
    showDemoForm,
    showContactForm,
    openDemoForm,
    closeDemoForm,
    openContactForm,
    closeContactForm,
  };
};