import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FormService {
  private form;

  constructor() {}

  setForm(form) {
    this.form = form;
  }

  getForm() {
    if (this.form && this.form.name) {
      return this.form;
    } else {
      return {
        name: "Form Name",
        description: "a basic form",
        sections: [],
      };
    }
  }
}
