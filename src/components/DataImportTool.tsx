
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Download, Check, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { importProductsFromGist, validateProductData } from '@/utils/dataImporter';
import { Product } from '@/utils/productData';

interface DataImportToolProps {
  onDataImported?: (products: Product[]) => void;
}

const DataImportTool = ({ onDataImported }: DataImportToolProps) => {
  const [gistUrl, setGistUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [importStatus, setImportStatus] = useState<{
    success: boolean;
    message: string;
    productCount?: number;
  } | null>(null);
  
  const { toast } = useToast();

  const handleImport = async () => {
    if (!gistUrl.trim()) {
      toast({
        title: "Error",
        description: "Please enter a GitHub Gist URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setImportStatus(null);

    try {
      const products = await importProductsFromGist(gistUrl);
      const { valid, invalid } = validateProductData(products);
      
      if (invalid.length > 0) {
        console.warn('Invalid products found:', invalid);
      }
      
      setImportStatus({
        success: true,
        message: `Successfully imported ${valid.length} products${invalid.length > 0 ? ` (${invalid.length} invalid products skipped)` : ''}`,
        productCount: valid.length
      });
      
      toast({
        title: "Import Successful",
        description: `Imported ${valid.length} products from your Gist`,
      });
      
      if (onDataImported) {
        onDataImported(valid);
      }
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setImportStatus({
        success: false,
        message: `Import failed: ${errorMessage}`
      });
      
      toast({
        title: "Import Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const downloadTemplate = () => {
    const template = [
      {
        id: 1,
        name: "Sample Product Name",
        image: "https://example.com/image.jpg",
        price: 15000,
        category: "land-rover"
      },
      {
        id: 2,
        name: "Another Product",
        image: "https://example.com/image2.jpg", 
        price: 12000,
        category: "accessories"
      }
    ];
    
    const blob = new Blob([JSON.stringify(template, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'product-template.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Import Products from GitHub Gist</CardTitle>
        <CardDescription>
          Import your product data from a GitHub Gist. Make sure your Gist contains a JSON array of products.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="gist-url" className="text-sm font-medium">
            GitHub Gist URL
          </label>
          <Input
            id="gist-url"
            placeholder="https://gist.github.com/username/gist-id"
            value={gistUrl}
            onChange={(e) => setGistUrl(e.target.value)}
            disabled={isLoading}
          />
        </div>
        
        <div className="flex gap-2">
          <Button 
            onClick={handleImport} 
            disabled={isLoading || !gistUrl.trim()}
            className="flex-1"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Importing...
              </>
            ) : (
              'Import Products'
            )}
          </Button>
          
          <Button variant="outline" onClick={downloadTemplate}>
            <Download className="mr-2 h-4 w-4" />
            Template
          </Button>
        </div>
        
        {importStatus && (
          <Alert className={importStatus.success ? 'border-green-500' : 'border-red-500'}>
            {importStatus.success ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <AlertCircle className="h-4 w-4 text-red-500" />
            )}
            <AlertDescription className={importStatus.success ? 'text-green-700' : 'text-red-700'}>
              {importStatus.message}
            </AlertDescription>
          </Alert>
        )}
        
        <div className="text-sm text-gray-600 space-y-1">
          <p><strong>Expected JSON format:</strong></p>
          <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
{`[
  {
    "id": 1,
    "name": "Product Name",
    "image": "https://example.com/image.jpg",
    "price": 15000,
    "category": "land-rover"
  }
]`}
          </pre>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataImportTool;
