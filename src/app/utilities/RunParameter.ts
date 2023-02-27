export class Parameter {
    public static readonly distance = new Parameter('Distance', 'km', 'Kilometer');
    public static readonly runTime = new Parameter('Run Time', 'h:min:sec', 'h:min:sec');
    public static readonly pace = new Parameter('Pace', 'mm:ss/km', 'Minutes per Kilometer');
    public static readonly speed = new Parameter('Speed', 'km/h', 'Kilometer per Hour');
    public static readonly none = new Parameter('', '', '');

    private constructor(
        public readonly label: string, 
        public readonly unit: string, 
        public readonly unitLabel: string) {
    }
}