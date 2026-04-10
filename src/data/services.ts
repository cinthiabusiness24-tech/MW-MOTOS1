export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Revisão Completa",
    description: "Inspeção detalhada de todos os sistemas da moto: motor, freios, suspensão, elétrica e muito mais.",
    icon: "wrench",
  },
  {
    id: 2,
    title: "Manutenção Preventiva",
    description: "Troca de óleo, filtros, velas e ajustes periódicos para manter sua moto sempre em dia.",
    icon: "shield",
  },
  {
    id: 3,
    title: "Diagnóstico Especializado",
    description: "Identificação precisa de falhas com equipamentos de diagnóstico de última geração.",
    icon: "search",
  },
  {
    id: 4,
    title: "Preparação de Motos",
    description: "Customização, upgrades de performance e preparação técnica.",
    icon: "zap",
  },
];
