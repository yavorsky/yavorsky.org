'use client';

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useCallback } from 'react';

export const ExportPdfButton = () => {
  const handleDownloadPDF = useCallback(() => {
    // In a real implementation, this would trigger PDF generation/download
    window.print();
  }, []);

  return (
    <Button
      onClick={handleDownloadPDF}
      className="bg-white text-black hover:bg-zinc-200"
    >
      <Download className="w-4 h-4 mr-2" />
      Export PDF
    </Button>
  );
};
