export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  hospital: string;
  rating: number;
  reviewsCount: number;
  experienceYears: number;
  patientsCount: string;
  about: string;
  consultationFee: number;
  image: string;
  availableDays: string[];
  nextAvailable: string;
}

export interface Appointment {
  id: string;
  doctorId: string;
  doctorName: string;
  specialty: string;
  doctorImage: string;
  date: string;
  time: string;
  type: 'Video Call' | 'Voice Call' | 'In-Person';
  status: 'Upcoming' | 'Completed' | 'Cancelled';
  location?: string;
}

export interface ChatThread {
  id: string;
  doctorId: string;
  doctorName: string;
  specialty: string;
  doctorImage: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
}

export interface HealthArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  content: string;
  author: string;
}

export interface PharmacyProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  description: string;
}

export const CATEGORIES = [
  { id: '1', name: 'General', icon: 'UserCheck' },
  { id: '2', name: 'Cardiologist', icon: 'Heart' },
  { id: '3', name: 'Dentist', icon: 'Smile' },
  { id: '4', name: 'Ophthalmologist', icon: 'Eye' },
  { id: '5', name: 'Orthopedic', icon: 'Activity' },
  { id: '6', name: 'Pediatrician', icon: 'Baby' },
  { id: '7', name: 'Neurologist', icon: 'Brain' },
  { id: '8', name: 'Dermatologist', icon: 'Sun' },
];

export const DOCTORS: Doctor[] = [
  {
    id: 'doc-1',
    name: 'Dr. Jenny Wilson, M.D.',
    specialty: 'Cardiologist',
    hospital: 'St. Jude Children’s Hospital & Heart Center',
    rating: 4.9,
    reviewsCount: 1842,
    experienceYears: 12,
    patientsCount: '3.5k+',
    about: 'Dr. Jenny Wilson is a renowned Cardiologist with over 12 years of experience in diagnosing and treating cardiovascular diseases. She completed her residency at Johns Hopkins and is dedicated to patient-centered preventive cardiology.',
    consultationFee: 120,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
    availableDays: ['Mon', 'Tue', 'Thu', 'Fri'],
    nextAvailable: 'Today, 2:30 PM',
  },
  {
    id: 'doc-2',
    name: 'Dr. Robert Fox, Ph.D.',
    specialty: 'Neurologist',
    hospital: 'Mayo Clinic Brain & Spine Institute',
    rating: 4.8,
    reviewsCount: 928,
    experienceYears: 15,
    patientsCount: '2.8k+',
    about: 'Dr. Robert Fox specializes in neurological disorders, including migraines, epilepsy, and neurodegenerative conditions. He is an active researcher and author of multiple publications in neurology.',
    consultationFee: 150,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
    availableDays: ['Wed', 'Fri', 'Sat'],
    nextAvailable: 'Tomorrow, 10:00 AM',
  },
  {
    id: 'doc-3',
    name: 'Dr. Sarah Johnson, D.D.S.',
    specialty: 'Dentist',
    hospital: 'Advanced Smile Dental Clinic',
    rating: 4.9,
    reviewsCount: 1450,
    experienceYears: 10,
    patientsCount: '4.1k+',
    about: 'Dr. Sarah Johnson provides comprehensive cosmetic and restorative dental care. She uses state-of-the-art laser dentistry and painless procedures to ensure comfortable patient visits.',
    consultationFee: 90,
    image: 'https://images.unsplash.com/photo-1594824813589-72f10738d2f6?auto=format&fit=crop&q=80&w=400',
    availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    nextAvailable: 'Today, 4:00 PM',
  },
  {
    id: 'doc-4',
    name: 'Dr. Michael Chen, M.D.',
    specialty: 'Orthopedic',
    hospital: 'Metropolitan Sports Medicine Center',
    rating: 4.7,
    reviewsCount: 720,
    experienceYears: 9,
    patientsCount: '2.2k+',
    about: 'Dr. Michael Chen specializes in joint replacement surgery, arthroscopic sports injuries, and spine rehabilitation. He has worked with numerous professional athletes.',
    consultationFee: 130,
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400',
    availableDays: ['Tue', 'Thu', 'Sat'],
    nextAvailable: 'Thu, 11:30 AM',
  },
  {
    id: 'doc-5',
    name: 'Dr. Emily Watson, M.D.',
    specialty: 'General',
    hospital: 'City Health Family Practice',
    rating: 4.9,
    reviewsCount: 2150,
    experienceYears: 14,
    patientsCount: '5.0k+',
    about: 'Dr. Emily Watson is a compassionate general practitioner focusing on family health, chronic disease management, and wellness coaching.',
    consultationFee: 80,
    image: 'https://images.unsplash.com/photo-1527613426441-2da17477ef66?auto=format&fit=crop&q=80&w=400',
    availableDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    nextAvailable: 'Today, 1:00 PM',
  },
];

export const INITIAL_APPOINTMENTS: Appointment[] = [
  {
    id: 'apt-1',
    doctorId: 'doc-1',
    doctorName: 'Dr. Jenny Wilson, M.D.',
    specialty: 'Cardiologist',
    doctorImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
    date: 'Sep 10, 2026',
    time: '2:30 PM',
    type: 'Video Call',
    status: 'Upcoming',
  },
  {
    id: 'apt-2',
    doctorId: 'doc-3',
    doctorName: 'Dr. Sarah Johnson, D.D.S.',
    specialty: 'Dentist',
    doctorImage: 'https://images.unsplash.com/photo-1594824813589-72f10738d2f6?auto=format&fit=crop&q=80&w=400',
    date: 'Aug 25, 2026',
    time: '10:00 AM',
    type: 'In-Person',
    status: 'Completed',
    location: 'Advanced Smile Dental Clinic, Suite 402',
  },
];

export const CHAT_THREADS: ChatThread[] = [
  {
    id: 'chat-1',
    doctorId: 'doc-1',
    doctorName: 'Dr. Jenny Wilson, M.D.',
    specialty: 'Cardiologist',
    doctorImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
    lastMessage: 'Please take your ECG report before our video consultation on Wednesday.',
    lastMessageTime: '10:42 AM',
    unreadCount: 2,
  },
  {
    id: 'chat-2',
    doctorId: 'doc-3',
    doctorName: 'Dr. Sarah Johnson, D.D.S.',
    specialty: 'Dentist',
    doctorImage: 'https://images.unsplash.com/photo-1594824813589-72f10738d2f6?auto=format&fit=crop&q=80&w=400',
    lastMessage: 'Your dental checkup was successful! Remember to floss daily.',
    lastMessageTime: 'Yesterday',
    unreadCount: 0,
  },
];

export const HEALTH_ARTICLES: HealthArticle[] = [
  {
    id: 'art-1',
    title: '10 Essential Tips for Maintaining a Healthy Heart',
    category: 'Cardiology',
    readTime: '4 min read',
    date: 'Sep 6, 2026',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600',
    author: 'Dr. Jenny Wilson, M.D.',
    content: 'Heart health is paramount for overall longevity. Regular cardiovascular exercise, a balanced diet rich in omega-3 fatty acids, managing stress levels, and avoiding smoking significantly reduce the risk of heart disease.',
  },
  {
    id: 'art-2',
    title: 'Understanding Migraines vs. Tension Headaches',
    category: 'Neurology',
    readTime: '6 min read',
    date: 'Sep 4, 2026',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=600',
    author: 'Dr. Robert Fox, Ph.D.',
    content: 'Headaches are common, but distinguishing between migraines and tension headaches helps determine the correct treatment. Migraines often involve throbbing pain, nausea, and light sensitivity.',
  },
  {
    id: 'art-3',
    title: 'The Importance of Preventive Dental Care',
    category: 'Dentistry',
    readTime: '3 min read',
    date: 'Sep 2, 2026',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600',
    author: 'Dr. Sarah Johnson, D.D.S.',
    content: 'Brushing twice daily, flossing, and visiting your dentist every six months prevents gum disease, tooth decay, and maintains a bright, healthy smile.',
  },
];

export const PHARMACY_PRODUCTS: PharmacyProduct[] = [
  {
    id: 'p-1',
    name: 'Omega-3 Fish Oil 1000mg',
    category: 'Supplements',
    price: 24.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400',
    description: 'Supports heart, brain, and joint health with high-potency EPA and DHA.',
  },
  {
    id: 'p-2',
    name: 'Vitamin D3 2000 IU',
    category: 'Vitamins',
    price: 15.50,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=400',
    description: 'Essential for immune support and bone mineralization.',
  },
  {
    id: 'p-3',
    name: 'Digital Blood Pressure Monitor',
    category: 'Devices',
    price: 49.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400',
    description: 'Accurate upper arm blood pressure monitor with Bluetooth sync.',
  },
  {
    id: 'p-4',
    name: 'Multivitamin Complete Daily',
    category: 'Vitamins',
    price: 19.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&q=80&w=400',
    description: 'Comprehensive blend of 22 essential vitamins and minerals for daily vitality.',
  },
];

export const SYMPTOMS_LIST = [
  { id: 's-1', name: 'Chest Pain', specialty: 'Cardiologist', icon: 'Heart' },
  { id: 's-2', name: 'Severe Headache', specialty: 'Neurologist', icon: 'Brain' },
  { id: 's-3', name: 'Toothache', specialty: 'Dentist', icon: 'Smile' },
  { id: 's-4', name: 'Joint Pain', specialty: 'Orthopedic', icon: 'Activity' },
  { id: 's-5', name: 'Skin Rash', specialty: 'Dermatologist', icon: 'Sun' },
  { id: 's-6', name: 'Fever & Cough', specialty: 'General', icon: 'UserCheck' },
];
