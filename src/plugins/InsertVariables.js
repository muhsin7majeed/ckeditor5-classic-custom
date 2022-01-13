import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import {
  addListToDropdown,
  createDropdown,
  Model,
} from "@ckeditor/ckeditor5-ui";
import { Collection } from "@ckeditor/ckeditor5-utils";

export class InsertVariables extends Plugin {
  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add("insertVariables", (locale) => {
      const items = new Collection();

      const availableVariables = editor.config.get("personalization.items");
      console.log(availableVariables);

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
