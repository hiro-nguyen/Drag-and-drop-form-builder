import { Component, OnInit, Input } from "@angular/core";
import { FormService } from "../form.service";

@Component({
  selector: "app-form-builder-page",
  templateUrl: "./form-builder-page.component.html",
  styleUrls: ["./form-builder-page.component.css"],
})
export class FormBuilderPageComponent implements OnInit {
  field = {};
  sectionIds = [];
  form;
  categories = [
    {
      name: "Input",
      icon: "edit_document",
      fields: [
        {
          type: "input",
          visible: true,
          id: "",
          name: "Input",
          text: "",
          dataConcept: "",
          fieldLbl: "",
          value: "",
          inputType: "Text",
          customCssClass: [],
          readonly: false,
          required: false,
          conditionalLogic: [],
          range: "",
          inputMask: "",
          errorMsg: "",
          isPastDate: false,
          min: null,
          max: null,
        },
        {
          type: "textarea",
          visible: true,
          id: "",
          name: "Textarea",
          text: "",
          dataConcept: "",
          fieldLbl: "",
          value: "",
          customCssClass: [],
          readonly: false,
          required: false,
          conditionalLogic: [],
          errorMsg: "",
          rows: 5,
          columns: 100,
        },
      ],
    },
    {
      name: "Select",
      icon: "checklist",
      fields: [
        {
          type: "select",
          visible: true,
          id: "",
          name: "Select",
          readonly: false,
          required: true,
          fieldLbl: "Label",
          options: [
            {
              value: "val",
              label: "Alphaway",
            },
          ],
        },
      ],
    },
    {
      name: "Checkbox",
      icon: "check_box",
      fields: [
        {
          type: "checkbox",
          visible: true,
          id: "",
          dataConcept: "",
          fieldLbl: "",
          value: "",
          checked: false,
          name: "Checkbox",
        },
        {
          type: "radio",
          visible: true,
          id: "",
          name: "Radio",
          dataConcept: "",
          fieldLbl: "",
          value: "",
          checked: false,
        },
      ],
    },
    {
      name: "Custom",
      icon: "dashboard_customize",
      fields: [
        {
          type: "fieldset",
          options: [
            {
              label: "Alphaway",
              value: "value",
              checked: false,
              hasFreeTxt: false,
              onlyChoice: false,
            },
            {
              label: "Alphaway",
              value: "value",
              checked: false,
              hasFreeTxt: false,
              onlyChoice: false,
            },
            {
              label: "Alphaway",
              value: "value",
              checked: false,
              hasFreeTxt: false,
              onlyChoice: false,
            },
          ],
          fieldsetType: "checkbox",
          fieldLbl: "",
          min: 0,
          max: 0,
          dataConcept: "",
          name: "Fieldset"
        },
      ],
    },
  ];

  constructor(private formService: FormService) {}

  ngOnInit() {
    this.form = this.formService.getForm();
  }

  setSelectedField(field) {
    this.field = field;
  }

  addSection() {
    const id = "formFieldsList#" + this.sectionIds.length;
    this.sectionIds.push(id);
    if (this.form.sections) {
      this.form.sections.push({
        type: "section",
        title: "",
        dataConcept: "",
        id: id,
        fields: [],
        repeat: false,
      });
    }
  }
}
