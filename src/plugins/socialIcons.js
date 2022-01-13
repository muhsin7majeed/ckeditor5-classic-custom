import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import ButtonView from "@ckeditor/ckeditor5-ui/src/button/buttonview";

import facebookIcon from "../assets/facebook.svg";
import twitterIcon from "../assets/twitter.svg";
import instagramIcon from "../assets/instagram.svg";
import {
  facebookIconBase64,
  fbSvg,
  instagramIconBase64,
  twitterIconBase64,
} from "../assets/icons";

const iconStyles = {
  width: "50px",
  height: "50px",
  style: "object-fit: contain;",
};
export class InsertFacebookIcon extends Plugin {
  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add("insertFacebookIcon", (locale) => {
      const view = new ButtonView(locale);

      view.set({
        label: "Insert Facebook Icon",
        icon: facebookIcon,
        tooltip: true,
      });

      view.on("execute", () => {
        editor.model.change((writer) => {
          const green = "3CB54A";
          const svg = fbSvg(green);

          const encoded = window.btoa(svg);
          const src = `data:image/svg+xml;base64,${encoded}`;
          console.log(src);

          // document.body.style.background =
          //   "url(data:image/svg+xml;base64," + encoded + ")";

          const imageElement = writer.createElement("imageBlock", {
            src: src,
            alt: "Facebook Icon",
            ...iconStyles,
          });

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

export class InsertInstagramIcon extends Plugin {
  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add("insertInstagramIcon", (locale) => {
      const view = new ButtonView(locale);

      view.set({
        label: "Insert Facebook Icon",
        icon: instagramIcon,
        tooltip: true,
      });

      view.on("execute", () => {
        editor.model.change((writer) => {
          const imageElement = writer.createElement("imageBlock", {
            src: instagramIconBase64,
            alt: "Instagram Icon",
            ...iconStyles,
          });

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

export class InsertTwitterIcon extends Plugin {
  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add("insertTwitterIcon", (locale) => {
      const view = new ButtonView(locale);

      view.set({
        label: "Insert Twitter Icon",
        icon: twitterIcon,
        tooltip: true,
      });

      view.on("execute", () => {
        editor.model.change((writer) => {
          const imageElement = writer.createElement("imageBlock", {
            src: twitterIconBase64,
            alt: "Twitter Icon",
            ...iconStyles,
          });

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
