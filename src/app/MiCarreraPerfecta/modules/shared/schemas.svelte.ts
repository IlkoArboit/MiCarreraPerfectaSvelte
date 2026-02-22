import type { University } from "./interfaces.svelte";


export const universities: University[] = [
  {
    id: "uncuyo",
    name: "Universidad Nacional de Cuyo",
    shortName: "UNCUYO",
    management: "Pública",
    description:
      "Principal universidad pública de Mendoza. Ofrece formación académica, científica y cultural en múltiples áreas del conocimiento con fuerte vínculo regional.",
    website: "https://www.uncuyo.edu.ar",
    phone: "+54 261 4135000",
    email: "informes@uncuyo.edu.ar",
    socialMedia: {
      facebook: "uncuyo.oficial",
      instagram: "uncuyo",
      twitter: "uncuyo",
    },
    accreditations: ["CONEAU", "CIN"],
    campuses: [
      {
        id: "uncuyo-centro",
        name: "Centro Universitario",
        city: "Mendoza",
        address: "Parque General San Martín, Mendoza",
        phone: "+54 261 4135000",
        universityId: "uncuyo",
        careers: [
          {
            id: "uncuyo-ing",
            name: "Ingeniería en Sistemas de Información",
            area: "Tecnología e Ingeniería",
            duration: "5 años",
            modality: "Presencial",
            description:
              "Desarrollo de software, arquitectura de sistemas y gestión tecnológica.",
            campusId: "uncuyo-centro",
            universityId: "uncuyo",
          },
          {
            id: "uncuyo-med",
            name: "Medicina",
            area: "Ciencias de la Salud",
            duration: "6 años",
            modality: "Presencial",
            description:
              "Formación médica integral con orientación hospitalaria y comunitaria.",
            campusId: "uncuyo-centro",
            universityId: "uncuyo",
          },
          {
            id: "uncuyo-der",
            name: "Abogacía",
            area: "Derecho y Ciencias Sociales",
            duration: "5 años",
            modality: "Presencial",
            description:
              "Formación jurídica con enfoque en derecho argentino y latinoamericano.",
            campusId: "uncuyo-centro",
            universityId: "uncuyo",
          },
        ],
      },
    ],
  },
  {
    id: "utn-mendoza",
    name: "Universidad Tecnológica Nacional - Facultad Regional Mendoza",
    shortName: "UTN FRM",
    management: "Pública",
    description:
      "Facultad regional de la UTN orientada a la formación de ingenieros con fuerte perfil técnico y profesional.",
    website: "https://www.frm.utn.edu.ar",
    phone: "+54 261 5244500",
    email: "info@frm.utn.edu.ar",
    socialMedia: { facebook: "utn.frm", instagram: "utnfrm" },
    accreditations: ["CONEAU"],
    campuses: [
      {
        id: "utn-campus",
        name: "Campus UTN Mendoza",
        city: "Godoy Cruz",
        address: "Rodríguez 273, Mendoza",
        phone: "+54 261 5244500",
        universityId: "utn-mendoza",
        careers: [
          {
            id: "utn-sistemas",
            name: "Ingeniería en Sistemas de Información",
            area: "Tecnología e Ingeniería",
            duration: "5 años",
            modality: "Presencial",
            description:
              "Análisis, diseño y desarrollo de sistemas informáticos empresariales.",
            campusId: "utn-campus",
            universityId: "utn-mendoza",
          },
          {
            id: "utn-electrica",
            name: "Ingeniería Eléctrica",
            area: "Tecnología e Ingeniería",
            duration: "5 años",
            modality: "Presencial",
            description:
              "Diseño y mantenimiento de sistemas eléctricos industriales.",
            campusId: "utn-campus",
            universityId: "utn-mendoza",
          },
        ],
      },
    ],
  },
  {
    id: "um",
    name: "Universidad de Mendoza",
    shortName: "UM",
    management: "Privada",
    description:
      "Universidad privada tradicional de Mendoza con carreras en derecho, arquitectura, ingeniería y ciencias de la salud.",
    website: "https://www.um.edu.ar",
    phone: "+54 261 4202017",
    email: "informes@um.edu.ar",
    socialMedia: { facebook: "universidaddemendoza", instagram: "umendoza" },
    accreditations: ["CONEAU"],
    campuses: [
      {
        id: "um-central",
        name: "Sede Central",
        city: "Mendoza",
        address: "Paso de los Andes 3051, Mendoza",
        phone: "+54 261 4202017",
        universityId: "um",
        careers: [
          {
            id: "um-arq",
            name: "Arquitectura",
            area: "Arte y Diseño",
            duration: "5 años",
            modality: "Presencial",
            description:
              "Diseño arquitectónico y urbanístico con enfoque sustentable.",
            campusId: "um-central",
            universityId: "um",
          },
          {
            id: "um-odont",
            name: "Odontología",
            area: "Ciencias de la Salud",
            duration: "5 años",
            modality: "Presencial",
            description: "Formación clínica integral en salud bucal.",
            campusId: "um-central",
            universityId: "um",
          },
        ],
      },
    ],
  },
  {
    id: "aconcagua",
    name: "Universidad Aconcagua",
    shortName: "UAC",
    management: "Privada",
    description:
      "Institución privada mendocina con carreras orientadas a ciencias sociales, salud y educación.",
    website: "https://www.uaconcagua.edu.ar",
    phone: "+54 261 5201680",
    email: "informes@uaconcagua.edu.ar",
    socialMedia: { facebook: "uaconcagua", instagram: "uaconcagua" },
    accreditations: ["CONEAU"],
    campuses: [
      {
        id: "uac-sede",
        name: "Sede Central",
        city: "Mendoza",
        address: "Catamarca 147, Mendoza",
        phone: "+54 261 5201680",
        universityId: "aconcagua",
        careers: [
          {
            id: "uac-psico",
            name: "Psicología",
            area: "Ciencias Sociales",
            duration: "5 años",
            modality: "Presencial",
            description:
              "Formación profesional en evaluación y tratamiento psicológico.",
            campusId: "uac-sede",
            universityId: "aconcagua",
          },
          {
            id: "uac-kine",
            name: "Kinesiología",
            area: "Ciencias de la Salud",
            duration: "4 años",
            modality: "Presencial",
            description: "Rehabilitación física y terapias de movimiento.",
            campusId: "uac-sede",
            universityId: "aconcagua",
          },
        ],
      },
    ],
  },
  {
    id: "champagnat",
    name: "Universidad Champagnat",
    shortName: "UCH",
    management: "Privada",
    description:
      "Universidad privada enfocada en economía, derecho, tecnología y gestión empresarial.",
    website: "https://www.uch.edu.ar",
    phone: "+54 261 4138200",
    email: "informes@uch.edu.ar",
    socialMedia: { facebook: "uchampagnat", instagram: "uchampagnat" },
    accreditations: ["CONEAU"],
    campuses: [
      {
        id: "uch-campus",
        name: "Campus Champagnat",
        city: "Las Heras",
        address: "Belgrano 721, Mendoza",
        phone: "+54 261 4138200",
        universityId: "champagnat",
        careers: [
          {
            id: "uch-contador",
            name: "Contador Público",
            area: "Economía y Finanzas",
            duration: "4 años",
            modality: "Presencial",
            description:
              "Gestión contable, financiera y tributaria empresarial.",
            campusId: "uch-campus",
            universityId: "champagnat",
          },
          {
            id: "uch-sistemas",
            name: "Licenciatura en Sistemas de Información",
            area: "Tecnología e Ingeniería",
            duration: "4 años",
            modality: "Presencial",
            description:
              "Gestión de sistemas informáticos y transformación digital organizacional.",
            campusId: "uch-campus",
            universityId: "champagnat",
          },
        ],
      },
    ],
  },
];
