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

export interface ChatMessage {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
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
