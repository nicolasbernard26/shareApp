export class InputModel {
    public RequiredMessage: string;
    public InvalidMessage: string;
    public DisplayRequiredMessage: boolean = false;
    public DisplayInvalidMessage: boolean = false;
    public Value: string = null;
    

    constructor(
        public DisplayName: string,
        public Type: string,
        public Required: boolean,
        public ValidateFunction: ( value: any ) => boolean )
    {
        this.RequiredMessage = `${DisplayName} is required.`;
        this.InvalidMessage = `${DisplayName} is invalid.`;
    }
}