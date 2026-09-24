'use client';

import { StackProvider } from '@/components/StackContext';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import StackManager from '@/components/StackManager';

export default function Home() {
  return (
    <StackProvider>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 min-w-0 h-screen overflow-y-auto pb-16 md:pb-0 flex flex-col">
          <StackManager />
          <Footer />
        </main>
      </div>
    </StackProvider>
  );
}
