import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import {
  addListToDropdown,
  createDropdown,
  Model,
} from "@ckeditor/ckeditor5-ui";
import { Collection } from "@ckeditor/ckeditor5-utils";

const availableVariables = [
  { label: "First Name", var: "[First_Name]" },
  { label: "Last Name", var: "[Last_Name]" },
  { label: "Display Name", var: "[Display_Name]" },
  { label: "Services", var: "[Services]" },
  { label: "Service Address", var: "[Service_Address]" },
  { label: "Scheduled", var: "[Scheduled]" },
  { label: "Actual Start Time", var: "[Actual_Start_Time]" },
  { label: "Actual End Time", var: "[Actual_End_Time]" },
  { label: "Crew Assigned", var: "[Crew_Assigned]" },
  { label: "Job Photos", var: "[Job_Photos]" },
  { label: "Job Notes", var: "[Job_Notes]" },
];

export class InsertVariables extends Plugin {
  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add("insertVariables", (locale) => {
      const items = new Collection();

      availableVariables.forEach((variable) => {
        items.add({
          type: "button",
          model: new Model({
            withText: true,
            label: variable.label,
            data: variable,
          }),
        });
      });

      const dropdown = createDropdown(locale);
      addListToDropdown(dropdown, items);

      dropdown.buttonView.set({
        label: "Insert Personalization",
        withText: true,
      });

      dropdown.render();

      console.log(dropdown);

      dropdown.on("execute", (qwe) => {
        editor.model.change((writer) => {
          const selection = qwe.source.data;
          console.log(selection);

          const varElement = writer.createText(selection.var);

          editor.model.insertContent(
            varElement,
            editor.model.document.selection
          );
        });
      });

      return dropdown;
    });
  }
}
