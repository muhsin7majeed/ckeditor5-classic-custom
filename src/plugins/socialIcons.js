import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import ButtonView from "@ckeditor/ckeditor5-ui/src/button/buttonview";

import fbIcon from "../assets/facebook.svg";

export class InsertFacebookIcon extends Plugin {
  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add("insertFacebookIcon", (locale) => {
      const view = new ButtonView(locale);

      view.set({
        label: "Insert Facebook Icon",
        icon: fbIcon,
        tooltip: true,
      });

      // Callback executed once the image is clicked.
      view.on("execute", () => {
        // const facebookUrl = prompt("Facebook URL");
        const facebookUrl = "https://facebook.com";

        editor.model.change((writer) => {
          const imageElement = writer.createElement("imageBlock", {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAC+klEQVRoge2ZPWgUQRTHfxv1xJggfiBaqAE9LYIgio3oIQgSsTJRBC00jaWdiKYJWmiRxkYh2oiNChaC4mchMYLYGINWKopdwGguiReNmLWYXdgbdteZ3be7J9wfXrFv5t57v5vZuZk5aKqpTOQIxmoDKp51AmVgpecHmAbGgPfAO2AIeO75C5cD7ANuAz8B19JmgFtAF7JfqpUOAaMRBSaxEaA7T4Ay8FQQQLfHwIasIXqAiQwhfJsEjmQB4AD9OQDodhHBd8cBrhQA4dtlKZgLBUL4dj4txOEGgPDtaFKIMjAlVMQMcA21ZJeB5cASYCnQAWwGBv4RowqsTwIitcQ+AVYb5Os1iPXQFuKgEMR9YL5hThMQFzhgCuEg84v9FTWFTGUK8pqQVawlJGAXas6m1SAwLhBH1xZgr+4MG/ZeoYQ3Y9q2AceAVQFfh0Xs48CjuA7tJNvFhq0w82IgfqWMXwNag0H1qbULWBhHaqhPwJ+ItpNAKWX8RcDOoEMHqaRM4Ksa07ZHKMfu4IMO0imU5EeE30GdGiVUV6sOslEoiRvhX+CZhOpq1UFWCCXJQ3W16iBt/D9qDz6Ybh/i1A0803y/I/rOAssi2s4Apyzy1v266yA17JfGaeC7Rf+ovmst804FH/SpNWYZTFKbLPvX1aqDfExXS2K1YL9iftADBPUmVTnJtQZty2Gg0eCD/o68SFBEGfim+apo35gnB9ga4t+eIO9wXGMr6uWVOFCFqSQQ20XtHBYHA+tTqwY8iCNtEN1D2waFHayu5lNLKg2adHKAtzTu1BoJCxw2Ii7QZ0JckM7afiDNdVBWI2J9HQTqDD3ZQCATxGxjwqaWr8+oC4Kos0WecoETwJc0Qc5R/Ij0pwEI6lKBIANSEL5OA3M5gswhOBK6elDniaxBxrG4402qdagtQlYgd1G74dy0H3gVUUwSkJeo/+wLUwW4gdq624JMAtcRuBiUuHwY8qyEusbcQfTlgwvcQR3ghlHnn1mBGppqKiv9BbQaq8hoJU0EAAAAAElFTkSuQmCC",
            // src: "https://dummyimage.com/600x400/000/fff",
            style: "object-fit: contain;",
          });

          // Insert the image in the current selection location.
          editor.model.insertContent(
            imageElement,
            editor.model.document.selection
          );
        });
      });

      return view;
    });
  }
}
