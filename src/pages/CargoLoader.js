import React, { useState, useEffect } from 'react';

const Icons = {
  Package: () => <div className="w-5 h-5 flex items-center justify-center">📦</div>,
  Bell: () => <div className="w-5 h-5 flex items-center justify-center">🔔</div>,
  Maximize: () => <div className="w-5 h-5 flex items-center justify-center">⤢</div>,
  ChevronDown: () => <div className="w-5 h-5 flex items-center justify-center">▼</div>,
  Eye: () => <div className="w-5 h-5 flex items-center justify-center">👁️</div>,
  Save: () => <div className="w-5 h-5 flex items-center justify-center">💾</div>,
  Truck: () => <div className="w-5 h-5 flex items-center justify-center">🚛</div>,
};

const CargoLoader = () => {
  // State management
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', dimensions: { length: 100, width: 100, height: 100 }, weight: 10, quantity: 1, checked: true },
    { id: 2, name: 'Item 2', dimensions: { length: 100, width: 100, height: 100 }, weight: 10, quantity: 1, checked: true },
    { id: 3, name: 'Item 3', dimensions: { length: 50, width: 100, height: 100 }, weight: 10, quantity: 1, checked: true },
    { id: 4, name: 'Item 4', dimensions: { length: 100, width: 200, height: 100 }, weight: 10, quantity: 1, checked: false },
    { id: 5, name: 'Item 5', dimensions: { length: 200, width: 100, height: 100 }, weight: 10, quantity: 1, checked: false },
  ]);

  const [shipmentName, setShipmentName] = useState('');
  const [notifications, setNotifications] = useState(5);
  const [selectedView, setSelectedView] = useState('3d'); // '3d', 'list', 'details'

  // Vehicle specifications
  const vehicleSpecs = {
    length: 610, // cm
    width: 240,  // cm
    height: 230, // cm
    maxLoad: 11300, // kg
    volume: 33.6,   // m³
  };

  // Calculate loading statistics
  const calculateStats = () => {
    const selectedItems = items.filter(item => item.checked);
    
    // Calculate total volume used (L * W * H * quantity for each item)
    const totalVolumeUsed = selectedItems.reduce((acc, item) => {
      const itemVolume = (item.dimensions.length * item.dimensions.width * item.dimensions.height) / 1000000; // Convert to m³
      return acc + (itemVolume * item.quantity);
    }, 0);

    // Calculate total weight
    const totalWeight = selectedItems.reduce((acc, item) => {
      return acc + (item.weight * item.quantity);
    }, 0);

    // Calculate used length (simple approximation)
    const totalLengthUsed = selectedItems.reduce((acc, item) => {
      return acc + (item.dimensions.length * item.quantity);
    }, 0) / 100; // Convert to meters

    return {
      remainingLength: Math.max(0, vehicleSpecs.length / 100 - totalLengthUsed),
      remainingVolume: Math.max(0, vehicleSpecs.volume - totalVolumeUsed),
      remainingWeight: Math.max(0, vehicleSpecs.maxLoad - totalWeight),
      lengthPercentage: (totalLengthUsed / (vehicleSpecs.length / 100)) * 100,
      volumePercentage: (totalVolumeUsed / vehicleSpecs.volume) * 100,
      weightPercentage: (totalWeight / vehicleSpecs.maxLoad) * 100,
    };
  };

  // Handler functions
  const handleItemCheck = (itemId) => {
    setItems(items.map(item => 
      item.id === itemId ? { ...item, checked: !item.checked } : item
    ));
  };

  const handleQuantityChange = (itemId, change) => {
    setItems(items.map(item => {
      if (item.id === itemId) {
        const newQuantity = Math.max(0, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const handleSaveShipment = () => {
    if (!shipmentName) {
      alert('Please enter a shipment name');
      return;
    }
    
    const shipmentData = {
      name: shipmentName,
      items: items.filter(item => item.checked),
      stats: calculateStats(),
      timestamp: new Date().toISOString(),
    };

    // In a real app, you would save this to a backend
    console.log('Saving shipment:', shipmentData);
    alert('Shipment saved successfully!');
  };

  const handleLoadCargo = () => {
    const stats = calculateStats();
    if (stats.remainingWeight < 0 || stats.remainingVolume < 0) {
      alert('Cannot load: Cargo exceeds vehicle capacity!');
      return;
    }
    
    // In a real app, you would trigger the loading process here
    alert('Starting cargo loading process...');
  };

  const stats = calculateStats();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                CL
              </div>
              <span className="ml-2 text-xl font-semibold">cargoLoader</span>
            </div>
            <nav className="flex space-x-6">
              <button className="text-gray-600">Spaces</button>
              <button className="text-cyan-400">Items</button>
              <button className="text-gray-600">Backups</button>
              <button className="text-gray-600">Shipments</button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2">
              <img src="/api/placeholder/24/24" alt="US Flag" className="w-6 h-4" />
            </button>
            <button className="bg-cyan-400 text-white px-4 py-2 rounded-lg">
              gfj jhgjh
            </button>
            <button className="relative">
              <Icons.Bell />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {notifications}
              </span>
            </button>
            <button>
              <Icons.Maximize />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-64 bg-white shadow-lg">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl">Items</h2>
              <Icons.ChevronDown />
            </div>
            
            <div className="space-y-2">
              <div className="mb-4">
                <h3 className="flex items-center justify-between text-gray-700 mb-2">
                  Group 1
                  <div className="flex space-x-2">
                    <Icons.Package />
                    <Icons.Package />
                  </div>
                </h3>
                {items.map(item => (
                  <div key={item.id} 
                    className={`flex items-center justify-between py-2 border-l-4 
                      ${item.checked ? 'border-cyan-400' : 'border-transparent'} 
                      hover:bg-gray-50`}>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => handleItemCheck(item.id)}
                        className="mr-2"
                      />
                      <div>
                        <div className="text-sm font-medium">{item.name}</div>
                        <div className="text-xs text-gray-500">
                          {`${item.dimensions.length} x ${item.dimensions.width} x ${item.dimensions.height} cm ${item.weight} kg`}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button 
                        className="text-gray-400 hover:text-gray-600"
                        onClick={() => handleQuantityChange(item.id, -1)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        className="text-cyan-400 hover:text-cyan-600"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-4">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center space-x-4 mb-4">
              <input
                type="text"
                value={shipmentName}
                onChange={(e) => setShipmentName(e.target.value)}
                placeholder="Shipment Name"
                className="border rounded-lg px-4 py-2 flex-1"
              />
              <button 
                className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200"
                onClick={handleSaveShipment}
              >
                <Icons.Save />
              </button>
            </div>

            {/* 3D Visualization Area */}
            <div className="h-96 bg-gray-50 rounded-lg mb-4 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <Icons.Truck />
                <p className="mt-2">3D Cargo Visualization</p>
                {/* In a real app, you would render a 3D view here */}
              </div>
            </div>

            {/* Vehicle Info */}
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3>Standard Van - 2 Axle</h3>
                <span>Lorry</span>
              </div>
              <div className="grid grid-cols-5 gap-4 text-sm">
                <div>Length: {vehicleSpecs.length} cm</div>
                <div>Width: {vehicleSpecs.width} cm</div>
                <div>Height: {vehicleSpecs.height} cm</div>
                <div>Max Load: {vehicleSpecs.maxLoad} kg</div>
                <div>Volume: {vehicleSpecs.volume} m³</div>
              </div>
            </div>

            {/* Loading Stats */}
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div>Remaining Free Meter: {stats.remainingLength.toFixed(1)}m</div>
                <div className="w-full bg-blue-200 h-2 rounded-full mt-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(100, stats.lengthPercentage)}%` }}
                  ></div>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div>Remaining Volume: {stats.remainingVolume.toFixed(1)}m³</div>
                <div className="w-full bg-blue-200 h-2 rounded-full mt-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(100, stats.volumePercentage)}%` }}
                  ></div>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div>Remaining Weight: {stats.remainingWeight.toFixed(0)}kg</div>
                <div className="w-full bg-blue-200 h-2 rounded-full mt-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(100, stats.weightPercentage)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-16 bg-white shadow-lg flex flex-col items-center py-4 space-y-4">
          <button 
            className={`p-2 rounded-lg ${selectedView === 'list' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
            onClick={() => setSelectedView('list')}
          >
            <Icons.Package />
          </button>
          <button 
            className={`p-2 rounded-lg ${selectedView === '3d' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
            onClick={() => setSelectedView('3d')}
          >
            <Icons.Eye />
          </button>
          <button 
            className={`p-2 rounded-lg ${selectedView === 'details' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
            onClick={() => setSelectedView('details')}
          >
            <Icons.Truck />
          </button>
        </div>
      </div>

      {/* Load Button */}
      <div className="fixed bottom-8 right-8">
        <button 
          className="bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-600 transition-colors"
          onClick={handleLoadCargo}
        >
          Load
        </button>
      </div>

      {/* Version Number */}
      <div className="fixed bottom-4 right-4 text-sm text-gray-400">
        Beta | v0.5.9015.31987
      </div>
    </div>
  );
};

export default CargoLoader;