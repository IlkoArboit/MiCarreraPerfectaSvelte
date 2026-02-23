export interface CareerInfo {
  id: number;
  name: string;
  description: string;
  durationMonths: number;
  branch: string;
  typeCareer: string;
  modality: string;
  campuses: [
    {
      campusName: string;
      campusEmail: string;
      campusUrl: string;
      campusLocation: string;
      university: {
        universityName: string;
      };
    },
  ];
}
