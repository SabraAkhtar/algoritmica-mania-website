import React, { useState, useEffect } from 'react';
import { 
  X, 
  Plus, 
  Save, 
  Image as ImageIcon, 
  Package, 
  DollarSign, 
  Cpu, 
  Check, 
  Eye, 
  EyeOff, 
  Sparkles, 
  Layers,
  AlertCircle,
  HelpCircle
} from 'lucide-react';
import { useAdmin } from '../../context/AdminAuthContext';
import { useApp } from '../../context/AppContext';
import { ProductCategory, ProductCondition, AvailabilityStatus, Product } from '../../types';

// Curated high-resolution enterprise hardware photography presets
const PRESET_IMAGES = [
  {
    label: 'Enterprise Servers Rack',
    url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    category: 'servers-storage'
  },
  {
    label: 'Dell PowerEdge Server',
    url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    category: 'servers-storage'
  },
  {
    label: 'Cisco Gigabit Switch / Patch',
    url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    category: 'networking'
  },
  {
    label: 'Enterprise Networking Hardware',
    url: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80',
    category: 'networking'
  },
  {
    label: 'Business Laptop (ThinkPad/Dell)',
    url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    category: 'computers-laptops'
  },
  {
    label: 'MacBook Pro M-Series',
    url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    category: 'apple'
  },
  {
    label: 'Cybersecurity Firewall Appliance',
    url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    category: 'cybersecurity'
  },
  {
    label: '4K UltraSharp IPS Monitor',
    url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
    category: 'monitors'
  }
];

export const AddProductModal: React.FC = () => {
  const { isAddProductModalOpen, closeAddProductModal, editingProduct } = useAdmin();
  const { addProduct, updateProduct } = useApp();

  const isEditMode = !!editingProduct;

  // Form State
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('Dell');
  const [category, setCategory] = useState<ProductCategory>('computers-laptops');
  const [condition, setCondition] = useState<ProductCondition>('Refurbished - Grade A');
  const [price, setPrice] = useState<string>('549');
  const [hasPrice, setHasPrice] = useState<boolean>(true);
  const [stock, setStock] = useState<number>(5);
  const [keySpecs, setKeySpecs] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [featured, setFeatured] = useState<boolean>(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  // Sync state when modal opens or editingProduct changes
  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name || '');
      setBrand(editingProduct.brand || 'Dell');
      setCategory(editingProduct.category || 'computers-laptops');
      setCondition(editingProduct.condition || 'Refurbished - Grade A');
      setPrice(editingProduct.price !== undefined ? String(editingProduct.price) : '');
      setHasPrice(editingProduct.price !== undefined);
      setStock(editingProduct.stock ?? 5);
      setKeySpecs(editingProduct.keySpecs || '');
      setDescription(editingProduct.description || '');
      setImageUrl(editingProduct.images?.[0] || '');
      setIsHidden(!!editingProduct.isHidden);
      setFeatured(!!editingProduct.featured);
    } else {
      // Default initial state for new product
      setName('');
      setBrand('Dell');
      setCategory('computers-laptops');
      setCondition('Refurbished - Grade A');
      setPrice('650');
      setHasPrice(true);
      setStock(8);
      setKeySpecs('Intel Core i7-12700H, 32GB DDR5 RAM, 512GB NVMe SSD, Windows 11 Pro');
      setDescription('Enterprise-grade certified hardware thoroughly refurbished, sanitised with NIST 800-88 compliance, and backed by a 12-month Algorítmica Mania warranty.');
      setImageUrl(PRESET_IMAGES[4].url);
      setIsHidden(false);
      setFeatured(false);
    }
  }, [editingProduct, isAddProductModalOpen]);

  if (!isAddProductModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      alert('Please enter a product name');
      return;
    }

    const numericPrice = hasPrice && price ? parseFloat(price) : undefined;
    const finalAvailability: AvailabilityStatus = stock > 3 ? 'In Stock' : stock > 0 ? 'Limited Stock' : 'Available on Request';

    const productPayload: Partial<Product> = {
      name: name.trim(),
      brand: brand.trim(),
      category,
      condition,
      price: numericPrice,
      stock: Number(stock) || 0,
      availability: finalAvailability,
      keySpecs: keySpecs.trim(),
      description: description.trim(),
      images: [imageUrl || PRESET_IMAGES[0].url],
      isHidden,
      featured,
      subCategory: category === 'computers-laptops' ? 'Business Ultrabooks' : category === 'servers-storage' ? 'Rackmount Servers' : 'Enterprise Hardware'
    };

    if (isEditMode && editingProduct) {
      updateProduct(editingProduct.id, productPayload);
    } else {
      addProduct(productPayload);
    }

    setShowSuccessToast(true);
    setTimeout(() => {
      setShowSuccessToast(false);
      closeAddProductModal();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      
      {/* Success Notification Toast */}
      {showSuccessToast && (
        <div className="fixed top-6 right-6 z-60 bg-[#042F2C] text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-[#2DD4BF] animate-bounce">
          <div className="w-8 h-8 rounded-full bg-[#0D7E73] flex items-center justify-center text-white">
            <Check className="w-5 h-5" />
          </div>
          <div>
            <p className="font-bold text-sm">Product {isEditMode ? 'Updated' : 'Added'} Successfully!</p>
            <p className="text-xs text-teal-200">Changes are now live across the website and catalog.</p>
          </div>
        </div>
      )}

      {/* Main Modal Card */}
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="px-6 py-4.5 bg-gradient-to-r from-[#042F2C] to-[#0D7E73] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
              <Package className="w-5 h-5 text-[#5EEAD4]" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg tracking-tight">
                {isEditMode ? 'Edit Equipment in Catalog' : 'Add New IT Equipment to Store'}
              </h3>
              <p className="text-xs text-teal-100">
                {isEditMode 
                  ? `Editing: ${editingProduct?.name || 'Product'}`
                  : 'Publish enterprise laptops, servers, switches, or security hardware'}
              </p>
            </div>
          </div>
          
          <button
            type="button"
            onClick={closeAddProductModal}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form Scrollable Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
          
          {/* Quick Visibility & Store Status Alert Banner */}
          <div className={`p-4 rounded-2xl border flex items-center justify-between transition-colors ${
            isHidden 
              ? 'bg-amber-50 border-amber-200 text-amber-900' 
              : 'bg-emerald-50 border-emerald-200 text-emerald-900'
          }`}>
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                isHidden ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'
              }`}>
                {isHidden ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </div>
              <div>
                <p className="font-bold text-sm">
                  {isHidden ? 'Product is HIDDEN from Public Store' : 'Product is LIVE & VISIBLE on Public Store'}
                </p>
                <p className="text-xs opacity-80">
                  {isHidden 
                    ? 'Only admins can see this product in the dashboard. Click switch to publish.' 
                    : 'Customers can find, quote, and purchase this product on Algoritmica Mania.'}
                </p>
              </div>
            </div>

            {/* Live Toggle Button */}
            <button
              type="button"
              onClick={() => setIsHidden(!isHidden)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer flex items-center gap-2 ${
                isHidden 
                  ? 'bg-amber-600 hover:bg-amber-700 text-white' 
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white'
              }`}
            >
              {isHidden ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              <span>{isHidden ? 'Set to Visible' : 'Hide from Store'}</span>
            </button>
          </div>

          {/* Section 1: Basic Information */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#0D7E73]" />
              <span>1. Basic Hardware Details</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Product Name */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Product Name & Model <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dell PowerEdge R750 Server 2x Xeon Silver"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D7E73] focus:border-transparent font-medium"
                />
              </div>

              {/* Brand */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Manufacturer / Brand
                </label>
                <select
                  value={brand}
                  onChange={e => setBrand(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D7E73] bg-white font-medium cursor-pointer"
                >
                  <option value="Dell">Dell</option>
                  <option value="Apple">Apple</option>
                  <option value="Lenovo">Lenovo</option>
                  <option value="HP">HP Enterprise</option>
                  <option value="Cisco">Cisco Systems</option>
                  <option value="Fortinet">Fortinet</option>
                  <option value="Ubiquiti">Ubiquiti UniFi</option>
                  <option value="Synology">Synology</option>
                  <option value="APC">APC by Schneider</option>
                  <option value="SonicWall">SonicWall</option>
                  <option value="Other">Other Enterprise</option>
                </select>
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Store Category
                </label>
                <select
                  value={category}
                  onChange={e => setCategory(e.target.value as ProductCategory)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D7E73] bg-white font-medium cursor-pointer"
                >
                  <option value="computers-laptops">Computers & Laptops</option>
                  <option value="apple">Apple Line (MacBook / iMac)</option>
                  <option value="servers-storage">Servers & Storage</option>
                  <option value="networking">Networking (Switches, Routers)</option>
                  <option value="cybersecurity">Cybersecurity (Firewalls)</option>
                  <option value="monitors">Monitors & Displays</option>
                  <option value="it-accessories">IT Accessories & Peripherals</option>
                </select>
              </div>

              {/* Condition */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Hardware Condition Grade
                </label>
                <select
                  value={condition}
                  onChange={e => setCondition(e.target.value as ProductCondition)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D7E73] bg-white font-medium cursor-pointer"
                >
                  <option value="Refurbished - Grade A+">Refurbished - Grade A+ (Pristine / Flawless)</option>
                  <option value="Refurbished - Grade A">Refurbished - Grade A (Excellent Corporate)</option>
                  <option value="Open Box / Like New">Open Box / Like New</option>
                  <option value="Tested & Certified">Tested & Certified Enterprise</option>
                </select>
              </div>

              {/* Featured in Store */}
              <div className="flex items-center gap-3 pt-6">
                <input
                  type="checkbox"
                  id="featured-checkbox"
                  checked={featured}
                  onChange={e => setFeatured(e.target.checked)}
                  className="w-5 h-5 rounded-md text-[#0D7E73] focus:ring-[#0D7E73] border-slate-300 cursor-pointer"
                />
                <label htmlFor="featured-checkbox" className="text-xs font-bold text-slate-700 cursor-pointer flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Highlight on Homepage as "Featured"</span>
                </label>
              </div>
            </div>
          </div>

          {/* Section 2: Pricing & Inventory Stock */}
          <div className="space-y-4 pt-3 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-[#0D7E73]" />
              <span>2. Pricing & Stock Inventory</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Price Mode */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700">
                    Pricing Display
                  </label>
                  <label className="text-xs font-medium text-[#0D7E73] flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasPrice}
                      onChange={e => setHasPrice(e.target.checked)}
                      className="rounded text-[#0D7E73] cursor-pointer"
                    />
                    <span>Show Fixed Price (€)</span>
                  </label>
                </div>

                {hasPrice ? (
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">€</span>
                    <input
                      type="number"
                      step="1"
                      min="0"
                      placeholder="e.g. 599"
                      value={price}
                      onChange={e => setPrice(e.target.value)}
                      className="w-full pl-8 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D7E73] font-bold text-slate-900"
                    />
                  </div>
                ) : (
                  <div className="p-2.5 bg-slate-100 rounded-xl text-xs font-medium text-slate-600 text-center border border-slate-200">
                    Price hidden — Button displays "Request a Quote (RFQ)"
                  </div>
                )}
              </div>

              {/* Stock Units Stepper */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Available Warehouse Stock (Units)
                </label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setStock(Math.max(0, stock - 1))}
                    className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="0"
                    value={stock}
                    onChange={e => setStock(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full text-center py-2.5 rounded-xl border border-slate-300 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0D7E73]"
                  />
                  <button
                    type="button"
                    onClick={() => setStock(stock + 1)}
                    className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  {stock > 3 ? 'Status: 🟢 In Stock' : stock > 0 ? 'Status: 🟡 Limited Stock' : 'Status: 🔴 Available on Request'}
                </p>
              </div>

            </div>
          </div>

          {/* Section 3: Technical Specifications & Description */}
          <div className="space-y-4 pt-3 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#0D7E73]" />
              <span>3. Technical Specs & Description</span>
            </h4>

            {/* Key Specs */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Key Technical Highlights (Specs Summary) <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. 24-Port PoE+ Gigabit, 4x 10G SFP+ Uplinks, 370W Power Budget"
                value={keySpecs}
                onChange={e => setKeySpecs(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D7E73] font-medium"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Product Description
              </label>
              <textarea
                rows={3}
                placeholder="Details about condition, enterprise warranty, NIST 800-88 sanitization, accessories included..."
                value={description}
                onChange={e => setDescription(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D7E73] resize-none"
              />
            </div>
          </div>

          {/* Section 4: Image URL & Quick Photo Presets */}
          <div className="space-y-3 pt-3 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-[#0D7E73]" />
              <span>4. Product Photography</span>
            </h4>

            {/* Image URL Input */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Image Web Link (URL)
              </label>
              <input
                type="url"
                placeholder="https://images.unsplash.com/..."
                value={imageUrl}
                onChange={e => setImageUrl(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#0D7E73] font-mono text-slate-700"
              />
            </div>

            {/* Quick 1-Click Photo Presets Selector */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 mb-2">
                Or choose from high-resolution equipment presets:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {PRESET_IMAGES.map((preset, idx) => (
                  <div
                    key={idx}
                    onClick={() => setImageUrl(preset.url)}
                    className={`p-1.5 rounded-xl border text-left cursor-pointer transition-all ${
                      imageUrl === preset.url
                        ? 'border-[#0D7E73] bg-[#F0FDFA] ring-2 ring-[#0D7E73]/30'
                        : 'border-slate-200 hover:border-slate-300 bg-slate-50'
                    }`}
                  >
                    <img 
                      src={preset.url} 
                      alt={preset.label} 
                      className="w-full h-14 object-cover rounded-lg mb-1" 
                    />
                    <p className="text-[10px] font-bold text-slate-800 truncate">{preset.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer Controls */}
          <div className="pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="button"
              onClick={closeAddProductModal}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
            >
              Cancel
            </button>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="submit"
                className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0D7E73] to-[#042F2C] hover:from-[#0f8e83] hover:to-[#064e3b] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Save className="w-4 h-4" />
                <span>{isEditMode ? 'Save Changes' : 'Publish Product to Store'}</span>
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
