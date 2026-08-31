export type Language = 'en' | 'pt';

export type ProductCategory = 
  | 'computers-laptops'
  | 'used-refurbished'
  | 'apple'
  | 'servers-storage'
  | 'networking'
  | 'cybersecurity'
  | 'monitors'
  | 'it-accessories';

export type ProductCondition = 
  | 'Refurbished - Grade A+'
  | 'Refurbished - Grade A'
  | 'Open Box / Like New'
  | 'Tested & Certified';

export type AvailabilityStatus = 'In Stock' | 'Limited Stock' | 'Available on Request';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: ProductCategory;
  subCategory: string;
  condition: ProductCondition;
  keySpecs: string;
  fullSpecs: ProductSpec[];
  description: string;
  price?: number; // Optional; if undefined, displays "Request a Quote"
  currency?: string;
  availability: AvailabilityStatus;
  images: string[];
  features: string[];
  portsAndConnectivity?: string[];
  warrantyMonths?: number;
  featured?: boolean;
  isHidden?: boolean; // Controls whether product is visible on the public store
  stock?: number;     // Current inventory stock level
}

export type ServiceCategoryKey = 
  | 'all'
  | 'it-support'
  | 'networking-infrastructure'
  | 'cybersecurity'
  | 'servers-storage'
  | 'asset-recovery';

export type ServiceDeliveryMode = 'On-Site' | 'Remote' | 'Workshop Lab' | 'Emergency SLA';

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  titlePt?: string;
  shortDescription: string;
  shortDescriptionPt?: string;
  fullDescription: string;
  fullDescriptionPt?: string;
  iconName: string;
  category: 'it-support' | 'networking' | 'cybersecurity' | 'data-removal' | 'refurbishment' | 'servers-storage' | 'asset-recovery';
  categoryKey?: ServiceCategoryKey;
  categoryIndex?: string;
  categoryLabel?: { en: string; pt: string };
  deliveryModes?: ServiceDeliveryMode[];
  turnaroundTime?: { en: string; pt: string };
  deliverables?: { en: string[]; pt: string[] };
  capabilities: string[];
  image?: string;
  processSteps: {
    title: string;
    description: string;
  }[];
  businessValue: string[];
  slaNote?: string;
  featured?: boolean;
}

export interface RefurbishmentStep {
  step: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface BusinessSolutionStage {
  id: string;
  techBrand: string;
  techBrandPt?: string;
  underlayLabel: string;
  underlayLabelPt?: string;
  badge: string;
  badgePt?: string;
  title: string;
  titlePt?: string;
  subtitle: string;
  subtitlePt?: string;
  description: string;
  descriptionPt?: string;
  iconName: string;
  tags: string[];
  tagsPt?: string[];
  keyDeliverables?: string[];
  keyDeliverablesPt?: string[];
  techTags?: string[];
}

export interface TrustPillar {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlights: string[];
}

export interface RfqItem {
  product: Product;
  quantity: number;
  notes?: string;
}

export interface RfqSubmissionData {
  companyName: string;
  contactName: string;
  businessEmail: string;
  phone: string;
  country: string;
  vatNif?: string;
  deliveryLocation: string;
  targetDeliveryDate?: string;
  additionalRequirements?: string;
  items: {
    productId: string;
    productName: string;
    brand: string;
    quantity: number;
    specs: string;
  }[];
  referenceId: string;
  submittedAt: string;
}

export interface QuoteRequestData {
  name: string;
  company?: string;
  email: string;
  phone: string;
  useCase: 'business' | 'personal';
  equipmentNeeded: string;
  selectedProductId?: string;
  quantity: number;
  preferredBrand?: string;
  approximateBudget?: string;
  additionalRequirements: string;
}

export interface SellEquipmentData {
  name: string;
  company?: string;
  email: string;
  phone: string;
  equipmentType: string;
  brand: string;
  model: string;
  quantity: number;
  condition: string;
  description: string;
  hasChargerOrAccessories: boolean;
  notes?: string;
}

export interface ContactMessageData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export type ActivePage = 
  | { type: 'home' }
  | { type: 'products'; category?: ProductCategory; query?: string }
  | { type: 'product-detail'; productId: string }
  | { type: 'services' }
  | { type: 'service-detail'; serviceId: string }
  | { type: 'business-solutions' }
  | { type: 'sell-equipment' }
  | { type: 'about' }
  | { type: 'why-choose-us' }
  | { type: 'our-approach' }
  | { type: 'quote'; preselectedProduct?: Product }
  | { type: 'contact' }
  | { type: 'legal'; section: 'privacy' | 'cookies' | 'terms' };
