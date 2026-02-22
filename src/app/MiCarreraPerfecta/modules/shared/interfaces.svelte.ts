export interface Universidad {
  id: number;
  name: string;
  totalCareers: number;
  campus: Campus[];
  privateManagement: boolean;
}

export interface Campus {
  id_campus: number;
  name: string;
  location: string;
  latitude: string;
  longitude: string;
  main: number;
  url: string;
  email: string;
  careers: Career[];
  careersCount: number;
}

export interface Career {
  id: number;
  name: string;
  title_intermediate: number;
  description: string;
  duration_months: number;
  branch: string;
}
