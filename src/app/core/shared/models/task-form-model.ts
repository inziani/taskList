import { FormControl, FormGroup, Validators } from "@angular/forms";

export class TasksFormControl extends FormControl{

  label: string;
    modelProperty: string;

    constructor(label: string, property: string, value: any, validator: any) {

        super(value, validator);
        this.label = label;
        this.modelProperty = property;

    }

    getValidationMessages() {
        let messages: string[] = [];
        if (this.errors) {
            for (let errorName in this.errors) {
                switch (errorName) {
                    case "email":
                        messages.push(`Please enter a valid ${this.label} address`);
                        break;
                    case "required":
                        messages.push(`${this.label} is a required field `);
                        break;
                    case "minLength":
                        messages.push(`${this.label} must be at least ${this.errors['minLength'].requiredLength} characters.`);
                        break;
                    case "maxLength":
                        messages.push(`The ${this.label} must be ${this.errors['maxLength'].requiredLength} characters`);
                        break;
                    case "pattern":
                        messages.push(`This ${this.label} must have a atleast one Number, a special character, uppercase and lowercase letter `);
                        break;
                }

            }

        }
        return messages;
    }
}

export class TasksFormGroup extends FormGroup{

   constructor() {
        super({

          title: new TasksFormControl("Title", "title", "", Validators.compose([
            Validators.required,
            Validators.maxLength(32)
          ])),
          description: new TasksFormControl("Description", "description", "", Validators.compose([
            Validators.required,
            Validators.maxLength(132)
            ])),

        });
    }

    get ActivityCategoryFormControl(): TasksFormControl[] {
        return Object.keys(this.controls).map(k => this.controls[k] as TasksFormControl);
    }

    getTitleNameValidationMessages(title: string): string[] {
        return (this.controls['title'] as TasksFormControl).getValidationMessages();
    }

    getDescriptionValidationMessages(description: string): string[] {
        return (this.controls['description'] as TasksFormControl).getValidationMessages();
    }

    getFormValidationMessages(): string[] {
        let messages: string[] = [];
        Object.values(this.controls).forEach(c => messages.push(...(c as TasksFormControl).getValidationMessages()));
        return messages;
    }


}



