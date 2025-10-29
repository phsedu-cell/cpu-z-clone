
import React, { useState, useEffect } from 'react';
import { useSystemInfo } from './hooks/useSystemInfo';
import { SystemInfo } from './types';
import Tabs from './components/Tabs';
import CpuTab from './components/CpuTab';
import MainboardTab from './components/MainboardTab';
import MemoryTab from './components/MemoryTab';
import GraphicsTab from './components/GraphicsTab';
import AboutTab from './components/AboutTab';
import { SpinnerIcon } from './components/Icons';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('CPU');
  const { systemInfo, loading } = useSystemInfo();

  const tabNames = ['CPU', 'Mainboard', 'Memory', 'Graphics', 'About'];

  const renderTabContent = () => {
    if (loading || !systemInfo) {
      return (
        <div className="flex justify-center items-center h-96">
          <SpinnerIcon className="animate-spin h-12 w-12 text-indigo-400" />
        </div>
      );
    }

    switch (activeTab) {
      case 'CPU':
        return <CpuTab data={systemInfo.cpu} />;
      case 'Mainboard':
        return <MainboardTab data={systemInfo.mainboard} />;
      case 'Memory':
        return <MemoryTab data={systemInfo.memory} />;
      case 'Graphics':
        return <GraphicsTab data={systemInfo.graphics} />;
      case 'About':
        return <AboutTab />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-slate-800 rounded-lg shadow-2xl overflow-hidden">
        <header className="p-6 bg-slate-900/50 border-b border-slate-700">
          <h1 className="text-3xl font-bold text-white">React CPU-Z</h1>
          <p className="text-slate-400 mt-1">System Information Viewer</p>
        </header>

        <main>
          <Tabs tabs={tabNames} activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="p-6">
            {renderTabContent()}
          </div>
        </main>
        
        <footer className="bg-slate-900/50 text-center p-4 text-xs text-slate-500 border-t border-slate-700">
          <p>A CPU-Z Clone created with React, TypeScript, and Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
