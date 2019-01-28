import { InputModel } from "src/app/_models/input.model";

export class FormModel {

    constructor(public Model: InputModel[], public ButtonMessage: string) {
    }

    public Validate(): boolean {
        var valid: boolean = true;
        for ( var input of this.Model ) {
            if ( input.Required && input.Value == null ) {
                valid = false;
                input.DisplayRequiredMessage = true;                
            } else {
                input.DisplayRequiredMessage = false;

                if ( input.Required && !input.ValidateFunction( input.Value ) ) {
                    input.DisplayInvalidMessage = true;
                    valid = false;
                }
                else {
                    input.DisplayInvalidMessage = false;
                }
            }
        }

        return valid;
    }
}