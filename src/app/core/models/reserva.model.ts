export interface Reserva {
    id: string;
    fincaId: string;
    clienteId: string;
    fechaInicio: Date;
    fechaFin: Date;
    estado: 'pendiente' | 'aceptada' | 'rechazada'; // Manejado por propietarios 
    total: number;
}