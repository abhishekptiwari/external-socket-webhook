import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<Landing initialSectionId="about" />} />
        <Route path="/services" element={<Landing initialSectionId="services" />} />
        <Route path="/projects" element={<Landing initialSectionId="projects" />} />
        <Route path="/testimonials" element={<Landing initialSectionId="testimonials" />} />
        <Route path="/blog" element={<Landing initialSectionId="blog" />} />
        <Route path="/faq" element={<Landing initialSectionId="faq" />} />
        <Route path="/contact" element={<Landing initialSectionId="contact" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
