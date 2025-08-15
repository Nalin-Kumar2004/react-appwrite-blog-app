// // RTE.jsx
// import React, { useRef } from 'react';
// import { Editor } from '@tinymce/tinymce-react';
// import { Controller } from 'react-hook-form';

// export default function RTE({ name, control, label, defaultValue = "" }) {
//   const editorRef = useRef(null);
  
//   // Handle image upload
//   const handleImageUpload = (blobInfo, success, failure) => {
//     // In a real application, you would upload the image to your server
//     // and return the image URL. For demonstration, we'll use a mock URL.
//     setTimeout(() => {
//       success('https://via.placeholder.com/600x400?text=Uploaded+Image');
//     }, 1000);
//   };
  
//   // Format options for font size and fonts
//   const fontFormats = [
//     "Andale Mono=andale mono,times",
//     "Arial=arial,helvetica,sans-serif",
//     "Arial Black=arial black,avant garde",
//     "Book Antiqua=book antiqua,palatino",
//     "Comic Sans MS=comic sans ms,sans-serif",
//     "Courier New=courier new,courier",
//     "Georgia=georgia,palatino",
//     "Helvetica=helvetica",
//     "Impact=impact,chicago",
//     "Tahoma=tahoma,arial,helvetica,sans-serif",
//     "Terminal=terminal,monaco",
//     "Times New Roman=times new roman,times",
//     "Trebuchet MS=trebuchet ms,geneva",
//     "Verdana=verdana,geneva",
//     "Webdings=webdings",
//     "Wingdings=wingdings,zapf dingbats"
//   ];

//   return (
//     <div className='w-full'>
//       {label && <label className='inline-block mb-3 pl-1 text-lg font-medium text-gray-700'>{label}</label>}

//       <Controller
//         name={name || "content"}
//         control={control}
//         render={({ field: { onChange, value } }) => (
//           <Editor
//             apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
//             value={value || defaultValue}
//             onInit={(evt, editor) => (editorRef.current = editor)}
//             onEditorChange={onChange}
//             init={{
//               height: 600,
//               menubar: true,
//               branding: false,
//               image_caption: true,
//               automatic_uploads: true,
//               file_picker_types: 'image',
//               images_upload_handler: handleImageUpload,
//               plugins: [
//                 "advlist", "autolink", "lists", "link", "image", "charmap", "preview",
//                 "anchor", "searchreplace", "visualblocks", "code", "fullscreen",
//                 "insertdatetime", "media", "table", "help", "wordcount", "pagebreak",
//                 "emoticons", "codesample", "directionality", "hr", "nonbreaking",
//                 "fontsize", "fontselect", "print", "save", // Removed deprecated: "textcolor", "colorpicker"
//                 "underline" // Added underline plugin
//               ],
//               toolbar: "undo redo | styles | bold italic underline strikethrough | " +
//                        "fontselect fontsizeselect | forecolor backcolor | " +
//                        "alignleft aligncenter alignright alignjustify | " +
//                        "bullist numlist outdent indent | link image media | " +
//                        "table emoticons codesample | code fullscreen preview | " +
//                        "pagebreak hr nonbreaking | print save help",
//               content_style: `
//                 body {
//                   font-family: Arial, sans-serif;
//                   font-size: 16px;
//                   line-height: 1.6;
//                   color: #333;
//                   margin: 15px;
//                 }
//                 h1 { font-size: 2.2em; }
//                 h2 { font-size: 1.8em; }
//                 h3 { font-size: 1.4em; }
//                 img { max-width: 100%; height: auto; }
//                 table { border-collapse: collapse; width: 100%; }
//                 table, th, td { border: 1px solid #ddd; }
//                 th, td { padding: 8px; text-align: left; }
//                 th { background-color: #f2f2f2; }
//                 blockquote {
//                   border-left: 4px solid #ddd;
//                   padding-left: 15px;
//                   margin-left: 0;
//                   color: #666;
//                 }
//                 pre {
//                   background: #f5f5f5;
//                   padding: 15px;
//                   border-radius: 4px;
//                   overflow: auto;
//                 }
//                 .callout {
//                   background: #e6f7ff;
//                   border-left: 4px solid #1890ff;
//                   padding: 10px 15px;
//                   margin: 15px 0;
//                 }
//                 .warning-box {
//                   background: #fffbe6;
//                   border-left: 4px solid #faad14;
//                   padding: 10px 15px;
//                   margin: 15px 0;
//                 }
//               `,
//               style_formats: [
//                 { title: 'Heading 1', format: 'h1' },
//                 { title: 'Heading 2', format: 'h2' },
//                 { title: 'Heading 3', format: 'h3' },
//                 { title: 'Paragraph', format: 'p' },
//                 { title: 'Blockquote', format: 'blockquote' },
//                 { title: 'Code', format: 'pre' },
//                 { 
//                   title: 'Callout', 
//                   block: 'div', 
//                   classes: 'callout',
//                   wrapper: true 
//                 },
//                 {
//                   title: 'Warning Box',
//                   block: 'div',
//                   classes: 'warning-box',
//                   wrapper: true
//                 }
//               ],
//               font_formats: fontFormats.join(';'),
//               font_size_formats: '8px 10px 12px 14px 16px 18px 20px 24px 28px 32px 36px 48px 72px',
//               valid_elements: '*[*]',
//               valid_styles: {
//                 '*': 'color,background-color,font-size,font-family,text-align,float,margin,padding,display,position,top,left'
//               },
//               // Removed deprecated: textcolor_rows, textcolor_map, templates
//               a11y_advanced_options: true,
//               table_default_attributes: {
//                 border: '1'
//               },
//               table_default_styles: {
//                 width: '100%'
//               }
//             }}
//           />
//         )}
//       />
      
//       <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
//         <h3 className="font-medium text-gray-800 mb-2">Editor Features:</h3>
//         <div className="flex flex-wrap gap-2">
//           <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Font Sizes</span>
//           <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Font Selection</span>
//           <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Text/Background Colors</span>
//           <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Image Upload</span>
//           <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Tables</span>
//           <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Media Embed</span>
//           <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Code Blocks</span>
//           <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Emoticons</span>
//           <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Templates</span>
//           <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Fullscreen</span>
//           <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Print</span>
//           <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Underline</span>
//           <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Strikethrough</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// RTE.jsx
import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

export default function RTE({ name, control, label, defaultValue = "" }) {
  const editorRef = useRef(null);
  
  // Fixed image upload handler that properly returns a promise
  const handleImageUpload = (blobInfo) => {
    return new Promise((resolve, reject) => {
      // Simulate API call delay
      setTimeout(() => {
        // In a real application, you would upload the image to your server
        // and return the image URL. For demonstration, we'll use a mock URL.
        resolve('https://images.unsplash.com/photo-1682687220067-dced9a881b56');
      }, 1000);
    });
  };
  
  // Format options for font size and fonts
  const fontFormats = [
    "Andale Mono=andale mono,times",
    "Arial=arial,helvetica,sans-serif",
    "Arial Black=arial black,avant garde",
    "Book Antiqua=book antiqua,palatino",
    "Comic Sans MS=comic sans ms,sans-serif",
    "Courier New=courier new,courier",
    "Georgia=georgia,palatino",
    "Helvetica=helvetica",
    "Impact=impact,chicago",
    "Tahoma=tahoma,arial,helvetica,sans-serif",
    "Terminal=terminal,monaco",
    "Times New Roman=times new roman,times",
    "Trebuchet MS=trebuchet ms,geneva",
    "Verdana=verdana,geneva",
    "Webdings=webdings",
    "Wingdings=wingdings,zapf dingbats"
  ];

  return (
    <div className='w-full'>
      {label && <label className='inline-block mb-3 pl-1 text-lg font-medium text-gray-700'>{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Editor
            apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
            value={value || defaultValue}
            onInit={(evt, editor) => (editorRef.current = editor)}
            onEditorChange={onChange}
            init={{
              height: 600,
              menubar: true,
              branding: false,
              image_caption: true,
              automatic_uploads: true,
              file_picker_types: 'image',
              images_upload_handler: handleImageUpload,
              plugins: [
                "advlist", "autolink", "lists", "link", "image", "charmap", "preview",
                "anchor", "searchreplace", "visualblocks", "code", "fullscreen",
                "insertdatetime", "media", "table", "help", "wordcount", "pagebreak",
                "emoticons", "codesample", "directionality", "hr", "nonbreaking",
                "fontsize", "fontselect", "print", "save",
                "underline" // Added underline plugin
              ],
              toolbar: "undo redo | styles | bold italic underline strikethrough | " +
                       "fontselect fontsizeselect | forecolor backcolor | " +
                       "alignleft aligncenter alignright alignjustify | " +
                       "bullist numlist outdent indent | link image media | " +
                       "table emoticons codesample | code fullscreen preview | " +
                       "pagebreak hr nonbreaking | print save help",
              content_style: `
                body {
                  font-family: Arial, sans-serif;
                  font-size: 16px;
                  line-height: 1.6;
                  color: #333;
                  margin: 15px;
                }
                h1 { font-size: 2.2em; }
                h2 { font-size: 1.8em; }
                h3 { font-size: 1.4em; }
                img { max-width: 100%; height: auto; }
                table { border-collapse: collapse; width: 100%; }
                table, th, td { border: 1px solid #ddd; }
                th, td { padding: 8px; text-align: left; }
                th { background-color: #f2f2f2; }
                blockquote {
                  border-left: 4px solid #ddd;
                  padding-left: 15px;
                  margin-left: 0;
                  color: #666;
                }
                pre {
                  background: #f5f5f5;
                  padding: 15px;
                  border-radius: 4px;
                  overflow: auto;
                }
                .callout {
                  background: #e6f7ff;
                  border-left: 4px solid #1890ff;
                  padding: 10px 15px;
                  margin: 15px 0;
                }
                .warning-box {
                  background: #fffbe6;
                  border-left: 4px solid #faad14;
                  padding: 10px 15px;
                  margin: 15px 0;
                }
              `,
              style_formats: [
                { title: 'Heading 1', format: 'h1' },
                { title: 'Heading 2', format: 'h2' },
                { title: 'Heading 3', format: 'h3' },
                { title: 'Paragraph', format: 'p' },
                { title: 'Blockquote', format: 'blockquote' },
                { title: 'Code', format: 'pre' },
                { 
                  title: 'Callout', 
                  block: 'div', 
                  classes: 'callout',
                  wrapper: true 
                },
                {
                  title: 'Warning Box',
                  block: 'div',
                  classes: 'warning-box',
                  wrapper: true
                }
              ],
              font_formats: fontFormats.join(';'),
              font_size_formats: '8px 10px 12px 14px 16px 18px 20px 24px 28px 32px 36px 48px 72px',
              valid_elements: '*[*]',
              valid_styles: {
                '*': 'color,background-color,font-size,font-family,text-align,float,margin,padding,display,position,top,left'
              },
              a11y_advanced_options: true,
              table_default_attributes: {
                border: '1'
              },
              table_default_styles: {
                width: '100%'
              }
            }}
          />
        )}
      />
      
      <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="font-medium text-gray-800 mb-2">Editor Features:</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Font Sizes</span>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Font Selection</span>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Text/Background Colors</span>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Image Upload</span>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Tables</span>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Media Embed</span>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Code Blocks</span>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Emoticons</span>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Templates</span>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Fullscreen</span>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Print</span>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Underline</span>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Strikethrough</span>
        </div>
      </div>
    </div>
  );
}