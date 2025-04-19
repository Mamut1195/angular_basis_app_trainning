export interface Athlete {
    id: number;
    nombre: string;
    email: string;
    fecha_inicio: string;
    titulo?: string;
    pais?: string;
    ciudad?: string;
    especialidad?: string;
    edad?: number;
    peso?: number;
    objetivos?: string; // En la API está como texto
    descripcion?: string;
  }
  