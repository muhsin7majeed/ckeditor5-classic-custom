/**
 * @license Copyright (c) 2014-2022, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor.js";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment.js";
import AutoLink from "@ckeditor/ckeditor5-link/src/autolink.js";
import Base64UploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter.js";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold.js";
import DataSchema from "@ckeditor/ckeditor5-html-support/src/dataschema.js";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials.js";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor.js";
import Heading from "@ckeditor/ckeditor5-heading/src/heading.js";
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js";
import Image from "@ckeditor/ckeditor5-image/src/image.js";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption.js";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize.js";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle.js";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar.js";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload.js";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic.js";
import Link from "@ckeditor/ckeditor5-link/src/link.js";
import LinkImage from "@ckeditor/ckeditor5-link/src/linkimage.js";
import List from "@ckeditor/ckeditor5-list/src/list.js";
import ListStyle from "@ckeditor/ckeditor5-list/src/liststyle.js";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed.js";
import MediaEmbedToolbar from "@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar.js";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph.js";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough.js";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline.js";
import WordCount from "@ckeditor/ckeditor5-word-count/src/wordcount.js";
import { InsertVariables } from "./plugins/InsertVariables";

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
  Alignment,
  AutoLink,
  Base64UploadAdapter,
  Bold,
  DataSchema,
  Essentials,
  FontColor,
  Heading,
  HorizontalLine,
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  InsertVariables,
  Italic,
  Link,
  LinkImage,
  List,
  ListStyle,
  MediaEmbed,
  MediaEmbedToolbar,
  Paragraph,
  Strikethrough,
  Underline,
  WordCount,
];

// Editor configuration.
Editor.defaultConfig = {
  toolbar: {
    items: [
      "heading",
      "|",
      "alignment",
      "|",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "|",
      "link",
      "fontColor",
      "|",
      "bulletedList",
      "numberedList",
      "|",
      "imageUpload",
      "mediaEmbed",
      "horizontalLine",
      "|",
      "insertVariables",
      "|",
    ],
  },
  language: "en",
  image: {
    toolbar: [
      "imageTextAlternative",
      "imageStyle:inline",
      "imageStyle:block",
      "imageStyle:side",
      "linkImage",
    ],
  },
};

export default Editor;
